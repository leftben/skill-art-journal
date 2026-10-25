# Skill 美術誌

以繁體中文介紹美術、設計、遊戲與影片相關 AI Skills。每個收錄項目有獨立文章網址，說明用途、需求範例、工具條件、成本與原作者來源。Skill 合集清楚標示為合集。

- 網站：https://leftben.github.io/skill-art-journal/
- 本期：2026-10-25，共 34 篇
- 功能：每日五篇精選輪播、公開選文公式、每篇附圖、整個文章區塊可點擊、原作者圖片優先、用途篩選、搜尋、收藏量／增長排序、需求範例複製、相關文章、RSS、sitemap

## 本機預覽

需要 Node 22+；沒有 npm 依賴。

```sh
npm run build
npm run check
npm run dev
```

開啟 http://127.0.0.1:4178/skill-art-journal/ 。全部文章由建置時產生，沒有 JavaScript 仍可閱讀。部署於 GitHub Pages 的 `main` 分支 `/docs` 目錄。

## 維護文章

- `content/articles.mjs`：每篇文章的繁體中文內容與圖片來源。
- `content/home.mjs`：首頁每日精選與文章索引的版面。
- `content/featured.mjs`：每日精選的固定評分、資格與主題限制。
- `content/featured-history.json`：最近 30 天的入選紀錄，建置時自動按日期更新；需與成品一起提交。
- `content/illustrations.mjs`：每篇文章的三段功能流程與圖說；新增文章時需一併補齊。
- `scripts/illustrate.mjs`：繪製本站原創 SVG 功能插圖，建置時自動執行。
- `content/snapshot.json`：原始 GitHub 星數快照，含各項觀察時間。
- `public/`：共用樣式、互動與作者示例圖片。
- `scripts/build.mjs`：產生 `docs/` 中所有獨立靜態頁。
- `docs/`：已建置成品，可直接部署。

修改內容後執行 build 與 check，將原始內容和更新後的 docs 一起提交。網站核對日期自動讀取 snapshot.date，篇數依內容計算。文章的 published 是穩定收錄時間，updated 只在實質改寫時設定；舊文章預設保留 2026-10-20 的首次發布時間，RSS 不會因刷新星數而重新發布全部文章。新增項目必須同時補齊 snapshot 來源資料；沒有前次快照的項目將 delta 設為 null。

## 每日發布

既有 Codex 自動化「每日 GitHub 美術 Skill 掃描與網站更新」每天台北時間 08:30 執行，使用同一個公開儲存庫及 main 分支 /docs 發布。這個流程使用本機 checkout 與現有 GitHub 憑證；本機排程執行時需電腦與 Codex 開啟。

1. 先讀自動化 memory 與最近 baseline，檢查工作狀態並整合遠端變更，勿覆蓋其他工作。
2. 以 GitHub 第一方文件與真正的 SKILL.md 查證新候選，區分首次發現與新發布。每個新收錄項目新增獨立完整文章，按 repo / slug 去重；舊項目有實質變更才更新原文。
3. 把當日完整 baseline 放進 content/snapshot.json；在 articles.mjs 中加入文章（可依日期分檔匯入），新收錄置前，填入 published，實質更新填 updated。補齊 illustrations.mjs 的三段功能圖及必要繪圖函式。
4. 優先使用作者真實成果並核對授權、標示來源與保存聲明。沒有可再利用的原作時，用標示清楚的本站功能示意圖，同時用 authorExample 連到作者實例。Pixel Path 圖片另有條款，不能因程式 MIT 就當作圖片 MIT。
5. 執行 npm run build 與 npm run check；build 會依當日 snapshot 自動選五篇、產生 docs/featured.json 與 selection.html，更新入選歷史。核對新文章、圖片、首頁輪播、首頁索引、RSS 與 sitemap；有版面變動時檢查桌機、平板與手機。提交相關來源、content/featured-history.json 及 docs，推送 origin main。
6. 確認對應 commit 的 GitHub Pages 部署成功，並檢查公開首頁、新文章及圖片。將 baseline 路徑、篇數、commit、部署結果寫回 memory。部署失敗須如實回報；沒有新候選就更新已核實資料，不湊文章。

每日網站新增與發布已獲使用者授權。不因此安裝 Skills、執行候選程式或呼叫付費生圖服務。排程本身由 Codex 管理，這個儲存庫不含獨立定時爬蟲。

## 每日五篇精選

公式版本 1.0：`30V + 25A + 20G + 15F + 10P − min(36, 12E)`。V/A/G/F/P 都在 0–1。

- V 原作展示：作者配圖 1，本站功能圖 0.45；不是美術品質評分。
- A 創作相關性：插畫／遊戲／品牌／3D 為 1，影片 0.9，網頁 0.8；工具目錄不參選。
- G 增長：`clamp((delta / 比較間隔天數) / (前次星數 + 200) / 0.05, 0, 1)`；缺少有效比較或 delta≤0 時為 0。
- F 新鮮度：`2^(-距收錄或實質更新天數/7)`；更新星數不刷新這個日期。
- P 人氣：`min(1, log10(stars+1)/5)`。
- E 曝光：前七個日曆日入選次數；同日多次重建只計一次。

先預留當日新收錄中最高分的一篇（若有），再依分數補到三種主題，接著填滿五篇；同類最多兩篇、同 repo 不重複，slug 為固定同分排序。最後按分數安排播放順序。排除封存、停用與不完整文章；不足五篇或三類時建置報錯，不捏造內容。所有日期依 snapshot.date，不取訪客裝置日期、不隨機選文。同日重建結果固定；過去 30 天紀錄保存在 source control，舊於紀錄的 snapshot 不能覆蓋新紀錄。

首頁提供完整文章連結、作品圖和用途摘要；每八秒切換，支援前後篇、五個選擇按鈕及播放／暫停。聚焦、滑鼠進入或手動切換後停止，明確按播放才繼續；離開畫面或背景分頁暫停。減少動態偏好預設不自動播放。未啟用 JavaScript 時顯示第一篇及全部五篇的文字連結。選文規則公開於 selection.html，完整當日計分在 featured.json。未接入點擊追蹤，這些分數衡量選文條件，尚未以實際點擊率驗證。

配圖優先使用已核對來源與授權的原作者圖片（articles.mjs 的 image/imageAlt 與 assetSources），目錄和內頁主圖共用此選擇。沒有可用原作時才使用本站功能示意圖；有原作時功能圖移至正文補充。每篇仍需提供功能圖資料，建置檢查會驗證原作優先與完整配圖。

若需重新下載作者示例與授權全文，可執行 `node scripts/prepare-assets.mjs`。所有示例依公開專案的 MIT 授權保留原始聲明。原始圖像來源列於 `content/articles.mjs`，並顯示在網站「圖片與來源」頁。

## 編輯原則

文章是原創摘要，沒有執行被介紹的專案；需求範例是編輯建議。每篇的功能插圖由本站繪製，說明用途而非專案實測結果；原作者示例另行標示。收藏量不是品質評分，合集星數不是子技能的獨立人氣。已停用或遷移的來源會註明目前入口。

## 授權

本站原創程式與編輯文字以 MIT 發布，見 LICENSE。第三方圖片保有各自著作權，原始 MIT 聲明保存在 public/assets/licenses/ 與 docs/assets/licenses/。
