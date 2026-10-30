// First discovery, not a release announcement.
export const newArticles = [
  {
    "slug": "blender-production-skills",
    "repo": "XliuXjianX/blender-production-skills",
    "name": "Blender Production Skills",
    "category": "3D 與材質",
    "kind": "15 個 Skill 的製作套件",
    "published": "2026-10-30T00:29:10.142Z",
    "title": "照參考圖做 Blender 場景，先把空間與結構做對",
    "short": "參考圖拆成可修改的 Blender 場景",
    "dek": "從鏡頭、白模、原生建模到材質燈光，用多視角與線框逐階段檢查；也有卡通分段陰影與描邊路線。",
    "intro": "一張漂亮參考圖，可能藏著鏡頭透視、通道深度、樓梯方向與材質的許多判斷。這套 Skills 把 AI 做 Blender 場景的過程拆成明確步驟：先釐清空間和白模，再處理結構、材質、燈光，最後用多個視角與參考圖比對。重點是留下能繼續修改的 Blender 元件。",
    "process": "套件共有 15 份 SKILL.md，由製作調度入口選擇需要的專門技能。規則樓梯優先用 Array，管線用 Curve，門窗開孔用 Boolean；散布或程序化控制確有優勢才選 Geometry Nodes。參考重建要求先看無材質白模、正側頂視圖及空間連接，再進入正式結構與表面。另有 Eevee 分段卡通陰影、跟隨變形的外殼描邊，以及獨立的 Cycles 路線。每階段的技術檢查與畫面確認，讓錯誤有機會在上材質前被發現。",
    "example": "用我有權使用的積水地鐵通道參考圖，重建一個可繼續修改的 Blender 場景。先說明鏡頭和空間推測，做出通道深度、樓梯方向與門洞的白模；提供正、側、頂視圖讓我確認，再加入磁磚、濕痕和燈光。重複結構保留 Array 或曲線控制，最後附線框、參考疊圖與仍不確定的細節。",
    "fit": "適合已有 Blender 基礎的場景美術、獨立遊戲開發者、技術美術，以及想把建築或氛圍參考做成可調整場景的人。也適合檢查 AI 是否只是堆出固定鏡頭看似合理、換角度就不成立的模型。",
    "requirements": "作者預設 Blender 5.2 LTS、官方 Blender MCP，以及能讀圖並操作 Blender 的 Codex 環境；Python 用於建立元件、配置與檢查。這是作者文件的目標環境，本站未實測版本相容性。Blueish 等本地資產庫只是使用者已持有時的可選來源，套件不附第三方原始資產。",
    "costs": "Blender 本身免費，主要成本是 agent 額度、渲染硬體與反覆檢查時間。參考重建可嘗試用圖像生成製作深度或白模假設，工具不可用時可跳過；不是必須付費生圖的流程。若選用第三方資產或生成工具，另依其授權與方案計費。儲存庫沒有明確開源授權，使用或再散布前須向作者確認。",
    "outputs": "可修改的 Blender 場景與原生元件、階段白模／材質渲染、多視角與線框證據、參考疊圖／差異圖，以及製作和檢查紀錄",
    "caveat": "2026-10-30 首次收錄；專案與本次核對的 main 提交都在 8 月 15 日，並非今天發布。這是一套有分工與確認階段的工作流程，不是一鍵照片轉模型，也不保證第一次就完成。Eevee 的 Shader to RGB 與 Cycles 功能不能直接混用。作者 README 有真實場景展示，但未找到圖片再利用授權，因此本站只連結原作，以清楚標示的功能示意圖說明流程；本站未執行候選程式。",
    "source": "https://github.com/XliuXjianX/blender-production-skills/blob/0da972636c85598bebfb3080cf7768d01b41cf99/README.md",
    "skill": "https://github.com/XliuXjianX/blender-production-skills/blob/0da972636c85598bebfb3080cf7768d01b41cf99/blender-production-router/SKILL.md",
    "extraSource": "https://github.com/XliuXjianX/blender-production-skills/blob/0da972636c85598bebfb3080cf7768d01b41cf99/blender-reference-reconstruction/SKILL.md",
    "extraSourceLabel": "參考重建與檢查階段",
    "authorExample": "https://github.com/XliuXjianX/blender-production-skills/blob/0da972636c85598bebfb3080cf7768d01b41cf99/README.md#成功案例"
  }
];
