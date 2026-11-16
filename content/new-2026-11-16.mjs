export const newArticles = [
  {
    "slug": "pixel-asset-master",
    "repo": "424431185/pixel-asset-master-skills",
    "name": "Pixel Asset Master",
    "category": "像素與遊戲",
    "kind": "單一 Skill",
    "published": "2026-11-16",
    "title": "先訂好色盤與尺寸，把像素素材整理成遊戲圖集",
    "short": "從美術規格到像素素材圖集",
    "dek": "把角色、地形、道具與動畫放進同一份規格，逐件製作、檢查色盤，再整理成 PNG 與圖集。",
    "intro": "做出一棵好看的像素樹不難，難的是後面的草地、道具與角色還像同一款遊戲。Pixel Asset Master 把工作拆成需求、美術方向確認、固定規格、逐件製作、檢查與匯出，幫 AI 助手記住每張圖的尺寸、色盤和動作格數。它是製作流程與輔助腳本，不是保證一鍵完成整套遊戲的模型。",
    "process": "先把需求分成角色、地形、物品、介面、特效與背景，確認尺寸、平台、色盤、畫風、方向及動作。把決定寫入 design_spec.md 與 spec_lock.md；每件素材製作前重讀規格。再用腳本檢查格式與顏色、減色與整理邊緣，最後打包圖集。地形另要求以 2×2 拼接檢查接縫，避免規律噪點與明顯網格。",
    "example": "替水墨風小遊戲做一組同色系素材：先確認樹木與地形的尺寸和限色色盤，製作櫻花樹、柳樹與竹子，再補草地和泥地。樹木的搖擺各自訂格數，地形以重複拼接檢查；交付各張 PNG、動畫格與圖集資料。這是本站需求範例，非執行成果。",
    "fit": "適合獨立遊戲開發者、需要整理大量素材的像素美術工作者，以及願意分階段看圖確認的 AI 創作者。已有參考圖時，可用它整理色盤與共同規格。",
    "requirements": "作者列 Python 3.8+ 與 Pillow，另需可讀檔、寫程式和看圖的 AI 助手；要保留完整儲存庫中的模板與腳本。生圖服務依使用者選擇接入，並非所有流程都強制使用 API。",
    "costs": "儲存庫標示 MIT，沒有固定必買的像素編輯器；AI 助手額度和選用圖片供應商可能收費。純本機檢查與圖集整理不需付費生成 API。",
    "outputs": "個別 PNG、動畫影格、精靈圖集、色盤檔與含尺寸／動畫資訊的 JSON 清單；實際引擎匯入與畫面品質仍需人工確認。",
    "caveat": "2026-11-16 首次收錄，非今天發布；專案建立於 2026-05-02，本次觀察 118 星，屬小型候選而非熱門榜冠軍。README 與實際 SKILL 已核對，未執行候選。技能仍含作者電腦的 E 槽地形參考路徑，使用時需改成自己的檔案，不能假定範例存在。自動檢查不能取代角色一致性、動畫節奏及拼接的目視審核。",
    "image": "pixel-master-sakura.gif",
    "imageAlt": "Pixel Asset Master 作者提供的櫻花樹六格動畫示例；展示水墨工筆像素風，非本站生成或實測。",
    "source": "https://github.com/424431185/pixel-asset-master-skills/blob/33d891c421a9ad3608f5a09af97271388ca923af/README.md",
    "skill": "https://github.com/424431185/pixel-asset-master-skills/blob/33d891c421a9ad3608f5a09af97271388ca923af/skills/pixel-asset-master/SKILL.md",
    "authorExample": "https://github.com/424431185/pixel-asset-master-skills/blob/33d891c421a9ad3608f5a09af97271388ca923af/sakura_preview.gif",
    "extraSource": "https://github.com/424431185/pixel-asset-master-skills/blob/33d891c421a9ad3608f5a09af97271388ca923af/LICENSE",
    "extraSourceLabel": "作者 MIT 授權與著作權聲明"
  }
];
