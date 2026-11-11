const list = document.querySelector('.article-list');
const carousel=document.querySelector('.featured-carousel');
if(carousel){
  const slides=[...carousel.querySelectorAll('.featured-slide')];
  const pickers=[...carousel.querySelectorAll('[data-featured-index]')];
  const region=carousel.querySelector('.featured-slides');
  const toggle=carousel.querySelector('#featured-toggle');
  const position=carousel.querySelector('#featured-count');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let index=0,playing=!reduced.matches,timer=null,inView=false,pending=0;
  function measure(){
    // Measure all panels synchronously, then truly hide the inactive ones.
    // Stable height prevents the catalogue from jumping when captions differ.
    region.style.minHeight='';
    region.classList.add('is-measuring');
    region.style.minHeight=`${Math.ceil(Math.max(...slides.map(s=>s.getBoundingClientRect().height)))}px`;
    region.classList.remove('is-measuring');
  }
  function schedule(){
    clearTimeout(timer);
    pickers.forEach((button,i)=>{
      const current=i===index;
      const title=button.querySelector('.featured-picker-title').textContent;
      if(current)button.setAttribute('aria-current','true');
      else button.removeAttribute('aria-current');
      button.setAttribute('aria-label',`${button.dataset.featuredName}：${title}，${current?`目前第 ${i+1} / ${slides.length} 篇`:`切換至第 ${i+1} / ${slides.length} 篇`}`);
      button.title=`切換精選：${title}`;
    });
    toggle.textContent=playing?'暫停輪播':'播放輪播';
    position.textContent=`${index+1} / ${slides.length}`;
    region.setAttribute('aria-live',playing?'off':'polite');
    if(playing&&inView&&!document.hidden)timer=setTimeout(()=>show(index+1),8000);
  }
  function stop(){pending++;playing=false;schedule();}
  async function show(next){
    const target=(next+slides.length)%slides.length;
    if(target===index){schedule();return;}
    const request=++pending;
    const image=slides[target].querySelector('img');
    image.loading='eager';
    try{await image.decode();}catch{stop();return;}
    if(request!==pending)return;
    slides[index].hidden=true;
    slides[index].inert=true;
    index=target;
    slides[index].hidden=false;
    slides[index].inert=false;
    slides[index].classList.remove('featured-arrive');
    if(!reduced.matches)requestAnimationFrame(()=>slides[index].classList.add('featured-arrive'));
    schedule();
  }
  // Focus/hover/manual navigation stop autoplay until an explicit Play request.
  carousel.addEventListener('focusin',event=>{if(!carousel.contains(event.relatedTarget))stop();});
  carousel.addEventListener('pointerenter',stop);
  carousel.querySelector('#featured-prev').addEventListener('click',()=>{stop();show(index-1);});
  carousel.querySelector('#featured-next').addEventListener('click',()=>{stop();show(index+1);});
  pickers.forEach((button,i)=>button.addEventListener('click',()=>{stop();show(i);}));
  toggle.addEventListener('click',()=>{playing=!playing;schedule();});
  carousel.addEventListener('toggle',measure,true);
  reduced.addEventListener('change',stop);
  document.addEventListener('visibilitychange',schedule);
  if('IntersectionObserver'in window){new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;schedule();},{threshold:.25}).observe(carousel);}
  else inView=true;
  carousel.querySelector('.featured-navigation').hidden=false;
  measure();
  document.fonts?.ready.then(measure);
  let measuredWidth=carousel.clientWidth;
  if('ResizeObserver'in window)new ResizeObserver(()=>{const width=carousel.clientWidth;if(width!==measuredWidth){measuredWidth=width;measure();}}).observe(carousel);
  else window.addEventListener('resize',measure);
  schedule();
}
if (list) {
  const entries = [...list.querySelectorAll('.entry')];
  const search = document.querySelector('#search');
  const sort = document.querySelector('#sort');
  const filters = [...document.querySelectorAll('.filter')];
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#empty');
  const params = new URLSearchParams(location.search);
  const validCategories = filters.map(b=>b.dataset.category);
  let category = validCategories.includes(params.get('category')) ? params.get('category') : '全部';
  search.value = params.get('q') || '';
  if (['editorial','stars','growth'].includes(params.get('sort'))) sort.value = params.get('sort');
  function update() {
    const query = search.value.trim().toLocaleLowerCase('zh-TW');
    const ordered = entries.slice().sort((a,b)=>sort.value==='stars'?Number(b.dataset.stars)-Number(a.dataset.stars):sort.value==='growth'?Number(b.dataset.delta)-Number(a.dataset.delta):Number(a.dataset.order)-Number(b.dataset.order));
    let visible=0;
    for (const entry of ordered) {
      entry.hidden = (category!=='全部' && entry.dataset.category!==category) || (query && !entry.dataset.search.includes(query));
      if (!entry.hidden) visible++;
      list.append(entry);
    }
    filters.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.category===category)));
    count.textContent=`顯示 ${visible} / ${entries.length} 篇文章`;
    empty.hidden=visible!==0;
    const next = new URL(location.href);
    next.search='';
    if(category!=='全部')next.searchParams.set('category',category);
    if(search.value.trim())next.searchParams.set('q',search.value.trim());
    if(sort.value!=='editorial')next.searchParams.set('sort',sort.value);
    history.replaceState(null,'',next);
  }
  filters.forEach(button=>button.addEventListener('click',()=>{category=button.dataset.category;update();}));
  search.addEventListener('input',update);
  sort.addEventListener('change',update);
  document.querySelector('#reset')?.addEventListener('click',()=>{category='全部';search.value='';sort.value='editorial';update();search.focus();});
  update();
}
for (const button of document.querySelectorAll('[data-copy]')) {
  button.addEventListener('click',async()=>{
    const prompt=document.getElementById(button.dataset.copy);
    try {await navigator.clipboard.writeText(prompt.textContent);button.textContent='已複製';}
    catch {button.textContent='請選取上方文字複製';}
    window.setTimeout(()=>{button.textContent='複製這段需求';},2500);
  });
}
