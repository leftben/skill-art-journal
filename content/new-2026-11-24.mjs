export const newArticles = [
  {
    "slug": "image-to-sculpt",
    "repo": "gokayfem/image-to-sculpt",
    "name": "Image 2 Sculpt",
    "category": "3D 與材質",
    "kind": "單項 Skill",
    "published": "2026-11-24",
    "title": "讓角色圖變成可逐步檢查的 3D 雕塑",
    "short": "從圖片雕塑並記錄過程",
    "dek": "比對輪廓、深度與表面方向，留下每次修改與旋轉展示。",
    "intro": "手上只有一張公仔照片，想先做出可繼續修整的立體模型？這個 Skill 引導 AI 助手從原圖建立輪廓與表面資料，再用多個視角慢慢修出雕塑；每次切削與平滑都會留下紀錄，可以在 Blender 重播成建模縮時影片。",
    "process": "先檢查主體遮罩、深度和表面方向，再準備九個補充視角與一個保留檢查視角。生成圖的角度要重新對齊，姿勢不一致的圖要剔除；接著以輪廓交集做初形，分大形、表面與細節修整，逐一比對檢查圖。最後匯出模型、轉台和報告。以上為作者文件能力，本站未執行。",
    "example": "把自己設計的貓頭鷹公仔正面圖做成立體草模：先核對翅膀外形，再看側面與背面是否一致，最後在 Blender 轉一圈，決定哪些羽毛要手修。這是本站需求範例。",
    "fit": "適合角色與玩具設計師、3D 雕塑初學者，以及需要對照概念圖檢查草模的人。",
    "requirements": "Python 3.10+、NumPy、SciPy、scikit-image、Pillow；完整依賴另含 fal-client 與 matplotlib。重播與影片需 Blender 5.2+、FFmpeg；標準自動流程需 fal API key。可自行提供透明 PNG 與多視圖走無金鑰路線，但只給正面時，厚度與背面是猜測。",
    "costs": "程式與文件採 MIT；標準生成路線付費。作者估一個案例約 US$2，含十張視角與遮罩、法線及原圖資料；這是文件估算，實價、重試及助手額度另計。流程有逐案預算與請求紀錄，本文沒有呼叫服務。",
    "outputs": ".blend、GLB、OBJ、STL、建模縮時影片、360 度轉台、各視角檢查圖與靜態報告。",
    "caveat": "2026-11-24 首次收錄；儲存庫建立於 2026-11-08，不是今天發布。本次核實 309 星。看不見的背面仍屬推測；保留視角也是生成圖，只能檢查一致性，不能證明真實形狀。不是精密 CAD、綁骨、動畫或 PBR 貼圖工具，場景、房間、透明鏡面和極細結構不在範圍；STL 仍需自行檢查列印條件。",
    "source": "https://github.com/gokayfem/image-to-sculpt/blob/454381c13f2506b12d392e9286a8d32fc9549566/README.md",
    "skill": "https://github.com/gokayfem/image-to-sculpt/blob/454381c13f2506b12d392e9286a8d32fc9549566/skills/image-to-sculpt/SKILL.md",
    "authorExample": "https://github.com/gokayfem/image-to-sculpt/blob/454381c13f2506b12d392e9286a8d32fc9549566/gallery/inputs.jpg"
  }
];
