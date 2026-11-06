const updates = {
  "taste-skill": {
    "update": "2026-11-06：延續昨日 2.5 的網站流程，修正多頁檢查互相覆蓋截圖與報告：index 與其他頁保留各自資料夾。建置後子頁可指定 --root，讓 /_astro/page.css 這類根目錄樣式正確載入；另外會逐一警告未載入的網頁字型。例如同時檢查作品集首頁與 about 子頁，可保留兩份對應報告，避免把另一頁截圖誤判為本頁成果。適合多頁網站設計者，沿用現有 Node、Chrome 與 agent 成本；本站未更新已安裝 Skill。",
    "extraSource": "https://github.com/Leonxlnx/taste-skill/compare/822e0b9d872e10deb931afad2c6c2bd943cf4c7b...9b4bf937a1f69348126959c15d2f99a73e65699b",
    "extraSourceLabel": "本次核實的預設分支差異"
  },
  "ui-ux-pro-max": {
    "update": "2026-11-06：風格資料新增 Apple Native Experience，重點是系統字體、隨明暗模式調整的語意顏色、平台導覽、安全區與可及性控制。例如做手機、平板與桌機共用的設定頁，可依平台安排清單、側欄和彈出面板；不要求用玻璃模糊效果。這是介面風格與實作指引，並非新增 iOS 編譯器；工具與成本條件沿用原文。",
    "extraSource": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/compare/ccce51cba388476d4f403091ddb91636d5cd9fed...b7d5353e0130feb8c5574ef1251f8a1db1873ccb",
    "extraSourceLabel": "本次核實的預設分支差異"
  },
  "mengto-illustration": {
    "update": "2026-11-06：同合集新增 URL to Motion Design，從已獲授權的產品影片或貼文連結挑出 5–10 個不同的動態設計鏡頭，整理截圖與片段，再以自己的文字重做 Fil HTML 場景，交付試映頁和帶音效 MP4。例如參考一段產品介紹中的字卡節奏，改成自己產品的說明；來源片段只供參考，不直接發布。需要 Node、Python、ffmpeg、ImageMagick、瀏覽器、Fil/facet-studio 環境；部分來源另需 yt-dlp。作者流程可能花數小時 agent 用量，不能當作通用一鍵影片工具，也不宣稱評審 8 分是客觀品質保證。十四種插畫風格沒有增加，主圖仍是原有插畫。",
    "extraSource": "https://github.com/MengTo/Skills/compare/1de14e21b2ba8937c0f7f6ddca581cf7cd9d94af...5ea1661a0e05d82b054553daaa6baf6d0233c33c",
    "extraSourceLabel": "本次核實的預設分支差異"
  }
};
export function applyNovember6Updates(articles){for(const a of articles)if(updates[a.slug]){const u=updates[a.slug];Object.assign(a,{...u,update:(a.update?a.update+"\n\n":"")+u.update,updated:"2026-11-06"});}}
