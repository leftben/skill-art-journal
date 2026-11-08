const updates = {
  "taste-skill": {
    "update": "2026-11-08：2.5.1 增加完稿檢查 gate，把文字、版面、手機點擊範圍與無障礙檢查接在一起，最多三輪修正並記錄豁免；另加入依行業配色、可追溯授權的替代照片與照片章節動效。例如替咖啡店做網站，可先用明確標示於交付報告的替代照片排版，再檢查 320px 手機是否溢出、按鈕是否太小，最後換入店家照片。需要 Node 與 Chrome 等既有環境、AI 用量及人工檢視；不是保證每個頁面自動達標，也未更新本機已安裝版本。",
    "extraSource": "https://github.com/Leonxlnx/taste-skill/compare/9b4bf937a1f69348126959c15d2f99a73e65699b...f6b76575f949707b4e3c37cd86cb44b0b98643e8",
    "extraSourceLabel": "本次核實的預設分支差異"
  },
  "ui-ux-pro-max": {
    "update": "2026-11-08：新增中文、日文、韓文輸入法的 Enter 安全指引，避免按 Enter 選字時把未完成訊息送出；例如作品集的詢問表單或聊天框可依此檢查輸入狀態，仍須用實際作業系統、瀏覽器與輸入法手動驗證。同時修正 Windows 預設編碼造成非英文 HTML 讀取失敗、投影片文字亂碼，統一以 UTF-8 讀寫。這是介面行為與文字相容性改善，沿用既有工具與成本。",
    "extraSource": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/compare/b7d5353e0130feb8c5574ef1251f8a1db1873ccb...4f2dbb67e64969a9a30ab00742f2d55d66ddec2b",
    "extraSourceLabel": "本次核實的預設分支差異"
  },
  "scenario-skills": {
    "update": "2026-11-08：新增手機遊戲 UA 影片廣告流程，把遊戲截圖或錄影拆成盤面、操作動作、計分 HUD、手勢、音效與結尾卡，逐鏡檢查玩法邏輯。例如把自己的合成遊戲素材做成 15 秒直式廣告，數字與按鈕以獨立圖層合成，避免讓影片模型亂畫；這是影片廣告，與昨日的可操作 HTML5 試玩廣告不同。需要 Scenario MCP、服務點數、Python／影片合成工具與人工檢查；規格檢查不等於廣告平台核准。音樂影片另加入 4K 主檔與動態模糊的製作指引，既有影片修改也擴充重剪流程。3D 參考圖改為優先純背景原圖，避免光滑物體的環境反光被烘進材質；Blender 低於 5.2 的網頁匯出停用 meshopt，以免匯出參數不相容。未執行或付費驗證生成品質。",
    "extraSource": "https://github.com/scenario-labs/skills/compare/e7e19d5f7cf14f3b84a16a261dfb6f77724bd637...f38c3e8995a2a31681f37ef0039435a89f54f5ef",
    "extraSourceLabel": "本次核實的預設分支差異"
  },
  "blender-agent-skills": {
    "update": "2026-11-08：資產檢查器修正兩個實際問題：遠離原點的毫米級零件不再因浮點誤差被誤報為法線朝內；大量 UV 疊在同一格時改用固定大小陣列，降低記憶體暴增風險。例如檢查機器人的小關節與重疊 UV，能減少誤報和卡住。作者附回歸測試，本站只核對差異，未執行效能測量；需要既有 Blender、Python／NumPy 與人工多視角檢查，不新增付費模型需求。",
    "extraSource": "https://github.com/EL4CTEO/blender-skills/compare/fb92cfb4cc5a238c22113a6a230b09f535bd0656...389f28addc79b87b28764898e38e7bf408d14b77",
    "extraSourceLabel": "本次核實的預設分支差異"
  },
  "3dicon": {
    "update": "2026-11-08：修正相機預設缺少 ACCENT 常數、在組合動作提示詞時發生 NameError 的問題，並把閃光限定為短暫光線，避免提示把機身解讀成爆散物件。例如做相機按快門的透明循環圖示，可沿用此預設；這是程式與提示詞修正，並非已證實模型每次都遵循。生成仍需原文所列的外部服務與費用，本站未呼叫。",
    "extraSource": "https://github.com/samyost1/3dicon/compare/9539d3a79ae6937205bf44f6b102af5ea15b9d49...2517b79807859b0e9034d4d384b008008addbce4",
    "extraSourceLabel": "本次核實的預設分支差異"
  },
  "diorama": {
    "update": "2026-11-08：5.7.0 明確分成經典像素、描邊卡通、像素加描邊三種外觀，並先確認模型來源要自己建、混合使用或全程取用外部模型。一般敘事場景維持乾淨舞台，只有解說用途才預設教學面板，三種外觀都能自由旋轉。例如做可互動的遊樂園，不會只因能點遊具就自動加滿教學卡。新增動作空間與姿勢邊界檢查，外部模型須逐件核對商用、修改及再散布權。需要 Three.js／瀏覽器與 AI 開發環境；外部模型可能另有費用，MIT 技能授權不涵蓋所有模型。",
    "extraSource": "https://github.com/sloemo01/diorama/compare/077f604e8d21fc734f87a0110b32f0cdbef0cae9...c790df5007be54cccb6c083f7743fae120c89cf4",
    "extraSourceLabel": "本次核實的預設分支差異"
  },
  "sprite-gen": {
    "update": "2026-11-08：4.2 會在補格後的循環旁保留未補格來源 cycle.source，讓多方向動畫即使移到別處、沒有原始影片影格，仍可對齊；搬移時必須一併帶走來源資料夾。4.3 的道具遮罩移除會一起處理模型畫出的側面、頂面與邊線，並警告遮罩側面碰到主體的影格。例如角色握住去背用色板，能減少去掉正面後殘留側邊；接觸主體仍需逐格看。這些修補是本機後製，不增加模型呼叫，沿用 ffmpeg、RIFE 等工具與運算成本。",
    "extraSource": "https://github.com/aldegad/sprite-gen/compare/6a3f4c47d7f8745853cc06fe66b252636976a442...35a27e137bfd72440cc856b080913c66f69c772e",
    "extraSourceLabel": "本次核實的預設分支差異"
  }
};
export function applyNovember8Updates(articles){for(const a of articles)if(updates[a.slug]){const u=updates[a.slug];Object.assign(a,{...u,update:(a.update?a.update+"\n\n":"")+u.update,updated:"2026-11-08"});}}
