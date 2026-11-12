const updates = {
  "scenario-skills": "2026-11-12：0.62.0 補上 MiniMax H3 影片 LoRA 訓練指引，可用圖片、短片，或短片與參考素材配對來學習特定風格。例如讓同一系列遊戲角色的宣傳短片維持一致外觀；純圖片的 int8 路線不會從素材學到動作。另可從一段遊戲概念或類型名稱開始做互動廣告，先交代手指怎麼操作、最精彩的時刻與結束方式，再準備兩張概念畫面；沒有商店連結的成品只作預覽，不能當成已上架遊戲廣告。適合已有素材與授權、需要系列影片或廣告概念的團隊。需 Scenario 帳號與 MCP；互動廣告另需 Python 3.12、Pillow/numpy/scipy/fontTools/brotli、Playwright Chromium 和 ffmpeg。推薦模型、生成與訓練可能消耗 CU，訓練需在素材與配對完成後重新報價，啟動會收費且停止不退費。影片模型另受 MiniMax H3 授權約束：輸出不可拿去訓練其他 AI 模型，真人肖像需符合授權及同意條件。這是技能流程擴充，本站未訓練模型或測試廣告平台。",
  "remotion": "2026-11-12：4.0.543 把「新影片預設可在 Studio 修改」寫成明確製作原則：字卡、圖層與時間要能分開編輯；由外部資料或逐格計算產生、不能直接編輯的部分要先說明。例如同一支展覽短片換三組標題，保留可拖曳字卡，再用 JSON 參數逐版輸出。渲染指引新增命令列參數與伺服器批次範例，並補上授權金鑰、測試渲染標記和實際影格檔名的處理方式；既有可編輯功能並非今天才推出。適合需要反覆改版的影片製作者與開發者；仍需 React、Node 與 Remotion，AI 助手、渲染環境和商業授權另計。本站核對文件，未執行渲染。",
  "impeccable": "2026-11-12：預設分支新增把設計規則與評析歷史同步到 Impeccable 帳戶的流程，適合想跨專案查看介面診斷紀錄的人。例如保存作品集的 critique 報告，之後在帳戶回看。這次主要是帳戶與資料同步，沒有新增插畫或排版能力；Codex SKILL 仍標示 4.8.2，不能把主分支變化說成已發布新版。依目前 CLI 合約，登入且權限包含 design:write／critiques:write 時，DESIGN.md 內容與已儲存 critique 報告預設可上傳；舊登入缺少權限時會跳過，並可能提示重新登入。可用 health design off、critiques off 分別關閉，health off 關閉設計健康同步；setup status/on/off/forget 管理每日安裝狀態摘要回報。未登入、CI 或遙測退出時不傳送，明確關閉優先。這不代表所有使用者都已開啟，也不是新增必要付費生圖服務；助手額度仍另計。本站只讀原始碼與合約，未執行新 CLI、登入或更動本機設定。"
};
const sources = {
  "remotion-dev/skills": {
    "source": "https://github.com/remotion-dev/skills/blob/7e541aa4d7361dfaca0780a565a47307eb7bdfbb/README.md",
    "compare": "https://github.com/remotion-dev/skills/compare/1af7e69a2a613437d46095924057970a6a7df40d...7e541aa4d7361dfaca0780a565a47307eb7bdfbb"
  },
  "scenario-labs/skills": {
    "source": "https://github.com/scenario-labs/skills/blob/94cab3f1da47841f52d4c7b3ea8583aa13dd0eb9/README.md",
    "compare": "https://github.com/scenario-labs/skills/compare/b96506d77c8595a4fe9c66eddb0bf9b5953a1d45...94cab3f1da47841f52d4c7b3ea8583aa13dd0eb9"
  },
  "iart-ai/motion-design-skills": {
    "source": "https://github.com/iart-ai/motion-design-skills/blob/b85e50c4cef5ff17aa2187a10d49d2dae9226c74/README.md",
    "compare": "https://github.com/iart-ai/motion-design-skills/compare/3c129f769d90a1328c209c386492333c9ac62312...b85e50c4cef5ff17aa2187a10d49d2dae9226c74"
  },
  "pbakaus/impeccable": {
    "source": "https://github.com/pbakaus/impeccable/blob/b4bff1626c344067788c2679f048a20057c7cc5a/README.md",
    "compare": "https://github.com/pbakaus/impeccable/compare/fead7938331bb92129e3c5ce14f600611067bd06...b4bff1626c344067788c2679f048a20057c7cc5a"
  }
};
export function applyNovember12Updates(articles){for(const a of articles)if(updates[a.slug]){a.update=(a.update?a.update+'\n\n':'')+updates[a.slug];a.updated='2026-11-12';a.source=sources[a.repo].source;a.extraSource=sources[a.repo].compare;a.extraSourceLabel='本次核實的預設分支差異';}}

