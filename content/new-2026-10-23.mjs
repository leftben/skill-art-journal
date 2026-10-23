// First discovered 2026-10-23; neither project was released today.
export const newArticles = [
  {
    slug:'blender-agent-skills', repo:'EL4CTEO/blender-skills', name:'Blender Agent Skills', category:'3D 與材質', kind:'Skill 合集',
    published:'2026-10-23T00:35:00Z',
    title:'把模型做完，也把交付前的問題找出來', short:'從建模到交付的 3D 工作流',
    dek:'二十二項 Blender 技能串起建模、材質、動畫與遊戲輸出，每一步都要求檢查模型和看圖。',
    image:'blender-concrete.webp', imageAlt:'EL4CTEO 作者使用 Blender Agent Skills 製作的水泥牆材質渲染，斜光照出牆面細節',
    extraImage:'blender-blanket.webp',
    intro:'做出好看的渲染只是其中一步。真正要把模型交給遊戲或其他人，還要看尺寸、破洞、法線、貼圖與動畫是否正確。這組技能把製作和檢查排在同一條工作流程裡。',
    process:'合集從硬表面建模、雕刻、UV 與 PBR 材質，到貼圖烘焙、骨架動畫、LOD 和遊戲引擎匯出，也涵蓋日夜打光、雨雪和布料模擬。核心會先確認 Blender 環境，再按任務挑技能；修改模型後，要求數值檢查、多角度預覽，最後重新讀取輸出檔確認交付。',
    example:'把我的木箱模型整理成 Unreal 遊戲道具：依參考核對比例，整理 UV、烘焙法線，建立遠近不同細節的 LOD。輸出前找出浮空零件、重疊表面和倒面，附多角度預覽、面數和輸出檔清單。',
    fit:'適合獨立遊戲開發者、技術美術，以及已在使用 Blender、想把資產製作流程整理得更完整的人。也能協助清理外部生成模型，但不保證一鍵修好所有問題。',
    requirements:'作者明確要求 Blender 5.2 LTS 或更新版本，以及能執行 shell 和查看圖片的 AI agent。Blender MCP 可選；沒有 MCP 可走背景模式。Windows 亦有安裝腳本，但本誌未安裝或測試。',
    costs:'技能採 MIT，沒有必需的付費生圖或 3D 生成 API。仍需支付 AI agent 的使用量，並負擔本機渲染時間與硬體需求；外部素材、生成服務或雲端渲染若另行接入，費用另計。',
    outputs:'Blender 工程、模型與貼圖、骨架動畫、LOD、遊戲用匯出檔及檢查資料',
    caveat:'2026-10-23 首次收錄，專案建立於 10 月 14 日。主圖與床單圖是作者公開的實作展示，並非本站實測；作者的一次性對照不能當成普遍效能保證。輪廓、比例、穿插與關節變形仍須人工看圖確認。',
    source:'https://github.com/EL4CTEO/blender-skills/blob/71d031dab8bc6729504d11a78cbe91945401045f/README.md',
    skill:'https://github.com/EL4CTEO/blender-skills/blob/71d031dab8bc6729504d11a78cbe91945401045f/skills/blender-core/SKILL.md',
    extraSource:'https://github.com/EL4CTEO/blender-skills/blob/71d031dab8bc6729504d11a78cbe91945401045f/skills/blender-workflow-recipes/SKILL.md',
    authorExample:'https://el4cteo.github.io/blender-skills/comparison/'
  },
  {
    slug:'motion-design', repo:'LottieFiles/motion-design-skill', name:'LottieFiles Motion Design', category:'網頁與介面', kind:'官方單一 Skill',
    published:'2026-10-23T00:35:00Z',
    title:'先想清楚感受，再決定怎麼動', short:'讓動畫有一致的品牌性格',
    dek:'從情緒、速度和先後順序出發，替按鈕、卡片和介面切換安排一致的動作語言。',
    intro:'同一顆按鈕，可以輕快彈起，也可以安靜地停穩。LottieFiles 的官方技能先問「觀眾應該有什麼感受」，再決定動作快慢、速度如何改變，以及誰先出場。',
    process:'八步檢查先確定情緒與動作性格，再安排位移、縮放、時長和緩動。它提供活潑、沉穩精緻、企業與高能量四種方向，以及進出場、成功回饋、載入和多物件編舞規則；實作可接 CSS、GSAP、Lottie、Spring 或其他動畫工具。',
    example:'替工作室報名表設計「送出、等待、成功」三個狀態。按下立即回應，等待保持穩定，完成時讓打勾與文字依序出現。全站共用三種時長與同一套速度曲線，減少動態模式保留清楚的狀態變化。',
    fit:'適合網站和 App 設計師、品牌動效工作者，以及會寫動畫但覺得節奏生硬的前端開發者。可先拿既有動畫來檢查，也能建立品牌的一致動作規範。',
    requirements:'支援 Skills 的 AI coding agent，以及實際要修改的前端專案。需要選定一種動畫實作方式；只用 CSS 也可開始，不要求一定使用 Lottie。',
    costs:'技能文字採 MIT，沒有要求 LottieFiles 訂閱或付費生成 API。AI agent 用量依方案；若另選商用工具或託管服務，依各自條件計算。',
    outputs:'動效方向與節奏建議、狀態切換和動畫程式、品牌動作規範',
    caveat:'2026-10-23 首次收錄；專案 3 月建立、目前預設分支最後提交在 5 月。這是設計指引，不是自動輸出影片的服務。設計口訣須配合內容與可及性調整。README 外部圖片授權未核實，本站以功能示意圖說明，非作者成果。',
    source:'https://github.com/LottieFiles/motion-design-skill/blob/f9a8a041b85185ee4881b3471d3415e939aac772/README.md',
    skill:'https://github.com/LottieFiles/motion-design-skill/blob/f9a8a041b85185ee4881b3471d3415e939aac772/skills/motion-design/SKILL.md',
    extraSource:'https://github.com/LottieFiles/motion-design-skill/blob/f9a8a041b85185ee4881b3471d3415e939aac772/skills/motion-design/director/context-adaptation.md',
    authorExample:'https://github.com/LottieFiles/motion-design-skill#example-prompts'
  }
];

