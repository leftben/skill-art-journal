const updates = {
  "scenario-skills": {
    "source": "https://github.com/scenario-labs/skills/blob/e24bc7d40be97b428e7b9fd467c415366e1dd974/README.md",
    "extraSource": "https://github.com/scenario-labs/skills/compare/7f4b801c7248d51b093ec365aceb114bd06139e6...e24bc7d40be97b428e7b9fd467c415366e1dd974",
    "extraSourceLabel": "本次核實的預設分支差異",
    "update": "2026-11-04：Blender 預演新增自行車和騎乘配置，可依騎士身高縮放車架，讓有關節的人偶雙手握把、雙腳隨踏板踩動。例如先排出兩位騎士沿街前進的鏡頭，再決定是否送往生成影片。膠囊替身只會坐著前傾，不能說已具完整踩踏；作者在 Blender 5.2.1 檢查幾何與接觸，但不同影片模型是否能保住踩踏動作仍未測試。沿用既有生成與動捕能力；本機預演需 Blender，後續 Scenario 生成另外計費。"
  },
  "diagram-design": {
    "source": "https://github.com/cathrynlavery/diagram-design/blob/f24d98b05e2d7a5e68c2dedfe46e5b7173f50118/README.md",
    "extraSource": "https://github.com/cathrynlavery/diagram-design/compare/0cf73c3fcc56667ad91a9a04c439ac6ccfabc9d1...f24d98b05e2d7a5e68c2dedfe46e5b7173f50118",
    "extraSourceLabel": "本次核實的預設分支差異",
    "update": "2026-11-04：2.6.137–2.6.141 修正既有圖檔匯入：Mermaid 較長點線不再誤讀而整檔失敗；draw.io 表格列不再被當成另一張表；Excalidraw 優先保留原始文字，避免窄框中的 PostgreSQL 被錯拆成多行。適合整理現有流程或架構圖的編輯與設計師，原有工具與成本條件不變。OpenAI 目錄快照只是待核准提案，不當成已完成功能。本站核實原始差異，未執行匯入工具。"
  },
  "mengto-illustration": {
    "source": "https://github.com/MengTo/Skills/blob/1de14e21b2ba8937c0f7f6ddca581cf7cd9d94af/README.md",
    "extraSource": "https://github.com/MengTo/Skills/compare/aa0a995a0ea33a2600b19ea7c9ff85f17e7ca0da...1de14e21b2ba8937c0f7f6ddca581cf7cd9d94af",
    "extraSourceLabel": "本次核實的預設分支差異",
    "update": "2026-11-04：延續 11/03 補充的解說影片與 AI 分身路線；Create AI Avatar 預設引擎改為 Avatar V，補明單張照片可先建立 photo avatar，再以相同音訊比較 V、IV、III。作者展示也改為照片製作的主持人，不能當成真人訓練分身的對照實測。適合已有同意授權肖像、想做說話主持人的創作者；需 HeyGen、音訊或 ElevenLabs、Node 20／bash／ffmpeg，訓練及生成按服務計費，先核對報價。插畫十四種風格本身未增加，主圖仍為原有插畫。"
  }
};
export function applyTodayUpdates(articles){for(const a of articles)if(updates[a.slug]){a.update=(a.update?a.update+"\n\n":"")+updates[a.slug].update;Object.assign(a,{...updates[a.slug],update:a.update,updated:"2026-11-04"});}}
