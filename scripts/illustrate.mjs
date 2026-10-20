import {mkdir,writeFile} from 'node:fs/promises';
import {articles} from '../content/articles.mjs';
import {illustrations} from '../content/illustrations.mjs';

const ink='#304b3d', green='#c7d5b7', dark='#718b68', warm='#c88f6d', pale='#e5deca', white='#fffef9';
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const path=(d,fill='none',stroke=ink,width=4)=>`<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
const rect=(x,y,w,h,fill=white,r=9)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${ink}" stroke-width="4"/>`;
const circle=(x,y,r,fill=white)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${ink}" stroke-width="4"/>`;
const text=(x,y,t,size=22,fill=ink,anchor='middle')=>`<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" fill="${fill}" font-family="Noto Sans TC,Microsoft JhengHei,sans-serif">${esc(t)}</text>`;
const group=(x,y,body,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})">${body}</g>`;
const arrow=(x,y,len=55)=>path(`M${x} ${y}h${len}m-12 -10 12 10 -12 10`,'none',warm,5);
const doc=(title='文章')=>rect(-72,-98,144,186)+text(0,-57,title,24)+path('M-45 -27h90M-45 -3h76M-45 21h85M-45 45h53','none',dark,5)+rect(23,54,30,20,green,3);
const flower=()=>path('M0 25V-8M0 8Q-32 6-29-14Q-5-18 0 8M0 0Q5-30 28-24Q34 0 0 0',green)+circle(0,-43,17,pale)+circle(-15,-55,13,green)+circle(15,-55,13,green)+circle(0,-67,13,green)+circle(0,-52,9,warm);
const fox=()=>path('M-44 4-37-53-9-30 25-51 45 6 23 36-22 36Z',green)+path('M-34 3-8 15 0 31 12 14 37 1 22 35-22 35Z',white)+circle(-17,-2,3,ink)+circle(19,-2,3,ink)+circle(1,16,4,ink);
const browser=(inside)=>rect(-106,-76,212,158)+path('M-106-48h212')+circle(-88,-62,3,warm)+circle(-73,-62,3,green)+inside;
const cube=(wire=false)=>path('M0-83 76-42v88L0 89-76 45v-87Z',wire?white:green)+path('M-76-42 0 0 76-42M0 0v89M0-83v83',wire?'none':'none')+(wire?path('M-38-62 38-20v88M38-62-38-20v88M-76 2 0 44 76 2','none',dark,2):path('M0 0 76-42v88L0 89Z',dark));
const card=(fill=green)=>rect(-63,-96,126,190,fill)+group(0,-12,fox(),.7)+path('M-37 64h74M-22 78h44','none',ink,4);
const film=()=>rect(-103,-70,206,140,ink)+rect(-89,-55,178,110,white)+path('M-22-30 37 0-22 30Z',warm)+path('M-96-62v124M96-62v124','none',pale,5);
const graph=()=>path('M-72-43H0V0h72M0 0v62h65','none',dark,5)+rect(-105,-70,66,52,pale)+rect(-33,-27,66,54,green)+rect(39,-27,66,54,white)+rect(31,42,78,50,green)+circle(-72,-44,7,warm)+circle(0,0,7,white)+circle(72,0,7,warm);
const pixelCreature=(unit=16,pose=0)=>{
  const cells=['01000010','01111110','11111111','11211211','11133111','01111110','00111100',pose%2?'01100100':'00100110',pose%2?'01000110':'01100010'];
  return cells.map((row,y)=>[...row].map((n,x)=>n==='0'?'':`<rect x="${(x-4)*unit}" y="${(y-4.5)*unit}" width="${unit}" height="${unit}" fill="${n==='2'?ink:n==='3'?pale:dark}"/>`).join('')).join('');
};
const drawings={
 brief:()=>doc('需求'), document:()=>doc('文章'),
 palette:()=>path('M-84 23C-110-40-44-95 27-78S114 6 73 43Q55 60 35 36T1 54C-3 96-64 85-84 23Z',white)+circle(-48,-17,13,green)+circle(-17,-47,13,dark)+circle(24,-47,13,warm)+circle(65,-17,13,pale)+path('M-24 92 51-23 65-14-5 101Z',green)+path('M51-23 71-48 65-14Z',warm),
 series:()=>[-65,0,65].map((x,i)=>group(x,i===1?-19:10,rect(-39,-60,78,120,white,4)+group(0,0,fox(),.65),1)).join(''),
 pixels:()=>pixelCreature(20)+path('M-91-102h182v204H-91Z','none',ink,2),
 frames:()=>[-68,0,68].map((x,i)=>group(x,0,rect(-35,-63,70,126,white,3)+pixelCreature(6,i))).join('')+arrow(-28,87,55),
 sprites:()=>rect(-100,-94,200,156,white,3)+[0,1,2].map(x=>[0,1].map(y=>group(-65+x*65,-53+y*67,pixelCreature(5,x+y))).join('')).join('')+text(0,96,'PNG · GIF · JSON',18),
 engine:()=>path('M-47-80h94l-10 47 34 33-15 55H-56L-71 0-37-33Z',green)+path('M-30-80v-26h60v26M-47-53h94M-61 18H61M-43 55-61 91H61L43 55Z',pale)+path('M-10-27H10V32H-10Z',warm),
 exploded:()=>path('M-49-92 0-114 49-92 0-69Z',pale)+path('M-48-27 0-49 48-27 0-5Z',green)+path('M-47 39 0 17 47 39 0 61Z',white)+path('M-47 39v27L0 89l47-23V39M0 61v28')+path('M0-69v20M0-5v22','none',warm,3)+arrow(73,-30,25),
 technical:()=>group(-15,0,drawings.engine(),.7)+path('M-38-45-76-72H-109M16 8 69-21h37M-12 47 59 76h48','none',dark,3)+circle(-38,-45,5,warm)+circle(16,8,5,warm)+circle(-12,47,5,warm),
 notes:()=>group(-35,-24,doc('想法'),.75)+group(41,33,rect(-47,-44,94,88,green)+text(0,8,'關係',22)),
 connections:()=>path('M0-57-74 33M0-57 74 33M-74 33h148','none',dark,4)+circle(0,-57,28,pale)+circle(-74,33,28,white)+circle(74,33,28,green)+text(0,-49,'A')+text(-74,41,'B')+text(74,41,'C'),
 flowchart:()=>rect(-55,-94,110,43,green,6)+path('M0-51v34M-31 12H-83v46M31 12h52v46')+path('M0-17 31 12 0 41-31 12Z',pale)+rect(-111,58,58,37,white,5)+rect(52,58,58,37,green,5)+text(0,-65,'開始',18),
 sketch:()=>rect(-97,-89,194,174,white,3)+path('M-75-52-31-21-60 11Z','none',dark,3)+circle(39,-30,25,green)+path('M-69 49q39-66 73 0M27 29l46 39M30 68 74 29','none',warm,5),
 logogrid:()=>rect(-88,-86,176,172,white,2)+[-44,0,44].map(x=>path(`M${x}-86V86M-88 ${x}H88`,'none',pale,2)).join('')+path('M-45 48V-48H-5V11H45V48Z',green)+circle(28,-31,19,warm),
 brand:()=>group(-30,-23,rect(-76,-58,152,116,white,4)+group(0,0,drawings.mark(),.6))+group(33,49,rect(-70,-43,140,86,green,3)+group(0,0,drawings.mark(),.43)),
 mark:()=>path('M-35 35V-35H-7V7H35V35Z',ink)+circle(21,-23,13,warm),
 moodboard:()=>rect(-98,-88,196,176,white,3)+rect(-82,-71,77,99,green,2)+group(-43,-12,flower(),.7)+text(44,-39,'Aa',32)+[dark,warm,pale].map((c,i)=>circle(21+i*23,9,9,c)).join('')+rect(-82,43,164,27,pale,2),
 browsercheck:()=>browser(group(-26,5,flower(),.7)+circle(66,31,32,green)+path('M49 31 61 43 83 19','none',ink,6))+path('M89 56l23 26','none',ink,7),
 responsive:()=>group(-27,-8,browser(group(0,12,flower(),.75)),.8)+group(77,39,rect(-34,-66,68,132,white,11)+group(0,0,flower(),.55)+circle(0,54,3,dark)),
 material:()=>group(0,-10,cube())+path('M-83 91h166','none',warm,5)+[[-38,-59],[36,-39],[-35,27]].map(([x,y])=>path(`M${x} ${y}l9 5m-7 8 9 5`,'none',white,2)).join(''),
 infographic:()=>group(0,0,drawings.material(),.68)+path('M-50-35-83-64H-111M39-15 80-48h30M-15 60-70 86h-37','none',dark,3)+text(-83,-78,'材料',16)+text(82,-60,'結構',16),
 storyboard:()=>[-60,60].map((x,i)=>group(x,0,rect(-48,-79,96,158,white,3)+circle(0,-26,16,green)+path(`M0-10v39m0-12-20 29m20-29 20 29M-20 4 0-2 ${i?30:20} ${i?-25:4}`))).join(''),
 character:()=>circle(-18,-48,26,white)+path('M-18-22v60m0-42-46 14m46-14 48-31M-18 38-47 83m29-45L7 81','none',ink,7)+path('M44-70 104-47 98-9 40-32Z',green)+text(70,-37,'想法',19)+path('M-94 85h194','none',pale,5),
 concept:()=>rect(-90,-93,180,186,white,3)+group(0,0,cube(true),.75)+path('M-68 70h40M44-65l17-21','none',warm,4),
 mesh:()=>cube(true)+circle(0,-83,5,warm)+circle(-76,-42,5,warm)+circle(76,-42,5,warm)+circle(0,89,5,warm),
 gameasset:()=>group(0,-12,cube(),.9)+path('M-111 71 0 17 111 71 0 123Z',pale)+group(0,-30,cube(),.9),
 target:()=>browser(group(0,7,drawings.landscape(),.8))+path('M-114-87h30M-114-87v28M114 91H84M114 91V63','none',warm,4),
 landscape:()=>circle(55,-29,17,warm)+path('M-87 47-28-40 12 20 40-12 87 47Z',green)+path('M-28-40-9-12-44-12Z',white)+path('M-89 48H89'),
 iterate:()=>circle(0,0,53,white)+path('M-69-55Q-2-119 68-52l-23-2m23 2-4-25M68 56Q1 119-68 53l22 1m-22-1 4 24','none',dark,7)+path('M-22 2 0 23 32-21','none',warm,6),
 prototype:()=>browser(group(-17,12,drawings.landscape(),.65)+path('M66 17 93 57 73 54 63 73Z',warm)),
 layers:()=>[-50,0,50].map((y,i)=>path(`M0 ${y-38} 85 ${y} 0 ${y+38}-85 ${y}Z`,[pale,white,green][i])).join(''),
 hologram:()=>group(-25,-15,card(pale),.9)+group(27,15,card(green),.9)+path('M47-53 74-28M36-21 68 10M22 19 54 50','none',white,5),
 cardweb:()=>browser(group(0,5,card(),.65))+path('M-103 103Q0 137 103 103l-15-5m15 5-7 15','none',warm,4),
 toolbox:()=>rect(-99,-29,198,122,green,10)+path('M-99 9H99M-33-29v-28h66v28',white)+rect(-12,-2,24,29,pale,3)+path('M-64-28-76-77M-45-28-38-93M49-29 75-80M69-29 97-60','none',dark,9),
 gamecollection:()=>group(-60,-36,fox(),.8)+group(48,24,cube(),.62)+group(-51,71,flower(),.58),
 modelmenu:()=>rect(-95,-92,190,184,white,5)+[[-59,-45,'圖'],[12,-45,'影'],[-59,26,'音'],[12,26,'3D']].map(([x,y,l])=>rect(x,y,51,48,l==='影'?green:pale,4)+text(x+25,y+32,l,22)).join(''),
 terminal:()=>browser(path('M-74-12-52 5-74 22M-37 24H8','none',dark,6)+text(27,56,'genmedia',18)),
 media:()=>group(-30,-22,rect(-78,-56,156,112,white,4)+group(0,0,drawings.landscape(),.7))+group(47,54,film(),.54),
 request:()=>path('M-98-73H98V35H-10L-48 74V35H-98Z',white)+text(0,-21,'調整工作流',23)+path('M-63 4H63','none',dark,5),
 graph,
 rendered:()=>rect(-88,-86,176,172,white,4)+group(0,-1,drawings.landscape(),.8)+circle(64,66,25,green)+path('M52 66 61 75 78 57','none',ink,5),
 code:()=>browser(path('M-45-25-75 5-45 35M45-25 75 5 45 35M16-36-12 47','none',dark,7)),
 customnode:()=>rect(-70,-76,140,152,green,6)+rect(-70,-76,140,41,pale,6)+circle(-70,-2,7,white)+circle(-70,37,7,white)+circle(70,16,7,warm)+text(0,-48,'自訂節點',19)+path('M-24-2-40 15-24 32M24-2 40 15 24 32','none',ink,5),
 timeline:()=>browser(path('M-83-20H83M-83 6H83M-83 32H83','none',pale,3)+rect(-79,-31,71,19,green,2)+rect(-2,-31,81,19,pale,2)+rect(-59,-5,100,19,warm,2)+rect(-20,21,99,19,green,2)+path('M16-42V68','none',ink,3)),
 video:()=>film()+text(0,103,'MP4',21),
 designboard:()=>rect(-103,-88,206,176,white,3)+group(-55,-23,drawings.mark(),.55)+text(35,-31,'Aa',33)+[dark,warm,pale].map((c,i)=>circle(12+i*24,8,9,c)).join('')+rect(-85,42,170,28,green,2),
 mockups:()=>group(-22,-9,browser(group(0,10,flower(),.75)),.78)+group(78,32,rect(-31,-63,62,126,pale,9)+group(0,0,flower(),.47)),
 articlefilm:()=>group(-38,-11,doc('視覺文章'),.85)+group(58,51,film(),.57),
 covers:()=>group(-37,-19,rect(-61,-89,122,178,white,3)+text(0,-54,'封面',24)+group(0,18,flower(),.9))+group(61,42,rect(-42,-62,84,124,pale,3)+group(0,0,fox(),.7)),
 product:()=>group(-29,0,browser(rect(-71,-22,140,26,green,2)+text(0,44,'產品需求',23)),.87)+group(79,52,circle(0,-10,18,pale)+path('M-26 41V22Q0-2 26 22V41Z',green)),
 tokens:()=>rect(-95,-88,190,176,white,4)+text(-10,-35,'Aa',44)+[dark,warm,pale].map((c,i)=>circle(-48+i*48,15,17,c)).join('')+text(0,65,'字體 · 配色 · 間距',18),
 dashboard:()=>browser(rect(-92,-33,36,101,pale,2)+rect(-43,-33,134,32,green,2)+path('M-43 20H90M-43 40H90M-43 60H90','none',dark,3)+circle(68,20,5,warm)),
 components:()=>rect(-98,-80,196,55,white,5)+rect(-98,-6,89,80,green,5)+rect(11,-6,87,80,pale,5)+circle(-70,-53,10,warm)+path('M-44-53H75M-75 15h44M-75 34h44M35 15H75','none',dark,4),
 folder:()=>path('M-103-55V-89h81L2-63H103V91H-103Z',green)+path('M-103-51H103')+group(0,25,drawings.mark(),.7),
 skillbook:()=>path('M0-58Q-51-88-103-66V78Q-51 56 0 87Q51 56 103 78V-66Q51-88 0-58Z',white)+path('M0-58V87')+text(-51,0,'指令',22)+text(51,0,'腳本',22)+text(0,116,'參考資源',20),
 documents:()=>group(-51,-14,doc('文件'),.75)+group(59,37,rect(-51,-64,102,128,green,4)+group(0,0,flower(),.7)),
 oldfolder:()=>drawings.folder()+rect(-69,-11,138,52,pale,4)+text(0,23,'已停用',24),
 redirect:()=>path('M-103 51H-21V-43H86m-29-29 29 29-29 29','none',dark,13)+circle(-93,51,10,warm),
 plugins:()=>drawings.folder()+group(0,17,path('M-45-39h26q-8-30 15-30t15 30h30v31q29-8 29 15t-29 15v30h-86Z',white),.85)
};

export async function generateIllustrations(){
  await mkdir('public/assets/illustrations',{recursive:true});
  for(const a of articles){
    const item=illustrations[a.slug];
    if(!item)throw new Error(`Missing illustration brief: ${a.slug}`);
    const art=item.stages.map(([key,label],i)=>{
      if(!drawings[key])throw new Error(`Unknown drawing: ${key}`);
      return group(165+i*315,225,`<ellipse cx="0" cy="105" rx="114" ry="19" fill="#e5e9dd"/>${drawings[key]()}`)+text(165+i*315,401,label,28);
    }).join('');
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="960" height="500" viewBox="0 0 960 500" role="img" aria-labelledby="title desc"><title id="title">${esc(a.name)} 功能示意</title><desc id="desc">${esc(item.summary)}</desc><rect width="960" height="500" fill="#f0f2e8"/>${art}${arrow(292,224,57)}${arrow(607,224,57)}</svg>`;
    await writeFile(`public/assets/illustrations/${a.slug}.svg`,svg);
  }
}
