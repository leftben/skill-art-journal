# 閱讀排版紀錄

使用者最新回饋：版面有點亂、閱讀性差。此次優先處理視線順序與文字可讀性，保留低調色彩、字標、作品樣本夾。沿用 page-is-the-object / seed1618859211，屬於既有方向的可讀性修正，沒有重抽方向或新增圖片。

ROUND 1
Seen in one second：美術工具選刊，旁邊可切換作者作品，下方直接進入文章索引。
Idea (one sentence)：保留作品樣本夾作為識別，其他區域回到清楚的閱讀順序。
Live thing：五種作品切換、用途篩選、搜尋與排序。
Layout words by section：hero=樣本跨頁 / catalogue=單欄閱讀清單與用途導航 / about=編輯說明 / article=定寬單欄。
Scores：design 6.5 · usability 8.5 · creativity 7 · content 8 → overall 7.35。
Caps applied：保留文字索引的留白、低調動態與少量圖片，以符合使用者此次閱讀性要求；不為提高展示型網站評分加入更多動態或圖片。自評低於7.5的限制在於視覺變化少，這是本次刻意接受的取捨。
Top three problems (most visible first)：
1. 先前側索引與主導覽重複，加上作品區錯落和重複展示，讓讀者不停換焦點。移除頁側索引、第二組作品區與分散的小段說明，保留一個樣本夾。
2. 先前目錄的標題和摘要分處左右兩欄。每篇改成分類、標題、摘要、資料依序向下讀；摘要18px、行高1.9，長度限制60ch，統一對齊並取消懸停位移。
3. 先前文章內頁的導覽與正文分欄，標題、主圖、正文寬度落差大。正文固定最大760px，目錄回到正文上方，正文18px、行高2；來源時間改成人讀得懂的台北日期時間。

## 驗收

- 23篇文章、26個HTML，所有本機連結和資產通過檢查；JavaScript語法和Taste lint通過。
- 首頁與代表文章在1440、768、390px截圖檢查；手機的分類按鈕換行，沒有橫向切斷；文章標題維持兩行以內。
- 瀏覽器實際驗證：像素搜尋3/23、3D分類3/23、收藏量排序首篇為Anthropic。
- 最終首頁0 FAIL、4 WARN（含上述明確例外）；代表文章0 FAIL、1 WARN。首頁九張、文章六張截圖均已逐張檢視。文章需求按鈕實際顯示「已複製」。
- 功能性分類/種類與返回連結採eyebrow例外；still-page與few-pictures延續低調閱讀要求。
- 首頁focal-point例外：64px主標與作品已形成清楚主從，使用者要求降低雜亂，不擴大到佔滿首屏。
- 首頁empty-screens例外：檢查器把文字目錄的空白判為展示不足；此處是23篇文章的閱讀與查閱索引，不增加裝飾填滿。
- no-footage：沒有適合的第一方影片。name-only-title：主標下方18px文字明確說明AI Skill選刊。long-pin：固定分類提供長目錄查閱功能。off-centre：作品樣本內框與文字欄寬不同，外層頁面內距一致。

原作者七張圖片與五個專案MIT授權均保留；本次未新增第三方素材。原始圖片、著作與授權可在網站「圖片與來源」查閱。既有23篇文章文字完整保留。

## 每篇文章的功能插圖 — 2026-10-20

使用者要求每篇文搭配插圖，方便快速理解功能。沿用既有低調方向 page-is-the-object / seed1618859211，未更動字標、導覽或文章閱讀層級。本次加入23張本站原創SVG功能示意圖，對應不同的輸入、處理方式與成果；首頁每篇有縮圖、內頁主圖附中文解說與放大連結。原作者範例保留於內文，所有圖像清楚分辨來源。沒有新增第三方素材或AI生成成果的宣稱。

ROUND 2
Seen in one second：文章清單旁有整齊的功能圖解，內頁可看到完整三段流程。
Idea (one sentence)：把每個Skill的工作方法，畫成可掃讀的功能插圖。
Live thing：搜尋與分類後仍保留正確的文章配圖；內頁可開啟完整SVG放大查看。
Layout words by section：hero=既有樣本夾 / catalogue=文字清單與整齊縮圖 / article=定寬單欄與功能主圖。
Scores：design6.5 · usability8.5 · creativity7 · content8.5 → overall7.4。
Caps applied：保留上一輪針對閱讀性採用的still-page、focal-point與empty-screens例外，不為展示評分加大標語或插入無關圖片。圖片是功能圖解，非攝影；優先符合使用者快速理解的目的。
Top three problems fixed：
1. 原先只有部分文章有原作者圖片，其餘純文字。新增23張各自對應的功能插圖，建置檢查強制每篇都有主圖、縮圖與來源標示。
2. 像素示意第一版混用了人物與向量角色，容易被誤認為不同角色。改成同一個像素角色的逐格變化與精靈圖，並在瀏覽器確認。
3. 縮圖若擠壓手機正文會降低可讀性。桌機用固定右側縮圖；平板與手機將插圖放在文章文字上方，內頁正文仍維持18px。

驗收：23張插圖聯絡表逐張校對；首頁1440/768/390px 0FAIL3WARN，Remotion代表文章相同三尺寸0FAIL1WARN，所有列出的截圖均已檢視。警告no-footage/name-only-title/long-pin延續前述閱讀性解釋。像素圖修正後另用瀏覽器檢視；23個縮圖、搜尋像素3/23及篩後3個配圖確認正確。26HTML本機資產與連結通過，Taste lint與JavaScript語法通過。新增SVG均為可讀取的本機檔案，不依賴外部圖片服務；原作者七張圖片和五份MIT授權保留。

## 原作者圖片優先與整塊文章連結 — 2026-10-20

使用者要求文章分界清楚、整個區塊可點進單篇，並補充圖片優先使用原作。沿用既有版面與方向；使用者明確要求的分界優先於Taste預設不畫外框的風格規則。

ROUND 3（局部修正）
Seen in one second：各篇附圖文章有清楚的獨立邊界，可點擊的範圍與白色區塊一致。
Idea (one sentence)：讓原作者作品先說明工具，讓整個文章區塊成為單一閱讀入口。
Live thing：完整原生連結，留白、摘要、圖片均能開啟文章；鍵盤Enter亦可使用。
Layout words by section：hero=原樣本夾 / catalogue=有邊界的整列文章入口 / article=原作主圖與單欄文字。
Scores：design7 · usability8.5 · creativity7 · content8.5 → overall7.6。
Caps applied：接受使用者指定的outlined-box例外；不為檢查器去掉功能性分界。其餘still-page/focal-point/empty-screens等沿用閱讀優先的既有例外。
Top three problems fixed：
1. 原先列與列只靠空白，點擊範圍分成標題和縮圖。每篇改成一個完整原生a元素，邊框、24px內距、滑過背景與鍵盤焦點輪廓都在同一個連結上，無巢狀連結、無JavaScript轉址。
2. 功能圖放在所有文章最前面，未優先使用原作者作品。重新核對18篇原先缺圖專案README，新增7張已核對的原作與7份MIT授權；目前12篇使用原作主圖及縮圖，11篇無可用原作的文章保留功能圖。
3. 手機舊版外層內距會形成不可點的留白。把全部內距移入連結本身，讓縮圖、文字與留白屬於同一個點擊區塊。

新增原作者圖：Taste Skill咖啡店網站、Ian Xiaohei兩個斷點配圖、Dream Loop的Vesper動畫、ComfyUI MCP操作畫面、Garden Skills視覺文章封面、Baoyu fresh風格示例、UI UX Pro Max網站畫面。來源URL與作者完整列於assetSources，MIT全文保留於assets/licenses與來源頁。總計14張作者圖片、12個作者專案授權。Dream Loop保留作者原GIF約7MB並延遲載入目錄圖片。未下載來源不明的圖片、未用其他專案的圖片冒充作品。

驗收：建置/check通過23篇、26HTML；檢查器強制確認所有文章原作優先、23個整塊連結及配圖。瀏覽器實際點擊第一篇左上留白，成功開啟MengTo，主圖為原作者gouache圖片；第二篇以Enter開啟Pixel。DOM確認23個入口、0巢狀連結。代表原作文章1440/768/390px0FAIL1WARN(no-footage)，七張截圖逐張檢視。目錄以像素搜尋的三篇代表卡片檢查三種尺寸；outlined-box是使用者明確要求而採用的例外。Taste lint0FAIL1WARN同為此功能邊框。
最終卡片三尺寸檢查：0 FAIL、2 WARN，已檢視全部六張截圖。

## 2026-10-21 — Daily publication connected

Kept the existing quiet layout, full-block article links and author-first imagery. Added Aseprite AI Artist, GSAP AI Skills and Pixel Path as three independently sourced articles, placed first in the index. The Aseprite cover is the author's original 18-frame slime GIF with MIT notice. GSAP has no relevant result image in its README; Pixel Path explicitly excludes images from its code MIT license. Both use clearly labelled editorial function diagrams and link to original examples.

Snapshot refreshed to 26 repositories. Dates and article counts derive from data; RSS keeps stable first-publication dates and sitemap uses explicit substantive update dates. Negative star deltas display as decreases. Existing Codex daily 08:30 automation now includes committing, pushing and verifying Pages deployment, with the maintenance sequence in README.

Validation: build and check pass for 26 illustrated articles and 29 HTML pages, including author-first images, full-block links, RSS dates and sitemap dates. Taste inspector on the new Aseprite article at 1440, 768 and 390: 0 FAIL, 1 WARN (no-footage). Reviewed all seven generated screenshots. The real author GIF supplies subject-specific motion; adding unrelated video would not improve this reading article. Existing reading-first exceptions remain. Desktop new-article index reviewed in browser; all three distinct thumbnails visible and Pixel Path block navigation works.

Critique: legible two-line mobile headline, stable reading column, no collisions. Single-column prose deliberately repeats familiar reading structure. Gallery rubric self-score: design 6.5 (limited real-image variety), usability 8.5, creativity 6.5, content 8.5; weighted 7.3. Preserve reading clarity rather than redesigning the established site during routine publication.
