// First discoveries on October 27; these repositories were published earlier.
export const newArticles = [
  {
    slug:'brand-identity',repo:'fatihaydost/brand-identity-skill',name:'Brand Identity',category:'品牌與設計',kind:'單一 Skill',published:'2026-10-27T00:32:17Z',
    title:'讓標誌、字體和配色，從同一個想法長出來',short:'並排比較三套完整品牌',
    dek:'先比較整套視覺方向，選定後再交付品牌規範、向量標誌與可交給工程師的設計變數。',
    image:'brand-identity-fernhill.jpg',imageAlt:'Fatih Aydost 提供的虛構書店 Fernhill Books 品牌方向比較圖；非本站實測',
    intro:'品牌常見的難題，是 Logo 很好看，字體和顏色卻像來自不同地方。Brand Identity 先找一個能解釋整套視覺的想法，再一起設計標誌、字體與色盤，讓每一個選擇有共同理由。',
    process:'預設提供三套方向，也可指定一至四套；用同一份真實文案並排比較，檢查小尺寸標誌、色彩對比、色覺模擬、字形涵蓋與字體授權。你選定後才製作品牌規範 PDF、SVG／PNG 標誌和 CSS、SCSS、Tailwind、DTCG 設計變數。可以保留原標誌只換字體與配色，也能在自己的網站上試套。配圖是作者的虛構書店比較案例。',
    example:'替台南獨立書店做三套品牌，每套用同一個想法決定標誌、繁中文字體與兩種主色。先並排比較，檢查中文字形與小尺寸辨識度；等我選定後，再做網站和名片可共用的規範與向量檔。',
    fit:'適合獨立書店、咖啡品牌、小型工作室，以及需要把品牌規則交給前端工程師的設計師。已有品牌但只想更新部分元素，也能把原有部分設為保留。',
    requirements:'可寫程式並看圖的 agent、Python 3.10+、Chromium 系瀏覽器與 Google Fonts 網路存取；建議用 uv，首次會下載所需 Python 套件。作者主要完整測試 Claude Code，其他平台能讀取 Skill 不等於流程已完整驗證。',
    costs:'MIT 技能，沒有必需的付費生圖 API；主要成本是 agent 用量、設定與反覆設計。作者六次測試中，到比較板約四十回合、約九十萬 billed-input-equivalent tokens，是作者量測，不能當固定報價。商用字體如另選付費款，仍須自行取得授權。',
    outputs:'品牌方向比較板、品牌規範 PDF、SVG／PNG 標誌、字體展示與設計 tokens',
    caveat:'2026-10-27 首次收錄，專案建立於 10 月 4 日，目前提交為 10 月 10 日；不是今天推出。量測可找出對比、字形或檔案問題，不能保證美感、轉換率或商標可註冊。繁中品牌仍要逐項檢查字形。本次沒有安裝或執行候選。',
    source:'https://github.com/fatihaydost/brand-identity-skill/blob/532742d7477dba3b744433adf92845642953dc28/README.md',
    skill:'https://github.com/fatihaydost/brand-identity-skill/blob/532742d7477dba3b744433adf92845642953dc28/skills/brand-identity/SKILL.md',
    extraSource:'https://github.com/fatihaydost/brand-identity-skill/blob/532742d7477dba3b744433adf92845642953dc28/TRADEMARKS.md',extraSourceLabel:'示例品牌與商標聲明',
    authorExample:'https://github.com/fatihaydost/brand-identity-skill/blob/532742d7477dba3b744433adf92845642953dc28/docs/images/fernhill-board.jpg'
  },
  {
    slug:'diorama',repo:'sloemo01/diorama',name:'Diorama',category:'像素與遊戲',kind:'單一 Skill',published:'2026-10-27T00:32:17Z',
    title:'把一個小故事，放進會動的微縮舞台',short:'像素風 3D 小舞台',
    dek:'固定鏡頭、玩具般的角色與清楚的動作，讓泳池、夜市或小廚房形成自己的循環。',
    image:'diorama-pool.gif',imageAlt:'Nehal Kanak 隨 Diorama README 提供的泳池微縮場景動畫；非本站生成',
    intro:'有些故事只需要一座小舞台：泳客跳水、排隊買餐、船隻靠岸。Diorama 讓 agent 用 Three.js 建立切片式場景，鏡頭固定在四分之三角度，搭配像素格線、有限色盤、抖色和輪廓線，呈現玩具般的世界。',
    process:'先研究場景與動作，再找能合法使用的素材，安排角色、道具、路徑和先後事件。工具包有水面、水花、尾流、角色關節和動作等模組；每個畫面可固定在指定時間，並以逐角色影格檢查凍結、瞬移、出框或空畫面。這些是作者提供的製作和檢查流程，本次沒有實跑。主圖是作者 README 的泳池動畫。',
    example:'做一座夜市微縮舞台：攤販煎蛋、客人排隊取餐、外送員騎車離開。用原創角色，固定鏡頭，二十秒循環；在五個時間點檢查每個角色的動作和道具位置，保留可修改的網頁原始檔。',
    fit:'適合互動作品集、遊戲概念展示、小型視覺敘事，以及有網頁開發支援、想做場景動畫的美術工作者。',
    requirements:'Node、three、esbuild、playwright-core、Chromium，以及可寫程式並看圖的 agent；部分檢查需 Python，若研究影片可能另用 ffmpeg／yt-dlp。需要能跑 WebGL 的電腦與瀏覽器。',
    costs:'本機 Three.js 製作沒有必需的生圖 API，成本主要是 agent 用量、製作時間與硬體。另選 Meshy／Tripo 生成素材才有相應服務費，並非必要。外部模型、動作與字體須依各自授權使用，不因技能是 MIT 就全部免費。',
    outputs:'可修改的 Three.js 場景與動畫程式、瀏覽器展示、檢查影格；錄製影片需依輸出流程處理',
    caveat:'2026-10-27 首次收錄，專案建立與目前提交都在 10 月 24 日，48 星仍屬小眾候選。像素風由 3D 場景渲染而成，不是逐格手繪精靈圖；也不是可自由轉鏡頭的完整遊戲。作者案例不代表本站實測效果，第三方素材與知名角色權利需另外核對。',
    source:'https://github.com/sloemo01/diorama/blob/37739e804f67f4bcb445da635e6bedb060c704c6/README.md',
    skill:'https://github.com/sloemo01/diorama/blob/37739e804f67f4bcb445da635e6bedb060c704c6/SKILL.md',
    extraSource:'https://github.com/sloemo01/diorama/blob/37739e804f67f4bcb445da635e6bedb060c704c6/LICENSE',extraSourceLabel:'作者 MIT 授權',
    authorExample:'https://github.com/sloemo01/diorama/blob/37739e804f67f4bcb445da635e6bedb060c704c6/media/pool.gif'
  }
];
