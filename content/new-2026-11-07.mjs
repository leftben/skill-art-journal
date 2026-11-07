export const newArticles = [
  {
    "slug": "spritecook-skills",
    "repo": "SpriteCook/skills",
    "name": "SpriteCook Skills",
    "category": "像素與遊戲",
    "kind": "10 項 Skill 合集",
    "published": "2026-11-07",
    "title": "把同風格遊戲道具，接成動畫與地圖素材",
    "short": "生成、修邊、動畫與遊戲匯入",
    "dek": "讓 AI 記住素材編號與風格，從一張道具圖整理到角色動畫、地圖圖塊和 Godot 資源。",
    "intro": "做遊戲美術常常不是缺一張漂亮圖片，而是缺一組能放在一起、輪廓乾淨、能接進引擎的素材。SpriteCook 的十項技能把生成、修整透明邊緣、動畫、地圖與匯入分成可接續的流程。",
    "process": "先用相同參考圖或已存風格設定製作素材，再以素材編號接續修改和動畫。多件道具可先做 3×3 或 4×4 圖，再檢查與裁切；指定尺寸的 Pixel Engine 路線則一次做單件。角色動畫先查看起始姿勢；去背修邊可比較保留原圖的透明度門檻。地圖有生成與 dual-grid 使用指引；Godot 路線可把圖集和時間資料整理成 SpriteFrames。",
    "example": "為我的俯視角小酒館做木桶、箱子、袋子、杯子、瓶子、蠟燭、凳子、水桶和鍋子，共九件道具。統一三分之四視角、暖色色盤與左上光源；先給一張九宮格確認，再切成透明 PNG，逐件檢查輪廓和共用畫布。動畫另選定一件後估價。",
    "fit": "適合獨立遊戲開發者、小型團隊美術和需要持續延伸同一套素材的人。仍需人工確認像素輪廓、動作、地圖接縫與引擎效果。",
    "requirements": "需要支援 Skills 的 AI 助手與已連接的 SpriteCook MCP。生成由線上服務完成，技能文件本身不包含模型。可選 Python/Pillow 做本機透明度比較；匯入 Godot 需 Godot 4.x。README 列 Codex 等相容編輯器，本站未實測。",
    "costs": "技能文件為 MIT；生成、動畫和部分去背會消耗 SpriteCook 點數，AI 助手費用另計。實際價格與可用模型應以服務當下目錄為準，不把文件內點數當固定報價。利用保留原圖調整 alpha cutoff 的修邊流程不另耗生成點數；不能補回原圖本來沒有的像素。",
    "outputs": "透明 PNG、動畫與可選圖集、地圖素材、UI 元件資料、Godot SpriteFrames 等資源",
    "caveat": "2026-11-07 首次收錄，並非今日發布；儲存庫建立於 2026-02-13，目前分支提交日期為 10-20。54 星屬於整個合集，仍是小眾工具。一般生成尺寸只是提示，不保證精確畫布；Pixel Engine 可做 16–128px 精確單件，但不接受參考或編輯圖片，也不適用九宮格、地圖或整套 UI。主圖為本站功能示意，並非作者作品或生成實測。MIT 適用技能文件，不代表線上服務與生成素材沒有另訂條款。",
    "source": "https://github.com/SpriteCook/skills/blob/289cc2750fc3a7a468017c3d8b0f18efde1802e2/README.md",
    "skill": "https://github.com/SpriteCook/skills/blob/289cc2750fc3a7a468017c3d8b0f18efde1802e2/skills/spritecook-generate-sprites/SKILL.md",
    "extraSource": "https://github.com/SpriteCook/skills/blob/289cc2750fc3a7a468017c3d8b0f18efde1802e2/skills/spritecook-workflow-essentials/SKILL.md",
    "extraSourceLabel": "點數、素材編號與流程規則"
  }
];
