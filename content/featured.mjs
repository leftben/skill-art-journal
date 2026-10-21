// All inputs are committed data. Never use Math.random() or the build machine's date.
export const selectionVersion='1.0';
const DAY=86400000;
const clamp=n=>Math.max(0,Math.min(1,n));
const relevance={'插畫與圖解':1,'像素與遊戲':1,'品牌與設計':1,'3D 與材質':1,'影像與影片':.9,'網頁與介面':.8};
const publication=a=>a.published||'2026-10-20T00:34:43Z';

export function selectFeatured(articles,snapshot,history=[]){
  const date=snapshot.date, today=Date.parse(`${date}T00:00:00Z`);
  if(!Number.isFinite(today))throw new Error('Invalid selection date');
  const stats=new Map(snapshot.repositories.map(r=>[r.repo,r]));
  const previous=history.filter(h=>h.date<date&&today-Date.parse(`${h.date}T00:00:00Z`)<=7*DAY);
  const ranked=articles.filter(a=>{
    const s=stats.get(a.repo);
    return s&&!s.archived&&relevance[a.category]&&a.kind!=='歷史技能目錄'&&
      publication(a).slice(0,10)<=date&&a.intro&&a.process&&a.outputs&&a.example;
  }).map(a=>{
    const s=stats.get(a.repo);
    const elapsed=(Date.parse(s.observed_at_utc)-Date.parse(s.previous_observed_at_utc))/DAY;
    // Null, decreases and comparisons with no valid time interval provide no growth boost.
    const growth=s.delta>0&&elapsed>0 ? clamp((s.delta/elapsed)/(Math.max(0,s.stars-s.delta)+200)/.05) : 0;
    const age=Math.max(0,(today-Date.parse(`${(a.updated||publication(a).slice(0,10))}T00:00:00Z`))/DAY);
    const exposures=previous.filter(h=>h.slugs.includes(a.slug)).length;
    const factors={visual:a.image?1:.45,relevance:relevance[a.category],growth,freshness:Math.pow(2,-age/7),popularity:clamp(Math.log10(Math.max(0,s.stars)+1)/5)};
    const penalty=Math.min(36,12*exposures);
    const score=30*factors.visual+25*factors.relevance+20*factors.growth+15*factors.freshness+10*factors.popularity-penalty;
    return {slug:a.slug,repo:a.repo,category:a.category,published:publication(a).slice(0,10),score:Number(score.toFixed(4)),factors,exposures,penalty};
  }).sort((a,b)=>b.score-a.score||(a.slug<b.slug?-1:a.slug>b.slug?1:0));
  if(ranked.length<5||new Set(ranked.map(a=>a.category)).size<3)throw new Error('Daily features need five verified articles across three categories');
  const chosen=[];
  const add=a=>{if(!chosen.some(c=>c.repo===a.repo)&&chosen.filter(c=>c.category===a.category).length<2)chosen.push(a);};
  // Reserve the highest-scoring newly published article when today's scan has one.
  const fresh=ranked.find(a=>a.published===date);if(fresh)add(fresh);
  for(const a of ranked){if(new Set(chosen.map(c=>c.category)).size>=3)break;if(!chosen.some(c=>c.category===a.category))add(a);}
  for(const a of ranked){if(chosen.length===5)break;add(a);}
  if(chosen.length!==5)throw new Error('Insufficient distinct repositories for daily features');
  chosen.sort((a,b)=>b.score-a.score||(a.slug<b.slug?-1:1));
  return {version:selectionVersion,date,items:chosen,ranked};
}
