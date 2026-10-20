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
if((home.match(/class="entry-cover"/g)||[]).length!==articles.length)throw new Error('Not every catalogue entry has an illustration');
console.log(`PASS: ${articles.length} complete illustrated articles, ${checked} HTML pages, all local links and assets resolve.`);
