export const newArticles = [
  {
    "slug": "rossark-motion",
    "repo": "rossark0/rossark-motion-skill",
    "name": "Rossark Motion Skill",
    "category": "影像與影片",
    "kind": "角色與場景動畫 Skill",
    "published": "2026-11-09",
    "title": "讓插畫角色會眨眼、踢球，也有自然的小動作",
    "short": "用程式編排角色與場景動畫",
    "dek": "把向量角色拆成可控制的部件，用共同時間軸安排視線、呼吸、肢體與場景動作，延伸成 App 裡的小動畫。",
    "intro": "靜態吉祥物動起來，難處常是所有部件一起僵硬移動。這個技能教 AI 把角色、鏡頭與場景分層，讓眼睛看向目標、頭髮稍晚跟上、主要動作之間仍保留呼吸與眨眼。",
    "process": "先拆出頭、身體、四肢與五官，建立共用時鐘和連續動作曲線；再分配主動作、跟隨動作與小幅待機動作。提供 React Native 的 Reanimated／react-native-svg 引擎與 SwiftUI TimelineView／Canvas 範本，也有參考影片量測工具，最後以關鍵影格和循環檢查修正。",
    "example": "替兒童學習 App 做吉祥物獎勵：小男孩落地後踢球，再轉向使用者揮手；眼睛跟著球走，頭髮和衣服比身體稍晚停下。保留能修改動作時間與角色配色的程式，方便延伸下一個獎勵場景。",
    "fit": "適合 App 設計工程師、插畫與動效設計師，以及需要品牌吉祥物、引導頁、空狀態或獎勵動畫的小團隊。需要有人能調整程式和觀看動作。",
    "requirements": "需要能修改程式的 AI 助手和既有 App 開發環境。React Native 路線用 Reanimated 與 react-native-svg；SwiftUI 路線需 Apple 開發工具。作者離線示例明列 macOS 14+、Swift 編譯器與 ffmpeg；影片量測使用 Python 與 ffmpeg。Web 有方法對照，未附同等完整的獨立範本。",
    "costs": "程式、文件與本次作者示例依 MIT 保存聲明。沒有必要的付費圖片或影片生成 API；AI 助手用量、裝置與開發工具仍有成本。渲染速度取決於硬體與場景複雜度。",
    "outputs": "可修改的角色／場景動畫程式、React Native 或 SwiftUI 動畫部件；作者示例另有離線影片與 GIF 渲染流程。",
    "caveat": "2026-11-09 首次收錄，並非今日發布；儲存庫和目前提交於 10-22 已存在。掃描時 753 星。不是任意 SVG 自動轉完的工具，也不保證所有裝置 60 fps。本站未執行候選程式或驗證 Windows 相容性；主圖為作者以程式繪製並動畫的示例。",
    "image": "rossark-reveal.gif",
    "imageAlt": "rossark0 原作者示例：男孩降落、踢球與揮手，以程式繪製並動畫，非本站實測。",
    "source": "https://github.com/rossark0/rossark-motion-skill/blob/9b20964e32f07f8ac7e2948cd175746fa4a7712f/README.md",
    "skill": "https://github.com/rossark0/rossark-motion-skill/blob/9b20964e32f07f8ac7e2948cd175746fa4a7712f/SKILL.md",
    "authorExample": "https://github.com/rossark0/rossark-motion-skill/blob/9b20964e32f07f8ac7e2948cd175746fa4a7712f/demo/RevealScene.swift"
  }
];
