import {mkdir, writeFile} from 'node:fs/promises';
import {assetSources} from '../content/articles.mjs';
await mkdir('public/assets/licenses', {recursive:true});
for (const asset of assetSources) {
  const r = await fetch(asset.url);
  if (!r.ok || (!r.headers.get('content-type')?.startsWith('image/') && !asset.file.endsWith('.svg'))) throw new Error(`Asset unavailable: ${asset.file} (${r.status})`);
  await writeFile(`public/assets/${asset.file}`, Buffer.from(await r.arrayBuffer()));
  console.log(`Saved ${asset.file}`);
}
for (const repo of [...new Set(assetSources.map(a=>a.repo))]) {
  const url = `https://raw.githubusercontent.com/${repo}/main/LICENSE`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`License missing: ${repo}`);
  const license = await r.text();
  if (!license.includes('MIT License') && !license.includes('Permission is hereby granted')) throw new Error(`Review license: ${repo}`);
  await writeFile(`public/assets/licenses/${repo.replaceAll('/','--')}.txt`, license);
  console.log(`Preserved license: ${repo}`);
}
