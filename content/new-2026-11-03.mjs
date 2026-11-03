// First discovery, not a release announcement.
export const newArticles = [
  {
    "slug": "pixel-plugin",
    "repo": "willibrandon/pixel-plugin",
    "name": "Aseprite Pixel Art Plugin",
    "category": "像素與遊戲",
    "kind": "四項 Skill 與 MCP 外掛",
    "published": "2026-11-03T00:33:37.466Z",
    "title": "把像素角色留在 Aseprite，逐格改動再輸出遊戲圖集",
    "short": "用文字管理 Aseprite 像素與影格",
    "dek": "四項技能分工繪圖、修飾、動畫和輸出，用圖層、色盤、影格時間與動畫標籤整理小角色。",
    "intro": "想做一個小角色，往往不只要一張 PNG，還要保留圖層、分好待機與走路動畫，並交出遊戲能讀的圖集。這個外掛讓 Claude Code 透過附帶的 pixel-mcp 操作 Aseprite，把需求轉成繪圖與影格管理步驟。",
    "process": "四份真正的 SKILL.md 分別負責建立畫布與繪圖、色盤與抖色等修飾、逐格動畫，以及匯出。可以選 Game Boy 或 PICO-8 等色盤，新增或複製影格、調整每格毫秒數，將動作標成 idle 或 walk；不變的背景可用 linked cels 共用像素資料。輸出階段再選 PNG、GIF、水平或格狀圖集與 JSON，支援整數倍像素放大。這些是文件描述的能力，本站沒有執行。",
    "example": "做一個 32×32 的 PICO-8 小機器人，身體與背景分層。先讓我看靜態輪廓，再加四格走路動作，每格 100 毫秒，標成 walk；背景使用共用 cel。保留 Aseprite 內的圖層與動畫結構，另交透明 PNG 圖集、影格時間與 JSON，讓我逐格確認腳步和輪廓。",
    "fit": "適合已有 Aseprite、想用文字協助整理小型角色動畫的像素美術與獨立遊戲開發者。也適合需要反覆調整色盤、動畫時間及匯出格式的人。",
    "requirements": "作者文件要求 Aseprite 1.3.0+、Claude Code 1.0.0+，並設定 Aseprite 路徑；pixel-mcp 隨外掛附帶，約需 50 MB。列有 Windows x64、macOS 與 Linux 支援，但本站沒有測試；這是 Claude Code 外掛，不能直接宣稱已在 Codex 驗證。",
    "costs": "外掛採 MIT，沒有必需的付費生圖 API。仍需自行取得 Aseprite 授權，並負擔 Claude Code 方案或用量；本篇未核對售價，不提供固定總成本。",
    "outputs": "Aseprite 內的圖層與動畫結構、透明 PNG、動畫 GIF、spritesheet 與影格／標籤 JSON",
    "caveat": "2026-11-03 首次收錄；儲存庫建立於 2025-10-17，預設分支最後提交為 2025-10-19，並非今天發布。407 顆星是整個儲存庫的收藏量，不是品質或相容性保證。README 的角色案例只有文字指令，未找到實際成品圖片，因此本站配圖是明確標示的功能示意。未核實獨立儲存 .aseprite 原檔的工具路線；遊戲引擎 JSON 仍須實際匯入檢查，不能保證開箱就符合專案需求；本站沒有安裝或執行候選。",
    "source": "https://github.com/willibrandon/pixel-plugin/blob/dee350645b705916655c013f208bf5580ecb9317/README.md",
    "skill": "https://github.com/willibrandon/pixel-plugin/blob/dee350645b705916655c013f208bf5580ecb9317/skills/pixel-art-creator/SKILL.md",
    "extraSource": "https://github.com/willibrandon/pixel-plugin/blob/dee350645b705916655c013f208bf5580ecb9317/skills/pixel-art-animator/SKILL.md",
    "extraSourceLabel": "逐格動畫、標籤與共用 cel",
    "authorExample": "https://github.com/willibrandon/pixel-plugin/blob/dee350645b705916655c013f208bf5580ecb9317/README.md#examples"
  }
];
