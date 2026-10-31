// Verified substantive updates; published dates stay stable.
const updates = {
  "blender-agent-skills": {
    "dek": "二十八項 Blender 技能串起建模、材質、動畫與遊戲輸出，新增表面做舊、卡通渲染、毛髮、場景套件、服裝與影片剪輯。",
    "update": "2026-10-31：核對 1.2.0，新增六份真實 SKILL：材質表面製作、風格化 NPR、毛髮整理、環境套件、服裝、影片剪輯。可在道具加掉漆與積塵、做分段卡通陰影和描邊、建立毛髮曲線或遊戲髮片、按坡度散布樹石、製作衣物及安排影片片段。動畫補上骨架動作轉移與循環檢查；資產檢查會找空材質槽、遺失貼圖及誤設 sRGB 的資料貼圖。作者宣稱在 Blender 5.2.3 驗證，本站未執行。",
    "process": "合集從硬表面建模、雕刻、UV 與 PBR 材質，到貼圖烘焙、骨架動畫、LOD 和遊戲引擎匯出，也涵蓋日夜打光、雨雪和布料模擬。1.2.0 擴充為 28 項技能：新增表面做舊與貼花、卡通渲染、毛髮、地形與模組場景、服裝及影片剪輯。核心按任務挑技能；修改後要求數值與多角度預覽，最後重新讀取輸出檔確認交付。",
    "example": "把我的木箱整理成遊戲道具：依參考核對比例，整理 UV，加入適量掉漆、鏽斑和灰塵，再把 Blender 材質烘焙為引擎用貼圖。輸出前檢查遺失貼圖、資料貼圖色彩空間、浮空零件和倒面，附多角度預覽、面數及檔案清單。",
    "caveat": "2026-10-23 首次收錄，2026-10-31 依 1.2.0 實質更新。主圖與床單是既有作者展示，不是新增六項技能的實測成果。Blender 卡通節點不會直接隨模型匯出，需在遊戲引擎重建；scene 光照模式只支援 Eevee。毛髮程序化下垂只是起點，主角髮型仍需整理。模型穿插、關節變形與循環動作仍須人工看圖。",
    "source": "https://github.com/EL4CTEO/blender-skills/blob/fb92cfb4cc5a238c22113a6a230b09f535bd0656/README.md",
    "skill": "https://github.com/EL4CTEO/blender-skills/blob/fb92cfb4cc5a238c22113a6a230b09f535bd0656/skills/blender-core/SKILL.md",
    "extraSource": "https://github.com/EL4CTEO/blender-skills/blob/fb92cfb4cc5a238c22113a6a230b09f535bd0656/skills/blender-stylized-npr/SKILL.md",
    "extraSourceLabel": "新增卡通渲染與引擎交付限制"
  },
  "sprite-gen": {
    "update": "2026-10-31：從昨日 3.9.0 核對至 3.13.0，改進走跑循環的切段與檢查。批次影片預設按動作尋找走跑週期，利用身體起伏等證據分辨一次跨步或完整雙步；遇到遮擋或證據不足會保留切段並警告。中途起步或停下會標為建議重拍，這類或無法確認週期的片段不會混入多方向週期對齊。",
    "extraSource": "https://github.com/aldegad/sprite-gen/blob/1fdf789d60321a6852319920339a9c0279d41e56/CHANGELOG.md",
    "extraSourceLabel": "3.13.0 走跑週期及升級注意",
    "source": "https://github.com/aldegad/sprite-gen/blob/1fdf789d60321a6852319920339a9c0279d41e56/README.md",
    "skill": "https://github.com/aldegad/sprite-gen/blob/1fdf789d60321a6852319920339a9c0279d41e56/SKILL.md"
  }
};
export function applyUpdates(articles) {
  for(const article of articles) { const patch=updates[article.slug]; if(patch) Object.assign(article,patch,{updated:"2026-10-31T00:32:48.226Z"}); }
}
