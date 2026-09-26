# MY BUILDS — 個人組裝電腦作品集

響應式靜態網站，用來展示自行組裝、調校與使用的電腦。

## 本機預覽

```bash
python3 -m http.server 38471 --bind 0.0.0.0
```

## 修改主機資料

所有主機資料集中於：

```text
assets/js/data.js
```

- `BUILDS` 陣列中的每個物件代表一台主機。
- 儲存裝置使用 `drives` 陣列，可加入任意數量的 SSD、HDD 或 RAID，例如：

```js
drives: [
  { type: 'SSD 1', model: 'Samsung 990 PRO 4 TB' },
  { type: 'SSD 2', model: 'Samsung 990 PRO 2 TB' },
  { type: 'HDD / RAID', model: '4 × 8 TB HDD · RAID 5' }
]
```

- `drives` 為空陣列或省略時，不顯示儲存裝置欄位；`motherboard`、`os` 空白或省略時也不顯示。
- 首頁與詳細頁上方會同步列出所有存在的儲存裝置、主機板與作業系統。
- 首頁數量與卡片會自動依陣列內容產生。
- 1 台主機使用寬幅版型；2 台以上在 Desktop 使用雙欄並自然增加列數；Mobile 一律單欄。
- 每個詳細頁的 `<body data-build="...">` 必須對應資料物件的 `id`。

## 電腦配置版本紀錄

每台電腦可在 `versions` 陣列中記錄不同月份的完整配置快照。日期格式為 `YYYY-MM`，首頁卡片會顯示最新已生效版本；詳細頁右上角選單可切換到其他版本。未來預定版本可加上 `status: 'planned'`，選單會標示「預計」，且不會取代目前配置。每個版本的 `configuration` 都要包含該時間點的完整規格，而不只是列出變更零件。

```js
versions: [
  {
    id: '2025-01',
    date: '2025-01',
    label: '初始組裝',
    summary: '初次組裝完成',
    configuration: {
      cpu: '處理器型號',
      gpu: '顯示卡型號',
      ram: '記憶體規格',
      drives: [],
      specs: {}
    }
  },
  {
    id: '2025-05',
    date: '2025-05',
    label: '顯示卡升級',
    changeLabel: 'RTX 3090 → RTX 5070 Ti',
    summary: '顯示卡由舊型號升級為新型號',
    configuration: {
      cpu: '處理器型號',
      gpu: '升級後顯示卡型號',
      ram: '記憶體規格',
      drives: [],
      specs: {}
    }
  }
]
```

選單以「年月 · 零件型號簡寫」顯示，例如「2025 年 5 月 · RTX 3090 → RTX 5070 Ti」；請用 `changeLabel` 提供簡短的更換項目與型號。`summary` 則用於詳細頁說明。若未提供 `changeLabel`，選單會退回使用 `label`。目前資料會自動轉成一筆「目前配置」基準版本，日期保持未設定；收到實際版本更新表後，將資料依時間填入 `versions`。版本選單支援 `?version=<版本 id>` 網址參數，可直接連到指定版本。

## 加入正式照片

建議將圖片放在：

```text
assets/images/<build-id>/
```

目前首頁主機圖與詳細頁零件圖使用版型佔位區。收到正式照片後，可將佔位元素替換為 `<img>`，不需更動主要版面結構。

## 專案特性

- 純 HTML / CSS / JavaScript
- 不需建置工具或後端
- 支援 Desktop、Mobile、滑鼠與觸控
- 零件照片 Carousel 支援拖曳、觸控滑動與按鈕控制
- 支援 `prefers-reduced-motion`
