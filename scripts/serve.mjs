import {createServer} from 'node:http';
import {createReadStream,statSync} from 'node:fs';
import {resolve,join,extname,sep} from 'node:path';
const root=resolve('docs');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.xml':'application/xml','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.gif':'image/gif','.txt':'text/plain; charset=utf-8'};
const server=createServer((req,res)=>{try{const url=new URL(req.url,'http://localhost');let pathname=decodeURIComponent(url.pathname);if(pathname.startsWith('/skill-art-journal/'))pathname=pathname.slice('/skill-art-journal'.length);let file=resolve(join(root,pathname));if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403);res.end();return;}if(statSync(file).isDirectory())file=join(file,'index.html');res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','Cache-Control':'no-store'});createReadStream(file).pipe(res);}catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Not found');}});
server.listen(Number(process.env.PORT||4178),'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4178/skill-art-journal/'));
