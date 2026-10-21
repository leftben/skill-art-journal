import {createHash} from 'node:crypto';
import {readFile,writeFile,mkdir,cp} from 'node:fs/promises';
import {articles,assetSources} from '../content/articles.mjs';
import {renderHome} from '../content/home.mjs';
import {illustrations} from '../content/illustrations.mjs';
import {generateIllustrations} from './illustrate.mjs';
import {selectFeatured} from '../content/featured.mjs';
const snapshot=JSON.parse(await readFile(new URL('../content/snapshot.json',import.meta.url),'utf8'));
const stats=new Map(snapshot.repositories.map(r=>[r.repo,r]));
const history=JSON.parse(await readFile(new URL('../content/featured-history.json',import.meta.url),'utf8'));
if(history.some(h=>h.date>snapshot.date))throw new Error('Snapshot is older than featured history; update the scan before publishing');
const selection=selectFeatured(articles,snapshot,history);
const featured=selection.items.map(item=>articles.find(a=>a.slug===item.slug));
const root='docs';
const assetVersion=createHash('sha256').update(await readFile(new URL('../public/journal.css',import.meta.url))).update(await readFile(new URL('../public/site.js',import.meta.url))).digest('hex').slice(0,10);
const site='https://leftben.github.io/skill-art-journal/';
const repo='https://github.com/leftben/skill-art-journal';
const categories=[...new Set(articles.map(a=>a.category))];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=n=>new Intl.NumberFormat('en-US').format(n);
const date=snapshot.date.replaceAll('-','.');
const dateLabel=snapshot.date.replace(/^(\d+)-(\d+)-(\d+)$/,(_,y,m,d)=>`${y} 年 ${Number(m)} 月 ${Number(d)} 日`);
const published=a=>a.published||'2026-10-20T00:34:43Z';
const modified=a=>a.updated||published(a).slice(0,10);
const deltaLabel=n=>`${n>=0?'+':''}${num(n)}`;
await mkdir(root,{recursive:true});
await generateIllustrations();
await cp('public',root,{recursive:true});
const external=(url,label)=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;
const header=(base,isHome)=>`<a class="skip" href="#main">跳至主要內容</a><header class="masthead wrap"><p class="masthead-note">每日掃描 GitHub<br>為創作者選工具</p><a class="wordmark" href="${base}index.html" aria-label="Skill 美術誌首頁">${isHome?'<h1 class="brand-name">Skill 美術誌</h1>':'<span class="brand-name">Skill 美術誌</span>'}<p class="brand-caption">給創作者的 AI Skill 選刊</p></a><nav class="nav" aria-label="主要導覽"><a href="${base}index.html#articles">文章索引</a><a href="${base}index.html#about">關於選刊</a><a class="source-nav" href="${repo}">GitHub</a></nav></header>`;
const footer=base=>`<footer class="site-footer wrap"><p>Skill 美術誌・為創作者選工具</p><nav aria-label="頁尾導覽"><a href="${base}credits.html">圖片與來源</a><a href="${repo}">GitHub 原始碼</a><a href="${base}feed.xml">RSS 訂閱</a></nav></footer>`;
function shell({title,description,body,base='./',path='',image}){
  return `<!doctype html>\n<html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}｜Skill 美術誌</title><meta name="description" content="${esc(description)}"><meta name="theme-color" content="#ffffff"><link rel="canonical" href="${site}${path}"><meta property="og:type" content="${path.startsWith('skills/')?'article':'website'}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${site}${path}">${image?`<meta property="og:image" content="${site}assets/${esc(image)}">`:''}<meta property="og:locale" content="zh_TW"><link rel="icon" href="${base}favicon.svg" type="image/svg+xml"><link rel="alternate" type="application/rss+xml" title="Skill 美術誌" href="${base}feed.xml"><link rel="stylesheet" href="${base}journal.css?v=${assetVersion}"><script src="${base}site.js?v=${assetVersion}" defer></script></head><body class="${path?'reading-page':'home-page'}"><div class="paper">${header(base,!path)}${body}${footer(base)}</div></body></html>`;
}
function figure(a,base='./',extra=false){
  const file=extra?a.extraImage:a.image;if(!file)return '';
  const source=assetSources.find(s=>s.file===file);
  return `<figure class="article-image ${a.slug==='pixel-art-studio'?'pixel':''}"><img src="${base}assets/${esc(file)}" alt="${esc(extra?source.title:a.imageAlt)}" ${extra?'loading="lazy"':''}><figcaption>${esc(source.title)} · 原作者 ${external(`https://github.com/${source.repo}`,source.repo)} · ${external(`${base}assets/licenses/${source.repo.replaceAll('/','--')}.txt`,source.license)}</figcaption></figure>`;
}
function illustrationFigure(a,base){
  const item=illustrations[a.slug];
  return `<figure class="skill-illustration"><a href="${base}assets/illustrations/${a.slug}.svg" target="_blank" rel="noopener noreferrer" aria-label="放大 ${esc(a.name)} 功能插圖"><img src="${base}assets/illustrations/${a.slug}.svg" alt="${esc(item.summary)}" width="960" height="500" fetchpriority="high"></a><figcaption><p>${esc(item.summary)}</p><span>功能示意・本站繪製 ${external(`${base}assets/illustrations/${a.slug}.svg`,'放大查看')}</span></figcaption></figure>`;
}
function entry(a,index){
  const s=stats.get(a.repo);
  return `<article class="entry" data-category="${esc(a.category)}" data-search="${esc(`${a.name} ${a.title} ${a.dek} ${a.category} ${a.repo}`.toLowerCase())}" data-stars="${s.stars}" data-delta="${s.delta??-1}" data-order="${index}"><a class="entry-link" href="./skills/${a.slug}/index.html" aria-labelledby="entry-${a.slug}"><span class="entry-cover" aria-hidden="true"><img src="./assets/${a.image||`illustrations/${a.slug}.svg`}" alt="" width="960" height="500" loading="lazy"></span><div class="entry-main"><h3 id="entry-${a.slug}">${esc(a.short)}</h3><p class="entry-name">${esc(a.name)}</p><p>${esc(a.dek)}</p><div class="entry-meta"><span>${esc(a.category)}</span><span>${num(s.stars)} 星</span><span>${s.delta===null?'首次收錄':`較前次 ${deltaLabel(s.delta)}`}</span></div></div></a></article>`;
}
const home=renderHome({articles,stats,num,entry,external,dateLabel,featured,selection,esc,assetSources,illustrations});
await writeFile(`${root}/index.html`,shell({title:'給創作者的 AI Skill 選刊',description:`繁體中文介紹美術、設計、遊戲與影片 AI Skills。${articles.length} 篇獨立文章，附作者範例、用途、工具條件與 GitHub 來源。`,body:home,image:'mengto-gouache.jpg'}));
await mkdir(`${root}/skills`,{recursive:true});
for(const a of articles){
  const s=stats.get(a.repo);if(!s)throw new Error(`Missing snapshot: ${a.repo}`);
  const related=articles.filter(b=>b.slug!==a.slug&&b.category===a.category).slice(0,3);
  const body=`<main id="main"><header class="article-header wrap"><div class="article-side"><a href="../../index.html#articles">回文章目錄</a><p>${esc(a.category)} · ${esc(a.kind)}</p></div><div class="article-headline"><h1>${esc(a.title)}</h1><p class="dek">${esc(a.dek)}</p><div class="article-facts"><span>${esc(a.name)}</span><span>${num(s.stars)} GitHub 星</span><span>收錄 ${published(a).slice(0,10).replaceAll('-','.')}</span><span>資料核對 ${date}</span></div></div></header>${a.image?figure(a,'../../'):illustrationFigure(a,'../../')}<div class="article-layout wrap"><nav class="toc" aria-label="文章目錄"><a href="#how">它怎麼幫忙</a><a href="#try">可以這樣開口</a><a href="#before">開始之前</a><a href="#sources">作者與來源</a></nav><div class="article-body"><p>${esc(a.intro)}</p><section id="how"><h2>它怎麼幫忙</h2><p>${esc(a.process)}</p></section>${a.image?`<section><h2>功能快速理解</h2>${illustrationFigure(a,'../../')}</section>`:''}<section id="try"><h2>可以這樣開口</h2><p>這是一個可依需求修改的委託範例。</p><div class="prompt"><p id="example-prompt">${esc(a.example)}</p><button class="copy-button" type="button" data-copy="example-prompt" aria-live="polite">複製這段需求</button></div></section><section id="fit"><h2>適合什麼工作</h2><p>${esc(a.fit)}</p></section><section id="before"><h2>開始之前</h2><dl class="fact-list"><dt>準備工具</dt><dd>${esc(a.requirements)}</dd><dt>使用成本</dt><dd>${esc(a.costs)}</dd><dt>交付內容</dt><dd>${esc(a.outputs)}</dd><dt>先留意</dt><dd>${esc(a.caveat)}</dd></dl></section>${a.update?`<section><h2>最近的觀察</h2><p class="update">${esc(a.update)}</p></section>`:''}${a.extraImage?`<section><h2>看看其他畫風</h2>${figure(a,'../../',true)}</section>`:''}<section id="sources"><h2>作者與來源</h2><p>本文依作者公開說明整理，沒有實際執行這個專案。功能插圖由本站繪製，原作者範例另行標示；並非本站執行技能的測試結果。GitHub 星數為專案總量，觀察時間為 ${esc(new Date(s.observed_at_utc).toLocaleString('zh-TW',{timeZone:'Asia/Taipei',year:'numeric',month:'long',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:false}))}（台北時間）。</p><p style="margin-top:18px">${s.delta===null?'首次收錄，尚無前次收藏量比較。':`與前次快照相比${s.delta>=0?'增加':'減少'} ${num(Math.abs(s.delta))} 星；這不是 GitHub Trending 排名。`}</p><div class="source-links" style="margin-top:22px">${external(`https://github.com/${a.repo}`,'原作者 GitHub')}${external(a.source||`https://github.com/${a.repo}/blob/${s.default_branch}/README.md`,'閱讀專案說明')}${a.skill?external(a.skill,'實際 SKILL.md'):''}${a.extraSource?external(a.extraSource,'目前的官方入口'):''}${a.authorExample?external(a.authorExample,'查看原作者範例'):''}${external(`https://api.github.com/repos/${a.repo}`,'星數來源')}</div></section></div></div>${related.length?`<section class="related wrap"><h2>接著讀</h2><div class="related-links">${related.map(b=>`<a href="../${b.slug}/index.html"><small>${esc(b.name)}</small>${esc(b.short)}</a>`).join('')}</div></section>`:''}</main>`;
  await mkdir(`${root}/skills/${a.slug}`,{recursive:true});
  await writeFile(`${root}/skills/${a.slug}/index.html`,shell({title:a.title,description:a.dek,body,base:'../../',path:`skills/${a.slug}/`,image:a.image}));
}
const credits=`<main id="main" class="credits wrap"><h1>圖片與來源</h1><p>Skill 美術誌的文章是繁體中文編輯整理。用途範例由本站撰寫，並非測試結果；功能插圖由本站繪製；原作者示例另行標示，並保留對應的 MIT 授權文字。</p><h2>資料怎麼來</h2><p>本期依 ${dateLabel}的 GitHub API 快照、作者 README 與已核對的 SKILL.md 整理。每篇文章提供原始專案連結。星數只表示專案收藏總量，不是品質評分。沒有昨日資料的新候選不計算日增量。</p><h2>本站功能插圖</h2><p>每篇文章都有一張本站繪製的 SVG 功能示意圖，說明輸入、處理與成果。這些是編輯圖解，並非原作者的實際輸出；以本站 MIT 授權提供。原始圖檔可由各篇文章的「放大查看」開啟。</p><h2>原作者圖片與授權</h2>${assetSources.map(a=>`<section class="credit-item"><img src="./assets/${a.file}" alt="${esc(a.title)}" loading="lazy"><h2>${esc(a.title)}</h2><p>作者／專案：${external(`https://github.com/${a.repo}`,a.repo)}。${external(a.url,'原始圖片')} · ${external(`./assets/licenses/${a.repo.replaceAll('/','--')}.txt`,'保留的 MIT 授權全文')}。</p></section>`).join('')}<h2>你的資料</h2><p>這是靜態閱讀網站，沒有帳號、追蹤器或留言資料庫。搜尋在瀏覽器中完成，條件會保留在網址，方便分享。複製範例只有在按下按鈕時使用剪貼簿。字體由 Google Fonts 載入，無法連線時使用裝置字體。</p></main>`;
await writeFile(`${root}/credits.html`,shell({title:'圖片與來源',description:'Skill 美術誌的資料來源、原作者圖片與 MIT 授權說明。',body:credits,path:'credits.html'}));
const rss=`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Skill 美術誌</title><link>${site}</link><description>給創作者的 AI Skill 選刊</description><language>zh-TW</language>${articles.map(a=>`<item><title>${esc(a.title)}</title><link>${site}skills/${a.slug}/</link><guid isPermaLink="true">${site}skills/${a.slug}/</guid><description>${esc(a.dek)}</description><pubDate>${new Date(published(a)).toUTCString()}</pubDate></item>`).join('')}</channel></rss>`;
await writeFile(`${root}/feed.xml`,rss);
await writeFile(`${root}/sitemap.xml`,`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${site}</loc></url><url><loc>${site}selection.html</loc><lastmod>${snapshot.date}</lastmod></url>${articles.map(a=>`<url><loc>${site}skills/${a.slug}/</loc><lastmod>${modified(a)}</lastmod></url>`).join('')}</urlset>`);
await writeFile(`${root}/robots.txt`,`User-agent: *\nAllow: /\nSitemap: ${site}sitemap.xml\n`);
await writeFile(`${root}/.nojekyll`,'');
await writeFile(`${root}/favicon.svg`,'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#062b8a" d="M0 0h64v64H0z"/><path fill="#e6dbc7" d="M46 15H26c-10 0-14 6-14 13 0 7 6 10 17 12 6 1 9 2 9 5 0 2-2 3-6 3H14v8h19c11 0 16-5 16-12 0-8-7-11-18-13-6-1-8-2-8-4 0-3 2-4 6-4h17z"/></svg>');
await writeFile(`${root}/404.html`,shell({title:'找不到這篇文章',description:'回到 Skill 美術誌尋找其他文章。',body:'<main id="main" class="credits wrap"><h1>這篇文章不在這裡</h1><p>回到目錄，用工具名稱或用途找找看。</p><a class="button" href="/skill-art-journal/">回文章目錄</a></main>',base:'/skill-art-journal/',path:'404.html'}));
const rules=`<main id="main" class="credits wrap"><h1>每天五篇，怎麼選？</h1><p>先看作品能做什麼，再看它是否值得讀。首頁精選由固定公式選出，目的是讓你快速認識不同創作方法；分數是本站的選文指標，不是工具品質評分，也不是實測效果。</p><h2>五項分數與曝光扣分</h2><p>總分 = 30 × 原作展示 + 25 × 創作相關性 + 20 × 收藏增長 + 15 × 新鮮度 + 10 × 人氣 − 近期曝光扣分。五項數值都介於 0 和 1。</p><dl class="fact-list"><dt>原作展示</dt><dd>已核對來源與授權的作者配圖為 1；只有本站功能圖為 0.45。這衡量文章展示條件，不代表技能品質。</dd><dt>相關性</dt><dd>插畫、像素遊戲、品牌設計及 3D 為 1；影像影片為 0.9；網頁介面為 0.8。官方工具目錄及停用項目不參選。</dd><dt>收藏增長</dt><dd>先把快照差值換算成每日增量，再除以「前次星數 + 200」與 5%，上限為 1。新候選無比較資料、缺少有效時間區間或星數下降時為 0；不捏造增長。</dd><dt>新鮮度</dt><dd>2 的（負天數 ÷ 7）次方：新收錄或實質內容更新當天為 1，七天後為 0.5。刷新星數不算內容更新。</dd><dt>人氣</dt><dd>log10（星數 + 1）÷ 5，上限為 1。用對數縮小大型專案與小眾創作工具的差距。</dd><dt>曝光扣分</dt><dd>前七個日曆日每入選一次扣 12 分，最多扣 36 分。當天重建不重複計算，逐步讓其他文章也有展示機會。</dd></dl><h2>五篇也要看見不同內容</h2><p>有當日新收錄時，先保留分數最高的新文章；接著按分數補到三種主題，再填滿五篇。同類最多兩篇、相同 GitHub 專案只選一次；同分按固定 slug 順序。最後依分數安排輪播順序。停用、封存或缺乏完整文章的項目不參選。候選不足時會讓建置失敗並回報，不填入虛構文章。</p><p>選文日期以台北每日掃描快照日期為準；每天掃描發布後更新。所有訪客看到同一天的同一組精選，重新整理不會隨機換人。若排程當日尚未成功發布，保留上一份精選並顯示它的日期。</p><h2>${dateLabel}的精選</h2><ol>${selection.items.map(item=>{const a=articles.find(a=>a.slug===item.slug);return `<li>${external(`./skills/${a.slug}/index.html`,a.name)}：${item.score.toFixed(2)} 分，${esc(a.category)}；近七日已展示 ${item.exposures} 次。</li>`;}).join('')}</ol><p>${external('./featured.json','查看當日完整計分資料')} · ${external('https://github.com/leftben/skill-art-journal/blob/main/content/featured.mjs','查看選文程式')}</p><h2>閱讀時由你控制</h2><p>每八秒換一篇。滑鼠移入、鍵盤進入或手動切換後會暫停，按「播放輪播」才繼續；捲離畫面或切換分頁時也會暫停。減少動態偏好預設關閉自動播放。${external('https://www.w3.org/WAI/ARIA/apg/patterns/carousel/','參考 W3C 輪播互動指引')}。</p><a class="button" href="./index.html#selection">回到今日精選</a></main>`;
await writeFile(`${root}/selection.html`,shell({title:'每日精選的選文方式',description:'公開每日五篇精選的固定公式、主題限制與當日計分。',body:rules,path:'selection.html'}));
await writeFile(`${root}/featured.json`,JSON.stringify(selection,null,2)+'\n');
// Same-day upsert; only earlier calendar days affect today's selection.
const updatedHistory=[...history.filter(h=>h.date<snapshot.date),{date:snapshot.date,version:selection.version,slugs:selection.items.map(a=>a.slug)}].slice(-30);
await writeFile(new URL('../content/featured-history.json',import.meta.url),JSON.stringify(updatedHistory,null,2)+'\n');
console.log(`Built ${articles.length} article pages, home, credits, RSS and sitemap.`);
