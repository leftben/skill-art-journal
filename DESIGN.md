# 視覺與驗收紀錄

使用者方向：**低調、有質感**。網站採一份美術選刊的閱讀方式，主題是 GitHub Skills 的實際用途與作者作品。

Taste Skill 方向：The page is the object。最後方向 seed 700943447；依使用者要求保留既有結構，指定灰白紙色、深灰文字、墨綠操作色，標題用 Noto Serif TC，正文用 Noto Sans TC。最初 contact-sheet 需要約 24 幀可用圖片，本期只有 6 張已核對的作者示例，因此改用適合文字與插圖的選刊形式；後續依使用者要求收斂配色和字重。沒有使用題材無關的圖庫照片。

Idea：每次掃描找到的技能與原作者作品，成為一本可按用途查找、逐篇閱讀的美術選刊。

Live thing：使用用途分類、關鍵字與收藏量排序找到文章，網址可保留篩選條件；文章可複製需求範例。

## 最後檢視

ROUND 3

Seen in one second: 灰白版面上的宋體刊名與原作者插畫。

Idea (one sentence): 把 GitHub 美術工具掃描變成有作品、有來源、有使用條件的繁體中文選刊。

Live thing: 分類、搜尋、排序與文章範例複製。

Layout words by section: hero=選刊刊頭 / cover=主圖與兩則側讀 / showcase=作品對照 / catalogue=雙欄索引 / about=編輯說明 / footer=來源與訂閱。

Scores: design 7.6 · usability 8.0 · creativity 7.0 · content 8.0 → overall 7.64。

Caps applied: 依使用者「低調」要求，不為達成動畫數量加入大量進場效果；保留細微互動回饋與 GIF 作者動畫。檢查時明確允許 still-page。沒有適合本期的第一方影片，因此 no-footage 警告接受；未放入不相關影片。

Top three problems fixed:

1. 最初高彩度底色與過重刊頭，與使用者要求不符；已改灰白、深灰與墨綠，宋體標題降低字重與尺寸。
2. 目錄原正文只有 14px；已提高至 16px、行高 1.75，桌機與手機都可讀。
3. 手機的圖說容易被誤讀成下一節標籤；圖說移至作品上方，維持作品歸屬與段落間距。

目前限制：部分工具沒有可核對的可用示例圖，目錄以名稱縮寫呈現；未把自製示意圖冒稱作者結果。圖片展示是作者示例，沒有執行被介紹的專案驗證生成品質。

## 驗收

- `npm run build`：23 篇獨立文章、首頁、來源頁、404、RSS、sitemap。
- `npm run check`：26 個 HTML 頁面，所有本機連結、圖片與授權檔存在；每頁一個 h1、正確中文語言標記。
- 首頁 Taste inspector：1440、768、390px，0 FAIL；接受 no-footage 警告與記錄的 still-page 例外。所有最終截圖已逐張檢視。
- 瀏覽器實際操作：像素搜尋得到 3 篇；3D 分類得到 3 篇；無結果時提供重設；依收藏量排序首篇為 Anthropic；文章連結與需求複製按鈕正常。
- 六張作者示例圖存於本專案，五個來源專案的 MIT 授權全文已保留；網站「圖片與來源」可查看。

圖片來源與原作者：MengTo/Skills（兩張）、Gamezxz/pixel-art-studio、wheresryan22/anatomy、cathrynlavery/diagram-design、kaankiziltug/logo-design-skill。原圖網址集中在 content/articles.mjs 的 assetSources；使用位置為首頁和各自文章，圖旁與來源頁均註明作者。
