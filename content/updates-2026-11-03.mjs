const updates={
  "sprite-gen": {
    "update": "2026-11-03：核對至 3.15.0 與其後 main。補幀預設改為 RIFE v4.25，舊 v4.6 可指定保留；需要重新下載模型，官方文件列出約 830 MB 下載、保留約 45 MB。不同模型可能保留更多或更少姿勢，不是全面品質保證。main 已移除聲音、game-pack、ui-kit 與雙軸背景貼圖，變更表仍標為未發布 v4.0.0，不能說正式 4.0 已推出。",
    "costs": "專案採 Apache-2.0；角色生圖與影片依訂閱額度或 API 計費，重拍、多方向重做會增加成本。處理既有素材可在本機進行，另有運算、agent 與人工檢查成本。目前 main 已移除 ElevenLabs 聲音功能，請勿再依舊版聲音指令操作。",
    "caveat": "2026-10-29 首次收錄，2026-11-03 依 3.15.0 及 main 的未發布移除項目實質更新。補幀可能保留停格或拒絕不合格中間影格，不能保證每格補間成功。v4.0.0 仍是未發布變更標題；main 移除的 game-pack 改由 compose-atlas 與 export-aseprite 交付圖集，後者是相容 JSON，不是 .aseprite 原檔。作者配圖是既有成果，不是新版模型對照測試。",
    "extraSourceLabel": "3.15.0 與尚未發布的移除清單",
    "source": "https://github.com/aldegad/sprite-gen/blob/4f5ccd55c7cf06685a41f954acc1e476b7772ece/README.md",
    "skill": "https://github.com/aldegad/sprite-gen/blob/4f5ccd55c7cf06685a41f954acc1e476b7772ece/SKILL.md",
    "extraSource": "https://github.com/aldegad/sprite-gen/blob/4f5ccd55c7cf06685a41f954acc1e476b7772ece/CHANGELOG.md"
  },
  "baoyu-skills": {
    "update": "2026-11-03：圖解子技能新增明／暗主題與獨立主題檔，可把同一份 SVG 圖解切換用途；PNG 轉換會先展開主題色變數，並固定 sharp 相依套件，缺少時要求安裝。封面 --quick 在沒有偏好設定時可使用預設值跳過首次設定，適合已明確選擇免確認的批次工作。其餘多項 SKILL 縮短與搬移參考內容不視為新功能。",
    "process": "先理解內容與受眾，再選風格、規劃圖片，交給可用生成工具。圖解子技能另有 SVG 圖解路線，支援明暗主題及主題檔，PNG 輸出需要 sharp；不能把這條向量圖解路線與封面、漫畫等點陣生圖的需求混為一談。",
    "skill": "https://github.com/JimLiu/baoyu-skills/blob/5792c7dc8d09a28d6969e8970166c5eb090ce6ad/skills/baoyu-diagram/SKILL.md",
    "extraSourceLabel": "圖解明暗主題與 PNG 輸出",
    "source": "https://github.com/JimLiu/baoyu-skills/blob/5792c7dc8d09a28d6969e8970166c5eb090ce6ad/README.md",
    "extraSource": "https://github.com/JimLiu/baoyu-skills/blob/5792c7dc8d09a28d6969e8970166c5eb090ce6ad/skills/baoyu-diagram/SKILL.md"
  },
  "ui-ux-pro-max": {
    "update": "2026-11-03：設計搜尋新增由右至左介面的相容等級。可用 --rtl 查詢，或以 --rtl=full 只看相對安全的選項；partial 仍要逐項檢查圖示、輪播、動作路徑與圖表，caveats 代表設計本身帶有閱讀方向假設。另補 Nuxt UI 4.12 指引；AutoClaw 驗證基準修正不是新美術功能。",
    "example": "幫我規劃阿拉伯文品牌網站，從產品與風格搜尋加入 --rtl=full，再選字體與配色。用真實長文案檢查導覽、輪播、箭頭、圖表及手機畫面，列出仍須人工確認的方向問題。",
    "source": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/README.md",
    "skill": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/SKILL.md"
  },
  "brand-identity": {
    "update": "2026-11-03：修正品牌規範 PDF 的程式碼範例字體。現在使用品牌等寬字、缺字時回退品牌文字字體，並關閉合成粗體；避免瀏覽器把合成字嵌成 Type3。檢查報告也會指出相關字體名稱。這是 PDF 交付修正，不是新增標誌風格。",
    "caveat": "2026-10-27 首次收錄，2026-11-03 依品牌 PDF 字體修正更新。量測可找出對比、字形或檔案問題，不能保證美感、轉換率或商標可註冊；繁中品牌仍須檢查字形。本站沒有安裝或執行候選。",
    "source": "https://github.com/fatihaydost/brand-identity-skill/blob/850f215db5f8242b20efd744ce02bf6eb0ff5fd4/README.md",
    "skill": "https://github.com/fatihaydost/brand-identity-skill/blob/850f215db5f8242b20efd744ce02bf6eb0ff5fd4/skills/brand-identity/SKILL.md",
    "extraSource": "https://github.com/fatihaydost/brand-identity-skill/blob/850f215db5f8242b20efd744ce02bf6eb0ff5fd4/CHANGELOG.md"
  },
  "mengto-illustration": {
    "update": "2026-11-03：插畫分區之外，合集新增 HTML Explainer Video 與 Create AI Avatar。前者以逐字時間帶動畫，可切換版型和視覺、先用免費草稿時鐘看畫面，再接付費配音；後者將本人或已同意者的影片訓練成 HeyGen 分身，搭配 ElevenLabs 聲音，以同段音訊比較嘴型。兩者是影片新技能，不是十四種插畫風格的新增畫風。",
    "requirements": "插畫路線需能寫程式和看圖的 agent、Node、playwright-core 與 Chromium。新增影片路線另需 ffmpeg／Python；AI 分身使用 HeyGen API、ElevenLabs 及 Node 20、bash。",
    "costs": "SVG 插畫沒有必需的生圖 API，agent 用量另計。新增影片技能的配音／字幕使用 Fil 等服務，AI 分身需 HeyGen 訓練與影片、ElevenLabs 聲音費用；必須先看報價。本站未呼叫付費生成。",
    "caveat": "星數屬整個 MengTo/Skills 合集。本篇主圖仍是插畫範例，不代表新增影片或分身成果。AI 分身只適用本人或已同意的人，嘴型與手部仍須人工比較。本站未執行候選程式。",
    "source": "https://github.com/MengTo/Skills/blob/aa0a995a0ea33a2600b19ea7c9ff85f17e7ca0da/README.md",
    "skill": "https://github.com/MengTo/Skills/blob/aa0a995a0ea33a2600b19ea7c9ff85f17e7ca0da/agent-skills/illustration/illustration-grainy-gouache/SKILL.md",
    "extraSource": "https://github.com/MengTo/Skills/blob/aa0a995a0ea33a2600b19ea7c9ff85f17e7ca0da/agent-skills/media/html-explainer-video/SKILL.md",
    "extraSourceLabel": "新增逐字同步解說影片"
  }
};
export function applyNovemberUpdates(articles){for(const a of articles)if(updates[a.slug])Object.assign(a,updates[a.slug],{updated:"2026-11-03"});}
