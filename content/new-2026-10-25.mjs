// First discovery on this date; these projects were released earlier.
export const newArticles = [
  {
    slug:'gimi-illustration', repo:'GiMi-Xiaomi/gimi-illustration-skill', name:'Gimi Illustration', category:'插畫與圖解', kind:'單一 Skill',
    published:'2026-10-25T00:29:31Z',
    title:'把中文長文，拆成三張說得清楚的圖', short:'中文文章的三風格配圖',
    dek:'從正文挑出值得畫的意思，用怪誕手繪、暖調繪本或產品方案風格，安排系列配圖。',
    intro:'文章寫好了，卻不知道哪一段值得配圖？Gimi 會先讀正文、挑插入位置，再安排每張圖要說的意思、構圖和閱讀順序，讓配圖跟著內容走。',
    process:'目前提供怪誕手繪、暖調繪本、產品方案三種風格，可指定比例、張數、圖內標題，也可選擇不用角色。若要用自己的角色，先提供正面參考圖、確認角色方案與風格校準圖，再把兩者一起當作後續圖片參考，幫助系列畫面保持一致。',
    example:'替這篇「專案改需求如何失控」文章做三張直版配圖，採產品方案風格，不放角色。依序說明修改混亂、找回交付主線、整理成可分享成果。先列插入位置與每張圖的意思，再交付圖片與 shot-config.md。',
    fit:'適合中文文章作者、內容編輯、UX 與產品設計師，以及需要方法論或工作流程配圖的人。',
    requirements:'支援 Skill 的 agent，並具有平台內建生圖及參考圖片附件能力。作者舉 Codex Image Gen、Cursor GenerateImage 為例；自訂角色流程缺少參考圖能力時會停止。',
    costs:'工作流程本身可取得；圖片生成權限、訂閱額度與用量費依 agent 平台計算。專案沒有附贈離線模型或免費生圖額度。原有 Gimi 角色圖另有 IP 條款，不能當成 MIT 素材庫。',
    outputs:'文章系列配圖、shot-config.md 配圖策略與插入位置紀錄',
    caveat:'2026-10-25 首次收錄；專案 7 月建立，目前預設分支最後提交在 8 月 3 日。三種風格與參考圖流程不等於任意畫風訓練，也不保證角色每次完全一致。程式與工作流為 MIT；Gimi 馬帽女孩及校準圖不在 MIT 範圍，IP-NOTICE 禁止單獨提取再散布，因此本站使用功能示意，非作者作品或生成實測。',
    source:'https://github.com/GiMi-Xiaomi/gimi-illustration-skill/blob/0f602eaf5c50c8b0c7a4619ce53095cfc9e30622/README.md',
    skill:'https://github.com/GiMi-Xiaomi/gimi-illustration-skill/blob/0f602eaf5c50c8b0c7a4619ce53095cfc9e30622/SKILL.md',
    extraSource:'https://github.com/GiMi-Xiaomi/gimi-illustration-skill/blob/0f602eaf5c50c8b0c7a4619ce53095cfc9e30622/IP-NOTICE.md',
    extraSourceLabel:'角色圖片授權聲明',
    authorExample:'https://github.com/GiMi-Xiaomi/gimi-illustration-skill/tree/0f602eaf5c50c8b0c7a4619ce53095cfc9e30622/assets'
  },
  {
    slug:'spine-animation-ai', repo:'GenielabsOpenSource/spine-animation-ai', name:'Spine Animation AI', category:'像素與遊戲', kind:'工具與 Skill',
    published:'2026-10-25T00:29:31Z',
    title:'讓角色的頭與四肢，接成會動的骨架', short:'角色拆件到 2D 骨架動畫',
    dek:'把角色透明拆件、圖集或 Spine JSON，整理成可微調的骨架、關鍵影格與瀏覽器預覽。',
    intro:'角色已經畫好並分成頭、身體、手腳，接下來可以嘗試讓它呼吸、行走或揮手。這個專案把拆件對位、繪製順序與動畫資料串起來，讓 agent 協助建立 2D 骨架動畫。',
    process:'實際 SKILL.md 包含 Python 腳本與流程，會利用特徵比對和模板比對對齊拆件，再建立骨架、slot、繪製順序與關鍵影格。列出的動作有待機、走路、跑步、揮手、跳躍與攻擊；位置不準時可用 offset JSON 或互動編輯器調整。',
    example:'用我提供的機器人頭、軀幹與四肢透明 PNG，加上完整組合參考圖，先對齊部件，再做待機呼吸與走路循環。提供瀏覽器預覽與 Spine JSON；右手偏高時先調對位，再檢查動畫。',
    fit:'適合已有角色拆件的 2D 遊戲開發者、技術美術，以及想理解 Spine 資料管線的人。商用前需先確認專案授權。',
    requirements:'Python 3.9+、OpenCV、Pillow、NumPy；作者以 Claude 工作流為例，也提供手動管線。已有拆件可略過 Gemini；只有整張圖而要自動拆件時需 Gemini 圖像 API。核心可做 Canvas 預覽；同 repo 的額外 Reskin Studio 才另需 Node 18+、Gemini key 與 SAM-3 HTTP 服務。',
    costs:'專案採 PolyForm Noncommercial 1.0.0，非商用依條款使用，商用需另洽作者，未公布價格。agent、Gemini 與運算費另計。若使用 Spine 編輯器保存／輸出或整合官方 Runtime，另依 Spine 官方授權；不能把 repo 當成免費商用授權。',
    outputs:'Spine 4.2 相容 JSON、atlas、PNG 貼圖、HTML 預覽與對位調整資料',
    caveat:'2026-10-25 首次收錄；專案 2 月建立，目前預設分支最後提交在 8 月 26 日。遮擋嚴重的拆件仍需人工修正，沒有保證可直接進商用產線。Reskin Studio 是另附的換皮應用。原作者 demo 圖未找到獨立再散布許可，本站配圖為功能示意，非作者作品；本次沒有執行動畫管線。',
    source:'https://github.com/GenielabsOpenSource/spine-animation-ai/blob/702b71689cac826efee942ee4564fef9560d6ef8/README.md',
    skill:'https://github.com/GenielabsOpenSource/spine-animation-ai/blob/702b71689cac826efee942ee4564fef9560d6ef8/SKILL.md',
    extraSource:'https://github.com/GenielabsOpenSource/spine-animation-ai/blob/702b71689cac826efee942ee4564fef9560d6ef8/LICENSE',
    extraSourceLabel:'非商用授權全文',
    authorExample:'https://GenielabsOpenSource.github.io/spine-animation-ai/demo/sombrero_idle.html'
  }
];
