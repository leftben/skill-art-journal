const updates = {
  "taste-skill": {
    "source": "https://github.com/Leonxlnx/taste-skill/blob/822e0b9d872e10deb931afad2c6c2bd943cf4c7b/README.md",
    "extraSource": "https://github.com/Leonxlnx/taste-skill/compare/12af471f627f866411b4bd785b19646d3672784c...822e0b9d872e10deb931afad2c6c2bd943cf4c7b",
    "extraSourceLabel": "本次核實的預設分支差異",
    "update": "2026-11-05：README 與實際 SKILL 已改為 tasteskill 2.5.0。先判斷軟體、遊戲、硬體、產品、服務或實體店，再安排配色、字體與首屏版面；實體店以照片、到店資訊和預約為主，科技或遊戲頁才使用受限制的 shader、場景與動態。沒有產品照片時可用產品渲染，軟體頁要展示自己的操作介面。例如替咖啡店做以照片與訂位為主的網站，或替遊戲安排世界觀主視覺和預告片位置。新增共同版面系統、按鈕與滑鼠微互動，並檢查 1440、1024、768、390 等尺寸。需 Node 22+、Chrome／Edge／Chromium；ffmpeg 可選，無必需 API key，助手用量另計。舊咖啡店主圖是 README 明示的早期 v2 展示，不代表 2.5 實測成果。已安裝使用者可留意版本差異，本次沒有更新本機 Skill。"
  },
  "comfyui-mcp": {
    "source": "https://github.com/artokun/comfyui-mcp/blob/707474d24d0d251ba04a1bebdf86620cef2eaa8b/README.md",
    "extraSource": "https://github.com/artokun/comfyui-mcp/compare/5bfe534ed114c3037137b3fabd209011238e9d10...707474d24d0d251ba04a1bebdf86620cef2eaa8b",
    "extraSourceLabel": "本次核實的預設分支差異",
    "update": "2026-11-05：修正大型影片等非圖片輸出超出 get_image 下載上限時的指引：會指出可行的 ComfyUI 直接下載網址，符合本機條件時提供檔案路徑；不再誤叫使用者縮小圖片預覽或轉換 MP4，也提醒原輸出仍在伺服器，不必重跑生成。例如長影片已完成卻無法由 agent 取回時，可沿指引取檔，省下重算。這是取檔可靠性修正，沒有增加生成模型；原有 ComfyUI、模型與 GPU／雲端成本不變，本站未實測。"
  }
};
export function applyNovember5Updates(articles){for(const a of articles)if(updates[a.slug]){const combined=(a.update?a.update+"\n\n":"")+updates[a.slug].update;Object.assign(a,updates[a.slug],{update:combined,updated:"2026-11-05"});}}
