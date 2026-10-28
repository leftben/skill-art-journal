// First discovery on October 28; repository was published earlier.
export const newArticles = [
  {
    "slug": "pixel2motion",
    "repo": "nolangz/pixel2motion",
    "name": "Pixel2Motion",
    "category": "品牌與設計",
    "kind": "單一 Skill",
    "published": "2026-10-28T00:30:46.625Z",
    "title": "讓一張靜態標誌，變成有節奏的品牌開場",
    "short": "點陣標誌變向量動畫",
    "dek": "先把標誌拆成乾淨的向量部件，再安排出場、停頓與收尾，交付可重播、可調速的網頁動畫。",
    "image": "pixel2motion-horizon.gif",
    "imageAlt": "Nolan Lai 在 Pixel2Motion README 提供的 Horizon 標誌動畫；非本站實測",
    "intro": "手上只有一張 PNG 標誌，也能把圖形、文字與小圓點分別安排動作。Pixel2Motion 先協助 agent 重建平滑、可修改的 SVG，再讓各部件按品牌個性登場，做出網站開場或載入動畫。",
    "process": "先確認標誌用途和三個個性詞，例如安靜、精準、輕快，再檢查原圖輪廓，優先用圓形、少量曲線等簡單結構重建。每次把向量疊回原圖比對，確認平滑後才安排動態。交付網頁包含重播、慢速和速度控制，也會檢查關鍵影格、交叉筆畫是否停頓或跳出，以及結尾是否落回原標誌；偏好減少動態的使用者看到靜態版本。這些是作者的流程，本次未執行候選。配圖為作者的 Horizon 範例。",
    "example": "把我提供的咖啡工作室 PNG 標誌，做成一點五秒的網站開場。先保持原本輪廓、字距與顏色，讓圓形圖案先出現，再依序帶出字樣；感覺安靜而俐落。交付可修改 SVG、動畫 CSS 和可重播的 HTML，附原圖疊合與結尾影格比較。",
    "fit": "適合品牌設計師、接網站案的工作室，以及已有合法標誌原圖、想與工程師協作做動態識別的人。也能用於按鈕懸停與載入狀態。",
    "requirements": "可寫程式並看圖的 agent、Python 3.10+、Pillow、numpy、Chrome 或 Chromium；動態影格檢查需要 Playwright 或等效的可固定時間瀏覽器截圖工具。另轉 GIF 或影片時仍需相應的擷取與編碼流程。",
    "costs": "技能採 MIT，主要製作與檢查在本機完成，沒有必需的付費生圖 API。成本主要是 agent 用量、人工檢視及反覆擬合時間。README 提到的商業服務是另一條服務路線，使用開源流程不必購買。",
    "outputs": "可修改的 logo.svg、motion.css、獨立 HTML 動畫展示、動態規格、輪廓疊合與關鍵影格檢查圖",
    "caveat": "2026-10-28 首次收錄；專案建立於 6 月 12 日，目前提交是 8 月 21 日，不是今天發布。它重建既有標誌並安排動態，不是保證一鍵完美描圖；複雜曲線、字型或低解析原圖仍需人工確認。示例是作者展示，不代表本站測試結果；原有標誌與字體的權利仍須自行確認。",
    "source": "https://github.com/nolangz/pixel2motion/blob/e9faedb28930df0da2acf17da00c80730a78cfe8/README.md",
    "skill": "https://github.com/nolangz/pixel2motion/blob/e9faedb28930df0da2acf17da00c80730a78cfe8/SKILL.md",
    "extraSource": "https://github.com/nolangz/pixel2motion/blob/e9faedb28930df0da2acf17da00c80730a78cfe8/LICENSE",
    "extraSourceLabel": "作者 MIT 授權",
    "authorExample": "https://github.com/nolangz/pixel2motion/blob/e9faedb28930df0da2acf17da00c80730a78cfe8/docs/gifs/claude-horizon.gif"
  }
];
