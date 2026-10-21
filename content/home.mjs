export function renderHome({articles,entry,external,dateLabel,featured,selection,esc,assetSources,illustrations}) {
  const panels=featured.map((a,i)=>{
    const source=assetSources.find(s=>s.file===a.image);
    return `<div class="featured-slide" id="featured-${i}" role="group" aria-roledescription="投影片" aria-label="${i+1} / 5：${esc(a.name)}" ${i?'hidden':''}><a class="featured-story" href="./skills/${a.slug}/index.html" aria-labelledby="featured-title-${i}"><div class="featured-art"><img src="./assets/${a.image||`illustrations/${a.slug}.svg`}" alt="${esc(a.imageAlt||illustrations[a.slug].summary)}" width="960" height="600" ${i?'loading="lazy"':'fetchpriority="high"'}></div><div class="featured-copy"><p class="featured-category">${esc(a.category)} · ${esc(a.name)}</p><h3 id="featured-title-${i}">${esc(a.short)}</h3><p class="featured-dek">${esc(a.dek)}</p><span class="featured-read">閱讀文章 <span aria-hidden="true">↗</span></span></div></a><p class="featured-credit">${source?`原作：${esc(source.repo)} · ${esc(source.title)}`:'功能示意・本站繪製'}</p></div>`;
  }).join('');
  const categories=[...new Set(articles.map(a=>a.category))];
  const filterButtons=['全部',...categories].map(c=>`<button type="button" class="filter" data-category="${c}" aria-pressed="${c==='全部'}">${c}<span>${c==='全部'?articles.length:articles.filter(a=>a.category===c).length}</span></button>`).join('');
  return `<main id="main">
    <section id="selection" class="specimen-spread wrap" aria-labelledby="home-title">
      <div class="cover-copy">
        <h1 id="home-title">作品背後，<br>有一套做法。</h1>
        <p class="cover-description">給創作者的 AI Skill 選刊。<br>先看作品，再找到適合你的工具。</p>
        <a class="button" href="#articles">翻閱 ${articles.length} 篇文章 <span aria-hidden="true">↗</span></a>
      </div>
      <section class="featured-carousel" aria-roledescription="輪播" aria-labelledby="featured-heading" data-featured-date="${selection.date}">
        <header class="featured-header"><div><h2 id="featured-heading">今日精選</h2><p>${dateLabel} · 每天五篇</p></div><button class="featured-control" id="featured-play" type="button" hidden>暫停輪播</button></header>
        <div class="featured-slides" aria-live="off" aria-atomic="false">${panels}</div>
        <div class="featured-navigation" hidden><button class="featured-control" id="featured-prev" type="button" aria-label="上一篇精選">←</button><div class="featured-pickers" role="group" aria-label="選擇精選文章">${featured.map((a,i)=>`<button type="button" class="featured-picker" data-featured-index="${i}" aria-label="${esc(a.name)}" aria-controls="featured-${i}" ${i?'':'aria-disabled="true"'}><span></span></button>`).join('')}</div><p id="featured-position" aria-live="off">1 / 5</p><button class="featured-control" id="featured-next" type="button" aria-label="下一篇精選">→</button></div>
        <p class="featured-note">從不同創作主題，挑五篇給你。<a href="./selection.html">選文方式</a></p>
        <noscript><p>本日五篇：${featured.map(a=>`<a href="./skills/${a.slug}/index.html">${esc(a.name)}</a>`).join('、')}。</p></noscript>
      </section>
    </section>
    <section id="articles" class="catalogue wrap">
      <aside class="catalogue-desk"><h2>文章索引</h2><p class="index-intro">今天，你想做什麼？</p><div class="filters" role="group" aria-label="依用途篩選">${filterButtons}</div></aside>
      <div class="catalogue-pages"><div class="catalogue-controls"><div class="search"><label for="search" class="visually-hidden">搜尋文章、工具或用途</label><input id="search" type="search" placeholder="搜尋工具或用途" autocomplete="off"><label for="sort" class="visually-hidden">文章排序</label><select id="sort"><option value="editorial">編輯選序</option><option value="stars">收藏最多</option><option value="growth">增長最多</option></select></div></div><p class="result-count" id="result-count" aria-live="polite">顯示 ${articles.length} / ${articles.length} 篇文章</p><div class="article-list">${articles.map(entry).join('')}</div><div id="empty" class="empty" hidden><p>沒有符合的文章，換個關鍵字試試。</p><button class="button" id="reset">清除搜尋與篩選</button></div><noscript><p>所有文章已列出。搜尋與篩選需要 JavaScript。</p></noscript></div>
    </section>
    <section id="about" class="editorial wrap"><h2>讓工具，<br>留在作品背後。</h2><div><p>這本選刊從 GitHub 的 AI Skills 專案出發，優先整理和美術有關的工作方法。每篇文章說明它能幫你做什麼、適合誰，以及開始前需要準備什麼。</p><p>配圖優先使用原作者作品，缺少可用原作時使用本站功能示意圖；需求範例由本站編寫。每日掃描後更新選刊，星數保留在 ${dateLabel}的觀察時點；它提供線索，作品與方法才是選擇的理由。${external('./credits.html','查看圖片與資料來源')}。</p></div></section>
  </main>`;
}
