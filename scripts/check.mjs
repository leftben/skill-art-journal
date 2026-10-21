import {readFile,readdir,stat} from 'node:fs/promises';
import {resolve,dirname,join} from 'node:path';
import {articles} from '../content/articles.mjs';
import {illustrations} from '../content/illustrations.mjs';
const root=resolve('docs');let checked=0;
async function walk(dir){for(const d of await readdir(dir,{withFileTypes:true})){const p=join(dir,d.name);if(d.isDirectory())await walk(p);else if(d.name.endsWith('.html')){const html=await readFile(p,'utf8');if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)throw new Error(`Expected one h1: ${p}`);if(!html.includes('lang="zh-Hant"'))throw new Error(`Missing language: ${p}`);for(const [,attr,url]of html.matchAll(/\s(href|src)="([^"]+)"/g)){if(url.startsWith('http')||url.startsWith('#')||url.startsWith('data:')||url.startsWith('/skill-art-journal/'))continue;const target=resolve(dirname(p),url.split('#')[0].split('?')[0]);try{await stat(target)}catch{throw new Error(`Broken ${attr}: ${p} -> ${url}`)}}checked++;}}}
if(new Set(articles.map(a=>a.slug)).size!==articles.length)throw new Error('Duplicate slugs');
await walk(root);
for(const a of articles)if(!a.intro||!a.process||!a.requirements||!a.outputs||!a.example)throw new Error(`Incomplete article: ${a.slug}`);
for(const a of articles){
  if(illustrations[a.slug]?.stages.length!==3)throw new Error(`Missing function illustration: ${a.slug}`);
  const html=await readFile(join(root,'skills',a.slug,'index.html'),'utf8');
  if(!html.includes(`assets/illustrations/${a.slug}.svg`)||!html.includes('功能示意・本站繪製'))throw new Error(`Article illustration is not displayed or credited: ${a.slug}`);
}
const home=await readFile(join(root,'index.html'),'utf8');
const snapshot=JSON.parse(await readFile('content/snapshot.json','utf8'));
const feed=await readFile(join(root,'feed.xml'),'utf8');
const sitemap=await readFile(join(root,'sitemap.xml'),'utf8');
for(const a of articles){
  if(!snapshot.repositories.some(s=>s.repo===a.repo))throw new Error(`Missing snapshot: ${a.repo}`);
  const published=a.published||'2026-10-20T00:34:43Z';
  if(!Number.isFinite(Date.parse(published)))throw new Error(`Invalid publication date: ${a.slug}`);
  const item=feed.match(new RegExp(`<item>(?:(?!</item>)[\\s\\S])*skills/${a.slug}/(?:(?!</item>)[\\s\\S])*</item>`))?.[0];
  if(!item?.includes(`<pubDate>${new Date(published).toUTCString()}</pubDate>`))throw new Error(`RSS publication date mismatch: ${a.slug}`);
  if(!sitemap.includes(`skills/${a.slug}/</loc><lastmod>${a.updated||published.slice(0,10)}</lastmod>`))throw new Error(`Sitemap date mismatch: ${a.slug}`);
}
if((home.match(/class="entry-cover"/g)||[]).length!==articles.length)throw new Error('Not every catalogue entry has an illustration');
if((home.match(/class="entry-link"/g)||[]).length!==articles.length)throw new Error('Not every catalogue block is a complete link');
for(const a of articles){
  const html=await readFile(join(root,'skills',a.slug,'index.html'),'utf8');
  const firstImage=html.match(/<main[\s\S]*?<img src="([^"]+)"/)[1];
  const expected=a.image?`../../assets/${a.image}`:`../../assets/illustrations/${a.slug}.svg`;
  if(firstImage!==expected)throw new Error(`Primary image does not respect author preference: ${a.slug}`);
  if(!home.includes(`src="./assets/${a.image||`illustrations/${a.slug}.svg`}" alt=""`))throw new Error(`Catalogue image does not respect author preference: ${a.slug}`);
}
console.log(`PASS: ${articles.length} complete illustrated articles, ${checked} HTML pages, all local links and assets resolve.`);
