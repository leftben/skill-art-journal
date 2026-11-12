export const newArticles = [
  {
    "slug": "claude-drawing",
    "repo": "cloveric/claude-drawing-skill",
    "name": "Claude Drawing",
    "category": "插畫與圖解",
    "kind": "程序化繪圖 Skill",
    "published": "2026-11-12",
    "title": "讓 AI 用程式一筆筆畫出水彩與繪本",
    "short": "構圖可調整的程序化插畫",
    "dek": "83 種畫風從水墨、水彩到像素，以 Python 安排筆觸與紙張紋理，還能保留一步步作畫的過程。",
    "intro": "想替文章畫一片秋日湖景，又希望紅色小舟和標題留白能放在指定位置？Claude Drawing 讓 AI 先規劃構圖，再以 Python 寫場景腳本，呼叫畫筆與材質工具畫圖。你可以要求它改樹的位置、調色或重畫倒影，用程式逐步接近需求。",
    "process": "作者整理了 83 種畫風及對應範例，包含水墨、水彩、顆粒繪本、剪紙、像素與柔光 3D 外觀。AI 先選畫風和構圖，渲染後查看圖片，對照該畫風的問題清單修正，通常安排 2–4 輪。固定隨機種子可重現畫面；保存階段快照後能組成作畫 GIF，部分範例另有角色或形變動畫。",
    "example": "用水彩畫一片秋日湖景：右側兩棵橙黃樹，湖面一艘紅色小舟，右上保留可放活動標題的天空。先交預覽，保留同一個 seed 調整構圖與倒影；確認後輸出 PNG，以及從背景到小舟逐步完成的 GIF。",
    "fit": "適合需要文章配圖、教學畫面、簡單繪本場景，且願意讓 AI 寫程式再逐輪看圖調整的編輯、插畫工作者與內容創作者。需要精確固定品牌角色時仍要提供參考並人工核對，不能只憑畫風名稱保證一致。",
    "requirements": "需要 Python、numpy、Pillow，以及能寫程式並查看圖片的 AI 助手；中文題字需 CJK 字型。作者以 Claude Code 的技能路徑示範，其他助手需調整路徑與執行環境。渲染使用 CPU，不必 GPU。",
    "costs": "專案採 MIT 授權。直接畫圖路線不需圖像生成 API、API key 或生圖額度；協助規劃、寫腳本與修圖的 AI 助手仍依訂閱或 token 用量計費。",
    "outputs": "PNG 等點陣圖片、可重跑的 Python 場景腳本、分階段快照與 GIF；3D 風格指的是畫面外觀，不代表交付可編輯 3D 模型。",
    "caveat": "2026-11-12 首次收錄，並非今天發布。204 星仍屬小眾專案，沒有前次觀察可計算增長。圖為作者隨附成果，本站沒有執行候選程式，也未驗證跨助手相容性或作者列出的渲染速度；按筆畫分層匯出仍列在作者 roadmap，不能當作既有能力。",
    "image": "claude-drawing-autumn.jpg",
    "imageAlt": "cloveric 原作者的程序化水彩秋日湖景：橙黃樹冠、湖面倒影與紅色小舟；非本站生成。",
    "source": "https://github.com/cloveric/claude-drawing-skill/blob/6af36dc717b63d6ddafb54d2eaa120cacd99ab4d/README.md",
    "skill": "https://github.com/cloveric/claude-drawing-skill/blob/6af36dc717b63d6ddafb54d2eaa120cacd99ab4d/SKILL.md",
    "authorExample": "https://github.com/cloveric/claude-drawing-skill/blob/6af36dc717b63d6ddafb54d2eaa120cacd99ab4d/examples/watercolor_autumn.jpg",
    "extraSource": "https://github.com/cloveric/claude-drawing-skill/blob/6af36dc717b63d6ddafb54d2eaa120cacd99ab4d/docs/GIFS.md",
    "extraSourceLabel": "作者作畫過程 GIF 展示"
  }
];
