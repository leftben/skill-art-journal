const updates = {
  "scenario-skills": {
    "update": "2026-11-07：新增 playable ads，可由自己的遊戲錄影、截圖與現有美術，重做只有一個主要操作的 HTML5 試玩廣告，例如讓玩家拖一次合成物件後再顯示安裝按鈕。包含提示手勢、靜音、結尾卡與九種廣告網路封裝；作者的多網路自動測試多使用模擬容器，只有文件列出的 Meta、AppLovin 和 Google App Campaigns 工具有另行核對，不能當成九平台都已正式審核。需要 Python 3.12+、影像套件、Playwright/Chromium 與 ffmpeg；缺少素材時才走 Scenario 付費生成。動態音樂影片另新增分段動量檢查，其預設門檻只以合成測試校準，尚非實片品質保證。整體文件另明確要求 Node 22.18+，Windows 符號連結需按環境設定。",
    "extraSource": "https://github.com/scenario-labs/skills/compare/f29bf06ab89088695ed3431ac99d20a090441a2f...e7e19d5f7cf14f3b84a16a261dfb6f77724bd637",
    "extraSourceLabel": "本次核實的預設分支差異"
  },
  "sprite-gen": {
    "update": "2026-11-07：已到 4.1.0。循環動畫會檢查尾端接回開頭的重複畫面，必要時以本機 RIFE 補中間影格，並記錄刻意停格與精確播放速率；inspect-holds 可找出未列明的停格。例如角色每走一圈腳會停一下，可先核對重複格而非重新付費生成整段。4.1 的道具遮罩板會逐格追蹤並移除，減少鏡頭移動後留下桃紅色板子的問題；遮住或移動過遠仍可能找不到，接觸主體也需人工查看。這些後製不新增模型呼叫，但需要本機處理與 RIFE 環境。4.0 已移除 sound、game-pack、ui-kit 和雙軸背景拼接功能，舊檔仍在；本工具重心回到精靈素材。",
    "extraSource": "https://github.com/aldegad/sprite-gen/compare/4f5ccd55c7cf06685a41f954acc1e476b7772ece...6a3f4c47d7f8745853cc06fe66b252636976a442",
    "extraSourceLabel": "本次核實的預設分支差異"
  },
  "fal-skills": {
    "update": "2026-11-07：完整創作流程擴充到角色設定板、品牌靜態圖、商品圖組等；例如用同一商品的正反面授權照片，先核對主圖的瓶蓋、比例與標籤，再延伸細節和生活場景。character-sheet 是一張轉身或表情參考圖，不能當成已驗證可用的 3D 模型。文件把完整 36 技能庫與精簡 MCP 分發包分開，部分市集仍在等待審核，不宣稱所有平台都已上架。執行仍需 genmedia 或 fal MCP、可用的本機影像工具與付費 fal 模型；文件列出的模型和價格僅是候選，需查當下契約與費用。",
    "extraSource": "https://github.com/fal-ai-community/skills/compare/9ca850412943251fc9a466c4c29fdaf7a303a3d8...dc72e8b0d3cc49b9519b193cb597af4c14e17ba8",
    "extraSourceLabel": "本次核實的預設分支差異"
  },
  "baoyu-skills": {
    "update": "2026-11-07：修正 Markdown 轉微信排版時，simple／grace 主題分隔線與三級標題在深色模式的顯示，並把部分 color-mix 轉成較舊微信 WebView 可讀的 rgba。例如同一篇圖文貼到微信時，可減少分隔線消失或顏色不對；這是排版相容性修正，沒有新增插畫風格，工具與成本沿用原文。",
    "extraSource": "https://github.com/JimLiu/baoyu-skills/compare/5792c7dc8d09a28d6969e8970166c5eb090ce6ad...ca703c2d7c2c4399a1dc0cf82224f8551e05a96d",
    "extraSourceLabel": "本次核實的預設分支差異"
  },
  "anthropic-skills": {
    "update": "2026-11-07：docx、pdf、pptx、xlsx 四個文件技能改為 Apache-2.0，README 與各技能授權檔同步更新。這是文件與程式的使用條件改變，並非新增繪圖能力；製作簡報或作品提案時仍需對應工具與 AI 用量。",
    "extraSource": "https://github.com/anthropics/skills/compare/ca45fc496a3436251f191354091d557da31c15b5...2c5958ecac7cee2b583967a2c4981d0f4a75c579",
    "extraSourceLabel": "本次核實的預設分支差異"
  },
  "diagram-design": {
    "update": "2026-11-07：2.6.142 加強時序圖檢查，會驗證 OAuth 一般回傳線和 ALT 條件文字是否真的可見，避免檢查只找到標記卻漏掉被隱藏的條件。適合畫登入流程的設計者；這是檢查器修正，沒有新增圖表類型，沿用原有 Python 與製圖工具。",
    "extraSource": "https://github.com/cathrynlavery/diagram-design/compare/f24d98b05e2d7a5e68c2dedfe46e5b7173f50118...e57eda6102a19444538ebd611d39534fad65b663",
    "extraSourceLabel": "本次核實的預設分支差異"
  }
};
export function applyNovember7Updates(articles){for(const a of articles)if(updates[a.slug]){const u=updates[a.slug];Object.assign(a,{...u,update:(a.update?a.update+"\n\n":"")+u.update,updated:"2026-11-07"});}}

const corrections = {
  "anthropic-skills": {
    "repo": "anthropics/skills",
    "skill": "skills/pdf/SKILL.md",
    "caveat": "倉庫提供示範與參考；docx、pdf、pptx、xlsx 已於本次核實改為 Apache-2.0。其他技能仍須逐項查看授權；平台服務與使用者素材權利另外確認。"
  },
  "sprite-gen": {
    "repo": "aldegad/sprite-gen",
    "skill": "SKILL.md",
    "costs": "專案為 Apache-2.0；角色生圖與影片依供應商或既有訂閱額度計費。現有素材的切圖、去背與 RIFE 補間可在本機處理，仍有 AI 助手、運算與人工檢視成本。4.0 起已移除 sound 聲音功能。"
  },
  "fal-skills": {
    "repo": "fal-ai-community/skills",
    "skill": "skills/ecommerce-product-photography/SKILL.md",
    "process": "主要執行路徑是 genmedia CLI 或可用的 fal MCP。先找模型端點、核對輸入規格與費用，再執行、查詢狀態並檢查成果。合集包含角色設計、遊戲素材、品牌圖與商品圖組；各宿主工具需另行對應，不保證僅有技能文件就能執行全部工作。"
  }
};
export function applyNovember7Corrections(articles){for(const a of articles){const c=corrections[a.slug];if(!c)continue;const r=[{"repo":"anthropics/skills","sha":"2c5958ecac7cee2b583967a2c4981d0f4a75c579"},{"repo":"fal-ai-community/skills","sha":"dc72e8b0d3cc49b9519b193cb597af4c14e17ba8"},{"repo":"aldegad/sprite-gen","sha":"6a3f4c47d7f8745853cc06fe66b252636976a442"}].find(r=>r.repo===c.repo);const {repo,skill,...fields}=c;Object.assign(a,fields,{source:`https://github.com/${repo}/blob/${r.sha}/README.md`,skill:`https://github.com/${repo}/blob/${r.sha}/${skill}`});}}
