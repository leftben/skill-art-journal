// First discovered 2026-10-24. Publication dates do not imply project release dates.
export const newArticles = [
  {
    slug:'pixel-style-poster', repo:'v92388375-gif/pixel-style-poster-skill', name:'Pixel Style Poster Skill', category:'品牌與設計', kind:'單一 Skill',
    published:'2026-10-24T00:32:00Z',
    title:'把一朵花，排成有紙感的網點海報', short:'細網點與文字的編輯海報',
    dek:'把植物、靜物或短句，做成細緻網點、少量墨色與貼近主體的直式海報。',
    image:'pixel-style-poster-lily.png', imageAlt:'Pixel Style Poster Skill 原作者的 Mint Night Lily 百合海報，淡綠細網點與斜體 Night Lily 標題',
    intro:'一朵花、一句短語，就能成為刊物或社群的主視覺。這份技能把主題、情緒和文字整理成 3:4 直式海報，用細小網點和紙張顆粒做出印刷感。',
    process:'先選擇主體、構圖、字體、墨色與紋理，再寫成完整生圖提示詞。有明確標題時，文字會靠近花瓣、葉片或物件；只給主題時，通常保留小字。它會要求檢查網點濃淡、畫面大小層次和文字重複，最後交付圖片、實際提示詞與選用配方，便於延伸系列。',
    example:'做一張薄荷綠百合海報，主題是夜晚與露水。百合佔畫面大半，用細網點表現花瓣明暗，保留帶顆粒的紙色，將 quiet bloom 小字放在花莖旁。交付圖片與最終提示詞。',
    fit:'適合獨立刊物、社群主視覺、展覽情緒板，以及想建立一致植物或靜物海報系列的設計師。',
    requirements:'作者以 Codex Skill 為入口，預設使用 agent 環境的圖片生成能力。只需要提示詞時須明確提出；這個倉庫沒有附帶離線生圖引擎。',
    costs:'技能本身採 MIT；AI agent 與圖片生成的帳號、額度或費用依使用平台另計，沒有附贈模型或生成額度。',
    outputs:'直式點陣海報、最終生圖提示詞、構圖與風格配方說明',
    caveat:'2026-10-24 首次收錄；專案建立及目前分支提交都在 7 月 25 日。名稱中的 pixel 指編輯海報的細網點，不是遊戲角色、精靈圖或像素地圖。主圖是作者公開的 Mint Night Lily，非本站生成或實測；可編輯向量和正式印刷檔仍須另行製作。',
    source:'https://github.com/v92388375-gif/pixel-style-poster-skill/blob/b93066b52fc2f32bf9ec3a9a6d379b4088d6fd7b/README.md',
    skill:'https://github.com/v92388375-gif/pixel-style-poster-skill/blob/b93066b52fc2f32bf9ec3a9a6d379b4088d6fd7b/SKILL.md',
    extraSource:'https://github.com/v92388375-gif/pixel-style-poster-skill/blob/b93066b52fc2f32bf9ec3a9a6d379b4088d6fd7b/LICENSE',
    authorExample:'https://github.com/v92388375-gif/pixel-style-poster-skill/tree/b93066b52fc2f32bf9ec3a9a6d379b4088d6fd7b/examples'
  },
  {
    slug:'webgpu-threejs-tsl', repo:'dgreenheck/webgpu-claude-skill', name:'WebGPU Three.js TSL Skill', category:'3D 與材質', kind:'單一 Skill',
    published:'2026-10-24T00:32:00Z',
    title:'讓網頁裡的材質與粒子，動起來', short:'可互動的 3D 材質與粒子',
    dek:'把 Three.js 場景、TSL 材質、GPU 粒子與後製串起來，協助製作互動 3D 視覺。',
    intro:'網站需要可以點擊、旋轉和改變的視覺時，一張完成的圖片通常不夠。這份技能提供 Three.js 與 WebGPU 的製作知識，讓 agent 在同一個場景裡安排材質、粒子和互動。',
    process:'真正的 SKILL.md 串起七份主題文件、五個程式範例、兩個模板與快速參考。TSL 用 JavaScript 形式組織著色邏輯；內容從場景初始化、節點材質、GPU 計算到發光與景深，也提醒裝置限制和顯示卡失效後的恢復。作者粒子範例包含位置、速度、重力、反彈與點擊受力。',
    example:'替展覽網站做可互動粒子主視覺：點擊後粒子向外散開，再落回地面。先做小規模原型，將材質、滑鼠互動與後製分開控制，並在目標裝置確認速度和 WebGPU 可用性。',
    fit:'適合已接觸 JavaScript 或 Three.js 的創意前端、技術美術與互動設計師，尤其是要把 3D 展示整合進網站的人。',
    requirements:'AI 編碼 agent、JavaScript／Three.js 專案環境，以及支援所需功能的瀏覽器和 GPU。作者提供 Claude Code Skill 與 Cursor 規則兩條路徑；文件標示對齊 Three.js r183+，導入時需固定專案版本。',
    costs:'流程沒有必需的付費圖片生成 API；agent 使用量、開發時間與電腦硬體成本另計。',
    outputs:'互動 3D 前端程式、TSL 材質、GPU 計算與後製流程',
    caveat:'2026-10-24 首次收錄；專案 1 月建立，目前預設分支最後提交在 4 月 10 日。這是技術製作指南，不能直接生成遊戲角色模型。README 聲明 MIT，但未找到獨立 LICENSE、GitHub 授權欄位為空，本誌僅整理用途與連結，不轉載範例程式。沒有可用作者作品圖，配圖為本站功能示意，非執行結果；未測試效能，也不沿用 README 舊瀏覽器表作為今日支援保證。',
    source:'https://github.com/dgreenheck/webgpu-claude-skill/blob/af2319bd01bb7cc881267a9ef42cafdaf5e9029d/README.md',
    skill:'https://github.com/dgreenheck/webgpu-claude-skill/blob/af2319bd01bb7cc881267a9ef42cafdaf5e9029d/skills/webgpu-threejs-tsl/SKILL.md',
    extraSource:'https://github.com/dgreenheck/webgpu-claude-skill/blob/af2319bd01bb7cc881267a9ef42cafdaf5e9029d/skills/webgpu-threejs-tsl/docs/limits-and-features.md',
    authorExample:'https://github.com/dgreenheck/webgpu-claude-skill/blob/af2319bd01bb7cc881267a9ef42cafdaf5e9029d/skills/webgpu-threejs-tsl/examples/particle-system.js'
  }
];

