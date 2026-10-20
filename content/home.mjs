export function renderHome({articles,entry,external}) {
  const samples=[
    {label:'插畫',title:'一套畫風，延伸成一組作品',name:'MengTo Illustration',src:'studio-specimen.svg',slug:'mengto-illustration',mode:'vector',credit:'MengTo／原作者 SVG',alt:'MengTo 原作者的綠色等距設計工作室插畫'},
    {label:'剖解',title:'沿著結構，看懂它如何運作',name:'Anatomy',src:'anatomy-engine.webp',slug:'anatomy',mode:'technical',credit:'Anatomy／原作者示例',alt:'Anatomy 的 Raptor 引擎等距剖解圖'},
    {label:'像素',title:'讓一格格像素，變成動作',name:'Pixel Art Studio',src:'pixel-capybara.gif',slug:'pixel-art-studio',mode:'pixel',credit:'Pixel Art Studio／原作者動畫',alt:'Pixel Art Studio 原作者的水豚走路動畫'},
    {label:'圖解',title:'把複雜關係，整理成路徑',name:'Diagram Design',src:'diagram-flowchart.webp',slug:'diagram-design',mode:'diagram',credit:'Diagram Design／原作者示例',alt:'Diagram Design 原作者的流程圖'},
    {label:'識別',title:'從概念，到一個成立的標誌',name:'Logo Design Skill',src:'logo-examples.png',slug:'logo-design',mode:'brand',credit:'Logo Design Skill／原作者示例',alt:'Logo Design Skill 原作者的標誌概念總覽'}
  ];
  const first=samples[0];
  const categories=[...new Set(articles.map(a=>a.category))];
  const filterButtons=['全部',...categories].map(c=>`<button type="button" class="filter" data-category="${c}" aria-pressed="${c==='全部'}">${c}<span>${c==='全部'?articles.length:articles.filter(a=>a.category===c).length}</span></button>`).join('');
  return `<main id="main">
    <section id="selection" class="specimen-spread wrap" aria-labelledby="home-title">
      <div class="cover-copy">
        <h1 id="home-title">作品背後，<br>有一套做法。</h1>
        <p class="cover-description">給創作者的 AI Skill 選刊。<br>先看作品，再找到適合你的工具。</p>
        <a class="button" href="#articles">翻閱 ${articles.length} 篇文章 <span aria-hidden="true">↗</span></a>
      </div>
      <div class="specimen-book">
        <div class="specimen-tabs" role="group" aria-label="切換作品樣本">
          ${samples.map((s,i)=>`<button type="button" class="specimen-tab" aria-pressed="${i===0}" data-sample-src="${s.src}" data-sample-title="${s.title}" data-sample-name="${s.name}" data-sample-link="./skills/${s.slug}/index.html" data-sample-mode="${s.mode}" data-sample-credit="${s.credit}" data-sample-alt="${s.alt}">${s.label}</button>`).join('')}
        </div>
        <figure class="specimen-sheet">
          <a class="specimen-stage" id="specimen-stage" data-mode="vector" href="./skills/${first.slug}/index.html" aria-label="閱讀 ${first.name} 介紹"><img id="specimen-image" src="./assets/${first.src}" alt="${first.alt}" fetchpriority="high" width="480" height="360"></a>
          <figcaption><div class="specimen-title"><p id="specimen-name">${first.name}</p><a id="specimen-link" href="./skills/${first.slug}/index.html"><span id="specimen-title">${first.title}</span><span class="read-link">閱讀介紹</span></a></div><p class="specimen-credit" id="specimen-credit" aria-live="polite">${first.credit}</p></figcaption>
        </figure>
        <noscript><p>所有工具介紹都在下方目錄，可直接閱讀。</p></noscript>
      </div>
    </section>
    <section id="articles" class="catalogue wrap">
      <aside class="catalogue-desk"><h2>文章索引</h2><p class="index-intro">今天，你想做什麼？</p><div class="filters" role="group" aria-label="依用途篩選">${filterButtons}</div></aside>
      <div class="catalogue-pages"><div class="catalogue-controls"><div class="search"><label for="search" class="visually-hidden">搜尋文章、工具或用途</label><input id="search" type="search" placeholder="搜尋工具或用途" autocomplete="off"><label for="sort" class="visually-hidden">文章排序</label><select id="sort"><option value="editorial">編輯選序</option><option value="stars">收藏最多</option><option value="growth">增長最多</option></select></div></div><p class="result-count" id="result-count" aria-live="polite">顯示 ${articles.length} / ${articles.length} 篇文章</p><div class="article-list">${articles.map(entry).join('')}</div><div id="empty" class="empty" hidden><p>沒有符合的文章，換個關鍵字試試。</p><button class="button" id="reset">清除搜尋與篩選</button></div><noscript><p>所有文章已列出。搜尋與篩選需要 JavaScript。</p></noscript></div>
    </section>
    <section id="about" class="editorial wrap"><h2>讓工具，<br>留在作品背後。</h2><div><p>這本選刊從 GitHub 的 AI Skills 專案出發，優先整理和美術有關的工作方法。每篇文章說明它能幫你做什麼、適合誰，以及開始前需要準備什麼。</p><p>圖片是原作者的作品，需求範例則由本站編寫。星數保留在 2026 年 10 月 20 日的觀察時點；它提供線索，作品與方法才是選擇的理由。${external('./credits.html','查看圖片與資料來源')}。</p></div></section>
  </main>`;
}
