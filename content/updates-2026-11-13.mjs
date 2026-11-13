const updates={
  "diagram-design": "2026-11-13：2.6.164 已從 45 擴充到 50 種圖表，新增 SBGN 生物反應過程、需求追溯、事件建模、3–7 步驟進度軌，以及 10×10 百分比方格圖。例如把展覽製作排成「提案→打樣→施工→驗收」，或用 100 格中的 63 格顯示完成比例；需求追溯可指出哪項設計或驗證還沒對應到需求。每類附明暗示例與結構檢查，SBGN 只涵蓋作者列出的過程描述子集，不是完整生物建模軟體。Mermaid 匯入也修正撇號、帶連字號的節點 ID 與緊接箭頭的標籤。適合做提案圖、資訊設計與技術文件的人；沿用 Python、瀏覽器與既有輸出環境，沒有新增必要付費生圖服務。本站核對 README、SKILL 與實際差異，未執行候選。",
  "mengto-illustration": "2026-11-13：同一合集新增 game-dev-character-model，從原創角色概念圖，經 Fil 的 Meshy／Tripo 圖轉 3D、骨架與姿態，放入有燈光的 Three.js 檢視器。例如為遊戲提案做可旋轉的科幻 NPC 全身模型。這是合集新增的 3D 製作指引，不是原本 SVG 插畫新增角色骨架。作者路線使用 Fil 帳號與生成額度，記錄約 100 credits 的概念圖、模型與綁骨流程；這是案例用量，不能當固定報價或換算為美元。另需 Node、WebGL 與無頭瀏覽器截圖環境。需看多角度檢查手臂穿模與腳底接地；臉部不適合特寫，頭髮、衣物與身體是融合網格，沒有手指骨架。本文原有狐狸配圖只展示 SVG 插畫，不是新角色建模成果。本站未生成模型或驗證作者耗時。"
};
const sources={
  "cathrynlavery/diagram-design": {
    "readme": "https://github.com/cathrynlavery/diagram-design/blob/f6db0decea96de66b901331a0f79a8d4b147ebae/README.md",
    "compare": "https://github.com/cathrynlavery/diagram-design/compare/f2496acbde9f45ccb55c24d4f75210c8a1355df8...f6db0decea96de66b901331a0f79a8d4b147ebae"
  },
  "MengTo/Skills": {
    "readme": "https://github.com/MengTo/Skills/blob/07274a3b3dba5f6a311186ddaf65765d94f78cec/README.md",
    "compare": "https://github.com/MengTo/Skills/compare/d6324a05ca03ce5f6cdba519318d92176dbc43d2...07274a3b3dba5f6a311186ddaf65765d94f78cec"
  }
};
export function applyNovember13Updates(articles){for(const a of articles)if(updates[a.slug]){a.update=(a.update?a.update+'\n\n':'')+updates[a.slug];a.updated='2026-11-13';a.source=sources[a.repo].readme;a.extraSource=sources[a.repo].compare;a.extraSourceLabel='本次核實的預設分支差異';}}
