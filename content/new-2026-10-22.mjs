// First discovered on this scan; repository creation dates are earlier.
export const newArticles = [
  {
    slug:'illo', repo:'tmchow/illo-skill', name:'Illo', category:'插畫與圖解', kind:'單一 Skill',
    published:'2026-10-22T00:31:00Z',
    title:'讓同一個小主角，說清楚不同的事', short:'用固定角色說明概念',
    dek:'把文章與抽象概念，畫成有固定吉祥物、帶印刷質感的系列插畫。',
    image:'illo-bridge.png', imageAlt:'Illo 原作者的墨滴角色在通車中的橋上換木板，用來說明零停機改系統',
    intro:'改系統時服務不能停，怎麼畫給讀者看？Illo 作者把它比喻成一邊通車、一邊換橋。預設的墨滴角色 Blot 真的在畫面裡做事，讓概念變成一個能理解的情境。',
    process:'先判斷需求是文章配圖、概念插畫、漫畫還是解說圖，再選角色、畫風和構圖。技能提供角色一致性與生成後檢查規則，風格包含孔版印刷、木刻、像素、黏土與粉筆等十七種路線；也能建立自己的角色包，讓系列圖有共同主角。',
    example:'用同一個墨滴吉祥物，畫「收到需求、整理資料、寄送電子報」三張系列插畫。讓主角每張都實際參與工作，保留相同身形、黑色墨線與一個亮色點綴，先交構圖再生成。',
    fit:'適合部落格作者、電子報編輯，以及需要吉祥物串起系列圖的內容設計師。作者原作的換橋比喻，也很適合解釋看不見的技術工作。',
    requirements:'作者腳本需要 Python 3 與網路，主要標示 macOS／Linux。生圖可走作者文件中的 Codex CLI、Grok CLI 或 OpenRouter；其中 Codex CLI 通道明確不支援 Windows／WSL，不能直接承諾本機可用。',
    costs:'Skill 是 MIT，但生圖不等於免費。CLI 通道消耗相應帳號訂閱額度；OpenRouter 需要 API key，依模型計費。請先確認帳號可用額度並預留重試成本。',
    outputs:'編輯插畫、系列角色配圖、漫畫或概念解說圖',
    caveat:'2026-10-22 首次收錄，並非當天發布。生成仍可能需要挑圖和重試；精確數據圖表、正式標誌和介面稿不是它的主要用途。本站沒有執行此技能；主圖是原作者展示，Illo by Trevin Chow.',
    source:'https://github.com/tmchow/illo-skill/blob/0b0abee9214d9cef3c9f42d5c739a0d63cb618e6/README.md',
    skill:'https://github.com/tmchow/illo-skill/blob/0b0abee9214d9cef3c9f42d5c739a0d63cb618e6/skills/illo/SKILL.md',
    extraSource:'https://github.com/tmchow/illo-skill/blob/0b0abee9214d9cef3c9f42d5c739a0d63cb618e6/skills/illo/README.md',
    authorExample:'https://github.com/tmchow/illo-skill#examples'
  },
  {
    slug:'threejs-skills', repo:'CloudAI-X/threejs-skills', name:'Three.js Skills', category:'3D 與材質', kind:'Skill 合集',
    published:'2026-10-22T00:31:00Z',
    title:'讓你的 3D 模型，在網頁上動起來', short:'能旋轉與互動的網頁 3D',
    dek:'用十三項技能處理場景、材質、打光、動畫與資產壓縮，把既有模型帶上網頁。',
    intro:'你已有一個鞋子模型，接下來想讓觀眾用滑鼠旋轉、看清材質，還要在手機上順暢載入。Three.js Skills 提供的是這段網頁實作的知識與範例。',
    process:'合集從相機與場景開始，延伸到 PBR 材質、燈光、shader、互動、骨架與 morph 動畫、React Three Fiber 以及 glTF 資產管線。資產流程會先檢查模型，再壓縮幾何與貼圖，配合正確的解碼器。README 以 Three.js r186 為目標版本，這是作者文件的驗證範圍。',
    example:'把我已有的鞋子 GLB 做成網頁商品展示：可拖曳旋轉、調整打光並切換材質。先確認模型與貼圖尺寸，再壓縮載入檔案，檢查手機操作與視窗縮放。',
    fit:'適合能維護 JavaScript 的網頁設計師、互動開發者，以及想在作品集展示模型的 3D 美術。它協助完成展示與互動，不會憑空生成精緻模型。',
    requirements:'瀏覽器、Three.js 與能寫程式的 AI agent；使用 npm、打包工具或 glTF-Transform 資產處理時需要 Node.js。模型與材質素材由你準備，實際圖形功能依瀏覽器能力而定。',
    costs:'技能採 MIT，沒有必需的付費生圖服務。AI agent 用量、模型素材和網站託管依各自方案計算；本誌沒有執行作者的版本驗證。',
    outputs:'網頁 3D 場景、互動與動畫程式、經整理壓縮的 glTF／GLB 資產',
    caveat:'2026-10-22 首次收錄，專案早於本日建立。星數屬於整個合集；十三項技能不是十三個成品。來源未提供可用的作者作品圖，本站主圖為功能示意，並非作者成果。',
    source:'https://github.com/CloudAI-X/threejs-skills/blob/0e181866f095b5f06d005133876e926515390d95/README.md',
    skill:'https://github.com/CloudAI-X/threejs-skills/blob/0e181866f095b5f06d005133876e926515390d95/skills/threejs-fundamentals/SKILL.md',
    extraSource:'https://github.com/CloudAI-X/threejs-skills/blob/0e181866f095b5f06d005133876e926515390d95/skills/threejs-asset-pipeline/SKILL.md'
  }
];
