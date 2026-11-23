export const newArticles = [
  {
    "slug": "sprite-stacking",
    "repo": "danielwh2/sprite-stacking",
    "name": "Sprite Stacking",
    "category": "像素與遊戲",
    "kind": "單項 Skill",
    "published": "2026-11-23",
    "title": "把四面像素圖疊成可旋轉的假 3D 道具",
    "short": "四面圖變旋轉像素道具",
    "dek": "從俯視、側面、正面與背面圖切出水平圖層，旋轉時仍保留像素顆粒。",
    "intro": "想讓像素賽車轉彎，又不想逐一畫完所有角度？Daniel White 的 Skill 會引導助手準備四個正交視角，再切成一層層薄片，由下往上堆疊繪製。旋轉的是這些薄片，因此看來立體，也能保持清楚的像素風格。",
    "process": "先核對四面圖的長寬高與朝向，再用 Python 的視覺外殼交集切出圖層，打開檢查圖觀察四個角度與爆炸圖。隨附獨立網頁可看轉台、場景、切片，以及駕駛、風動、碎裂、日夜和雨雪效果；另可匯出十六方向 PNG 圖集。這些是作者文件所列能力，本站未執行。",
    "example": "做一台可轉彎的像素咖啡攤車：先畫車頂、左側、車頭與車尾，再檢查招牌在轉到背面時是否消失，最後匯出十六方向 PNG 放入自己的俯視遊戲。這是本站需求範例。",
    "fit": "適合像素美術、獨立遊戲開發者，以及想做可旋轉小場景的網頁創作者。",
    "requirements": "Python 3、Pillow、NumPy，以及能讀寫圖片與程式的 AI 助手；網頁預覽用一般瀏覽器。可自己提供四面圖，或讓助手用 Python 畫圖，生圖服務非必要。npx 安裝路線另需 Node 22.20+；本文未安裝。接 Godot、Unity 或 Phaser 時仍需依既有專案整合。",
    "costs": "儲存庫程式與文件採 MIT；本機切片沒有必付生成 API，AI 助手額度、製圖與引擎成本依自己的工具計算。選用生圖工具才另計費。",
    "outputs": "水平切片 PNG、檢查圖、可獨立開啟的 HTML 檢視器、可選法線／發光遮罩及十六方向 PNG 圖集。",
    "caveat": "2026-11-23 首次收錄；儲存庫建立於 2026-11-20，不是今天發布。本次核實 493 星。這是四面輪廓推算出的假 3D，不是完整網格重建；四面都看不到的凹洞會填實，需手修。細桿至少兩像素寬，同一套圖要一致比例。作者效能數據未由本站實測，亦不保證直接適用所有引擎。",
    "image": "sprite-stacking-showcase.gif",
    "imageAlt": "Daniel White 原作：六個由切片堆疊的像素道具旋轉展示",
    "source": "https://github.com/danielwh2/sprite-stacking/blob/6fecdfd0d6e5a0595f979550e05f4b1fcde550fe/README.md",
    "skill": "https://github.com/danielwh2/sprite-stacking/blob/6fecdfd0d6e5a0595f979550e05f4b1fcde550fe/skills/sprite-stacking/SKILL.md",
    "authorExample": "https://github.com/danielwh2/sprite-stacking/blob/6fecdfd0d6e5a0595f979550e05f4b1fcde550fe/media/showcase.gif"
  }
];

