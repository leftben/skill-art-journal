const list = document.querySelector('.article-list');
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
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(items=>{
    for(const item of items) if(item.isIntersecting){item.target.classList.add('entered');observer.unobserve(item.target);}
  },{threshold:0.08});
  document.querySelectorAll('.entry,.showcase-images figure,.section-heading,.editorial h2,.editorial p').forEach(element=>observer.observe(element));
}
for (const button of document.querySelectorAll('[data-copy]')) {
  button.addEventListener('click',async()=>{
    const prompt=document.getElementById(button.dataset.copy);
    try {await navigator.clipboard.writeText(prompt.textContent);button.textContent='已複製';}
    catch {button.textContent='請選取上方文字複製';}
    window.setTimeout(()=>{button.textContent='複製這段需求';},2500);
  });
}
