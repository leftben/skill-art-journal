export const newArticles = [
  {
    "slug": "meshy-3d-agent",
    "repo": "meshy-dev/meshy-3d-agent",
    "name": "Meshy 3D Agent",
    "category": "3D 與材質",
    "kind": "Skill 合集",
    "published": "2026-11-17",
    "title": "從參考圖製作 3D 模型，再準備遊戲或列印交付",
    "short": "串接 Meshy 建模與列印流程",
    "dek": "把生成、貼圖、減面與下載接成一條流程，另有獨立的 3D 列印準備技能。",
    "intro": "你有一張寶箱參考圖，想把它變成遊戲裡可用的模型。Meshy 官方這組 Skills 告訴 AI 助手如何操作 Meshy CLI：選擇生成路線、等待同一筆任務、取得模型與預覽，再接續貼圖、減面或格式轉換。它是服務操作指南，生成品質仍取決於模型、參考圖與人工檢查。",
    "process": "先說明用途是遊戲素材、角色、渲染還是實體列印，設定格式、面數或尺寸與預算。使用生成技能製作或接續既有模型；列印技能則區分本機縮放、雲端分析／修復與多色輸出。每個階段保留任務編號，最後下載需要的檔案並查看可用的預覽。",
    "example": "把自己畫的木製寶箱設計圖做成帶貼圖 GLB，存到遊戲素材資料夾；看過預覽後，再要求一份 1,500 面的低細節版本。若改做 150 mm 擺件，則走列印流程，確認尺寸、薄壁與支撐，交付切片軟體檔案。這是本站需求範例，未呼叫服務實作。",
    "fit": "適合已有 Meshy 付費方案、希望讓 AI 助手整理 3D 製作步驟的獨立遊戲開發者、3D 創作者與模型列印玩家。",
    "requirements": "Node.js 22.12+、Meshy CLI 0.8.5 以上的 0.8 系列，以及能執行 CLI 的 AI 助手；雲端工作需網路與帳號登入。列印交接可用 Bambu Studio、OrcaSlicer、PrusaSlicer 或 Cura。",
    "costs": "技能文字採 MIT；雲端生成需 Meshy Pro 或以上付費方案，並消耗 Meshy 點數，實際費用依所選生成與後製階段。既有 OBJ 的本機縮放、放正與開啟切片檔不需帳號或點數；AI 助手與硬體成本另計。不要把帳號餘額當成報價。",
    "outputs": "依流程下載 GLB、FBX、OBJ 等數位資產，或 STL／3MF 列印檔，另附可用的預覽與任務資訊；不必下載所有格式。",
    "caveat": "2026-11-17 首次收錄，非今日發布；專案建立於 2026-03-17，本次觀察 111 星，屬小型官方候選。README 寫「三個」技能，但目前樹狀目錄與技能表實際只有生成、列印兩個，本文依檔案核實。預覽圖不能證明拓撲或可列印性；修復會改幾何並丟失貼圖，須依用途再檢查。未安裝、執行候選或呼叫付費服務。",
    "source": "https://github.com/meshy-dev/meshy-3d-agent/blob/9f03bcb66cf51dc3b0063bd896d4c85c1e5dee0a/README.md",
    "skill": "https://github.com/meshy-dev/meshy-3d-agent/blob/9f03bcb66cf51dc3b0063bd896d4c85c1e5dee0a/skills/meshy-3d-generation/SKILL.md",
    "extraSource": "https://github.com/meshy-dev/meshy-3d-agent/blob/9f03bcb66cf51dc3b0063bd896d4c85c1e5dee0a/skills/meshy-3d-printing/SKILL.md",
    "extraSourceLabel": "獨立的 3D 列印 SKILL.md",
    "authorExample": "https://github.com/meshy-dev/meshy-3d-agent/blob/9f03bcb66cf51dc3b0063bd896d4c85c1e5dee0a/README.md"
  }
];
