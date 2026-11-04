export const newArticles = [
  {
    "slug": "pixelfx",
    "repo": "patch-gg/pixelfx",
    "name": "pixelfx",
    "category": "像素與遊戲",
    "kind": "特效素材庫與單一 Skill",
    "published": "2026-11-04",
    "title": "讓像素攻擊有蓄力、命中與收招",
    "short": "可換色的像素遊戲特效",
    "dek": "244 種程式繪製特效，配合角色預備、命中停格和回復動作，再交付透明圖集。",
    "image": "pixelfx-acts.gif",
    "imageAlt": "Patch 作者提供的角色攻擊與稻草靶動作展示；MIT，非本站實測",
    "intro": "火球飛出去很漂亮，角色卻像站著貼上一張動畫，打擊感仍會不足。pixelfx 把效果和身體動作的時間放在一起：先蓄力、出手、命中時短暫停格，再回到準備姿勢。",
    "process": "目前 README 列出 244 種效果，涵蓋火焰、爆炸、冰霜、魔法、天氣與介面等，另有 12 套完整攻擊動作。真正的 SKILL.md 先找現有素材，再換色、鏡射或調整參數；要新效果時，以草稿、影格總覽、看圖修正的方式反覆製作。JavaScript 遊戲可以直接播放程式；其他引擎可輸出透明 PNG 圖集及 Aseprite 風格 JSON，保留幀時間與樞紐資訊。",
    "example": "替冰法師做一圈從腳底向外炸開的冰霜，先試三套藍紫配色。角色施法前蓄力，命中時停兩格再收招；讓我比較動作影片，最後交透明 PNG 圖集與時間 JSON，供 Godot 匯入。",
    "fit": "適合獨立遊戲開發者、像素美術與想調整打擊感的技術美術。能改程式、願意逐格看動作的人，較容易做出符合自己角色的版本。",
    "requirements": "Node 18+、能讀程式和看圖的 agent；GIF／MP4 預覽另需 ffmpeg。作者主要示範 Claude Code，本站未驗證其他宿主。工具文件說不需安裝額外套件；圖集交付仍需在目標引擎設定最近鄰取樣、幀率與樞紐。",
    "costs": "程式與效果採 MIT，可商用，需保留聲明；沒有必需的付費生圖 API。AI 助手用量、人工調整與本機運算另計。展示庫的 Patch Pixel 字型另有權利保留，不能視為隨 MIT 任意使用；本篇未下載該字型。",
    "outputs": "可修改的 JavaScript 特效、透明 PNG 圖集、Aseprite 風格 JSON、GIF／MP4 預覽",
    "caveat": "2026-11-04 首次收錄，儲存庫建立於 2026-10-30，核對分支提交日期為 10-31，並非今天發布。4,115 顆星是整個儲存庫收藏量。JSON 並不是可編輯的 .aseprite 原檔；附在身體上的效果原以作者示範人偶繪製，換自己的角色時可能需要重製。圖集的光暈已烘焙成帶透明度的顏色，明亮場景需另調整。本站只閱讀文件，沒有執行候選程式。",
    "source": "https://github.com/patch-gg/pixelfx/blob/a84159688af3ca37a4be05a0d422b94451b2e24e/README.md",
    "skill": "https://github.com/patch-gg/pixelfx/blob/a84159688af3ca37a4be05a0d422b94451b2e24e/skills/pixelfx/SKILL.md",
    "extraSource": "https://github.com/patch-gg/pixelfx/blob/a84159688af3ca37a4be05a0d422b94451b2e24e/NOTICE.md",
    "extraSourceLabel": "MIT 與第三方來源、字型例外",
    "authorExample": "https://github.com/patch-gg/pixelfx/blob/a84159688af3ca37a4be05a0d422b94451b2e24e/README.md#acting"
  }
];
