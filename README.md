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
