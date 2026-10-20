# Skill 美術誌

以繁體中文介紹美術、設計、遊戲與影片相關 AI Skills。每個收錄項目有獨立文章網址，說明用途、需求範例、工具條件、成本與原作者來源。Skill 合集清楚標示為合集。

- 網站：https://leftben.github.io/skill-art-journal/
- 本期：2026-10-20，共 23 篇
- 功能：五種作品樣本切換、用途篩選、搜尋、收藏量／增長排序、需求範例複製、相關文章、RSS、sitemap

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
- `content/home.mjs`：首頁樣本夾、作品選讀與文章索引的版面。
- `content/snapshot.json`：原始 GitHub 星數快照，含各項觀察時間。
- `public/`：共用樣式、互動與作者示例圖片。
- `scripts/build.mjs`：產生 `docs/` 中所有獨立靜態頁。
- `docs/`：已建置成品，可直接部署。

修改內容後執行 build 與 check，將原始內容和更新後的 docs 一起提交。日期、網站網址與 RSS 發佈時間目前在 build.mjs 中集中設定。新增項目必須同時補齊 snapshot 來源資料；沒有前次快照的項目將 delta 設為 null。

若需重新下載作者示例與授權全文，可執行 `node scripts/prepare-assets.mjs`。所有示例依公開專案的 MIT 授權保留原始聲明。原始圖像來源列於 `content/articles.mjs`，並顯示在網站「圖片與來源」頁。

## 編輯原則

文章是原創摘要，沒有執行被介紹的專案；需求範例是編輯建議。示例圖來自原作者，沒有冒稱本站試做。收藏量不是品質評分，合集星數不是子技能的獨立人氣。已停用或遷移的來源會註明目前入口。

## 授權

本站原創程式與編輯文字以 MIT 發布，見 LICENSE。第三方圖片保有各自著作權，原始 MIT 聲明保存在 public/assets/licenses/ 與 docs/assets/licenses/。
