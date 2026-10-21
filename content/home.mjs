export function renderHome({articles,entry,external,dateLabel,featured,selection,esc,assetSources,illustrations}) {
  const panels=featured.map((a,i)=>{
    const source=assetSources.find(s=>s.file===a.image);
    return `<div class="featured-slide" id="featured-${i}" role="group" aria-roledescription="投影片" aria-label="${i+1} / 5：${esc(a.name)}" ${i?'hidden inert':''}><a class="featured-story" href="./skills/${a.slug}/index.html" aria-labelledby="featured-title-${i}"><div class="featured-art"><img src="./assets/${a.image||`illustrations/${a.slug}.svg`}" alt="${esc(a.imageAlt||illustrations[a.slug].summary)}" width="960" height="600" ${i?'loading="lazy"':'fetchpriority="high"'}></div><div class="featured-copy"><h3 id="featured-title-${i}">${esc(a.short)}</h3><p class="featured-category">${esc(a.name)} · ${esc(a.category)}</p><p class="featured-dek">${esc(a.dek)}</p><span class="featured-read">閱讀這篇文章 <span aria-hidden="true">↗</span></span></div></a><p class="featured-credit">${source?`原作：${esc(source.repo)} · ${esc(source.title)}`:'功能示意・本站繪製'}</p></div>`;
  }).join('');
  const categories=[...new Set(articles.map(a=>a.category))];
  const filterButtons=['全部',...categories].map(c=>`<button type="button" class="filter" data-category="${c}" aria-pressed="${c==='全部'}">${c}<span>${c==='全部'?articles.length:articles.filter(a=>a.category===c).length}</span></button>`).join('');
  return `<main id="main">
    <section id="selection" class="specimen-spread wrap" aria-labelledby="featured-heading">
      <section class="featured-carousel" aria-roledescription="輪播" aria-labelledby="featured-heading" data-featured-date="${selection.date}">
        <header class="featured-header"><div class="featured-edition"><h2 id="featured-heading">今日選讀</h2><p><time datetime="${selection.date}" title="${dateLabel}">${Number(selection.date.slice(5,7))} 月 ${Number(selection.date.slice(8))} 日</time> · 五篇精選</p></div></header>
        <div class="featured-slides" aria-live="off" aria-atomic="false">${panels}</div>
        <div class="featured-navigation" role="group" aria-label="精選文章與輪播控制" hidden><button class="featured-control featured-arrow" id="featured-prev" type="button" aria-label="上一篇精選">←<span>上一篇</span></button><div class="featured-pickers" role="group" aria-label="選擇精選文章">${featured.map((a,i)=>`<button type="button" class="featured-picker" data-featured-index="${i}" data-featured-name="${esc(a.name)}" aria-label="${esc(a.name)}：${esc(a.short)}" aria-controls="featured-${i}" ${i?'':'aria-current="true"'}><img src="./assets/${a.image||`illustrations/${a.slug}.svg`}" alt="" width="80" height="60" loading="lazy"><span class="featured-picker-text"><span class="featured-picker-title">${esc(a.short)}</span><span class="featured-picker-status" aria-hidden="true"></span></span></button>`).join('')}</div><button class="featured-control featured-arrow" id="featured-next" type="button" aria-label="下一篇精選"><span>下一篇</span>→</button></div>
        <noscript><p>本日五篇：${featured.map(a=>`<a href="./skills/${a.slug}/index.html">${esc(a.name)}</a>`).join('、')}。</p></noscript>
      </section>
    </section>
    <section id="articles" class="catalogue wrap">
      <header class="catalogue-heading"><div><h2>找一個創作方法</h2><p class="index-intro">從插畫、品牌到遊戲，看看 AI Skill 能幫上什麼忙。</p></div><div class="search"><label for="search" class="visually-hidden">搜尋文章、工具或用途</label><input id="search" type="search" placeholder="搜尋工具或用途" autocomplete="off"><label for="sort" class="visually-hidden">文章排序</label><select id="sort"><option value="editorial">編輯選序</option><option value="stars">收藏最多</option><option value="growth">增長最多</option></select></div></header>
      <div class="filters" role="group" aria-label="依用途篩選">${filterButtons}</div>
      <div class="catalogue-pages"><p class="result-count" id="result-count" aria-live="polite">顯示 ${articles.length} / ${articles.length} 篇文章</p><div class="article-list">${articles.map(entry).join('')}</div><div id="empty" class="empty" hidden><p>沒有符合的文章，換個關鍵字試試。</p><button class="button" id="reset">清除搜尋與篩選</button></div><noscript><p>所有文章已列出。搜尋與篩選需要 JavaScript。</p></noscript></div>
    </section>
    <section id="about" class="editorial wrap"><div><h2>工具的事，<br>用作品來說。</h2><a href="./credits.html">圖片與資料來源</a></div><div><p>這本選刊從 GitHub 的 AI Skills 專案出發，優先整理和美術有關的工作方法。每篇文章說明它能幫你做什麼、適合誰，以及開始前需要準備什麼。</p><p>配圖優先使用原作者作品，缺少可用原作時使用本站功能示意圖；需求範例由本站編寫。每日掃描後更新選刊，星數保留在 ${dateLabel}的觀察時點；作品與方法才是選擇的理由。</p></div></section>
  </main>`;
}
