window.BUILDS = [
  {
    id: 'ubuntu-server',
    name: 'Proxmox VE 9.1.1',
    purpose: '',
    year: '2025',
    code: 'PROXMOX–01',
    os: 'Ubuntu Server 24.04 LTS',
    cpu: 'AMD Ryzen 9 5900X',
    motherboard: 'ASUS ROG STRIX B550-F GAMING WIFI II',
    ram: '64 GB DDR4-3200（Transcend 2 × 16 GB + Kingston 2 × 16 GB）',
    gpu: 'ZOTAC GAMING GeForce RTX 5070 Ti SOLID SFF OC',
    storage: 'M.2 RAID 1 + WD Blue 250 GB SSD + 4 TB HDD',
    cooling: 'MSI 360 mm 一體式水冷（確切型號待補）',
    psu: 'FSP HYDRO PTM X PRO 1200W',
    drives: [
      { type: 'M.2 SSD / RAID 1', model: 'Micron 2400 512 GB NVMe SSD × 2' },
      { type: 'SSD', model: 'WD Blue 250 GB（型號／介面未提供）' },
      { type: 'HDD', model: 'Seagate IronWolf 4 TB' }
    ],
    href: 'ubuntu-server.html',
    parts: [],
    specs: {
      CPU: [
        ['完整型號', 'AMD Ryzen 9 5900X'],
        ['產品系列／代號', 'Ryzen 5000 Series / Vermeer'],
        ['架構', 'Zen 3'],
        ['核心／執行緒', '12 / 24'],
        ['Base Clock', '3.7 GHz'],
        ['Max Boost Clock', '最高 4.8 GHz'],
        ['L2 Cache', '6 MB'],
        ['L3 Cache', '64 MB'],
        ['Default TDP', '105 W'],
        ['製程', 'TSMC 7 nm FinFET'],
        ['插槽', 'AM4'],
        ['PCI Express', 'PCIe 4.0'],
        ['記憶體支援', 'DDR4，最高 3200 MT/s'],
        ['最高運作溫度', '90°C'],
        ['超頻', '已解鎖']
      ],
      GPU: [
        ['完整型號', 'ZOTAC GAMING GeForce RTX 5070 Ti SOLID SFF OC'],
        ['產品料號', 'ZT-B50710J3-10P'],
        ['GPU 架構', 'NVIDIA Blackwell'],
        ['CUDA 核心', '8,960'],
        ['Boost Clock', '2,482 MHz'],
        ['顯示記憶體', '16 GB GDDR7'],
        ['記憶體介面', '256-bit'],
        ['有效記憶體速度', '28 Gbps'],
        ['Total Graphics Power', '300 W'],
        ['建議系統電源', '750 W'],
        ['供電接頭', '1 × 16-pin'],
        ['介面', 'PCIe 5.0 x16'],
        ['影像輸出', '3 × DisplayPort 2.1b / 1 × HDMI 2.1b'],
        ['最大解析度', '7680 × 4320'],
        ['散熱', '三風扇'],
        ['尺寸', '304.4 × 115.8 × 41.6 mm'],
        ['插槽寬度', '2-slot'],
        ['SFF-Ready', '是']
      ],
      RAM_01: [
        ['品牌', 'Transcend JetRam'],
        ['數量', 'JM3200HLE-16G × 2'],
        ['單條容量', '16 GB'],
        ['運作規格', 'DDR4-3200 / 1.2 V'],
        ['CAS Latency', 'CL22'],
        ['電壓', '1.2 V']
      ],
      RAM_02: [
        ['品牌', 'Kingston ValueRAM'],
        ['數量', 'KVR32N22S8/16 × 2'],
        ['單條容量', '16 GB'],
        ['組織', '2G × 64-bit / 1Rx8'],
        ['IC 配置', '8 × 2G × 8-bit FBGA'],
        ['速度', 'PC4-3200'],
        ['CAS Latency', 'CL22'],
        ['JEDEC Timing', '22-22-22'],
        ['電壓', '1.2 V'],
        ['規格', '288-pin DIMM / Single-rank'],
        ['PCB 高度', '31.25 mm']
      ],
      MOTHERBOARD: [
        ['完整型號', 'ASUS ROG STRIX B550-F GAMING WIFI II'],
        ['晶片組', 'AMD B550'],
        ['CPU 插槽', 'AM4'],
        ['尺寸', 'ATX'],
        ['供電設計', '12+2 teamed power stages'],
        ['記憶體插槽', '4 × DDR4 DIMM'],
        ['最大記憶體容量', '128 GB'],
        ['Ryzen 5000 記憶體支援', 'DDR4-3200 / 最高 DDR4-4800（O.C.）'],
        ['主要顯卡插槽', '1 × PCIe 4.0 x16 SafeSlot'],
        ['其他擴充插槽', '1 × PCIe 3.0 x16（x4）/ 3 × PCIe 3.0 x1'],
        ['M.2', '2 × M.2（PCIe 4.0 x4 / PCIe 3.0 x4）'],
        ['SATA', '6 × SATA 6 Gb/s'],
        ['RAID', 'RAID 0 / 1 / 10'],
        ['有線網路', 'Intel I225-V 2.5Gb Ethernet'],
        ['無線網路', '2×2 Wi-Fi 6E（2.4 / 5 / 6 GHz）'],
        ['藍牙', 'Bluetooth 5.2'],
        ['音效', 'ROG SupremeFX S1220A 7.1-channel'],
        ['其他', 'USB 3.2 Gen 2 / ASUS OptiMem II / Aura Sync']
      ],
      STORAGE_01: [
        ['類型', 'M.2 SSD / RAID 1'],
        ['容量', '512 GB × 2'],
        ['RAID 模式', 'RAID 1'],
        ['型號', 'Micron 2400 512 GB NVMe SSD × 2']
      ],
      STORAGE_02: [
        ['品牌／系列', 'WD Blue'],
        ['容量', '250 GB']
      ],
      STORAGE_03: [
        ['類型', 'HDD'],
        ['型號', 'Seagate IronWolf 4 TB'],
        ['系列', 'IronWolf NAS HDD'],
        ['介面', 'SATA 6 Gb/s']
      ],
      COOLING: [
        ['類型', '360 mm 一體式水冷'],
        ['品牌', 'MSI'],
        ['完整型號', '待補']
      ],
      POWER: [
        ['完整型號', 'FSP HYDRO PTM X PRO 1200W'],
        ['產品料號', 'HPT3-1200M-GEN5'],
        ['額定功率', '1200 W'],
        ['效率認證', '80 PLUS Platinum'],
        ['電源規範', 'ATX 3.0 / PCIe 5.0'],
        ['模組化', '全模組化'],
        ['機身長度', '130 mm'],
        ['風扇模式', 'ECO 模式下，負載低於 30% 時停轉']
      ],
      SYSTEM: [
        ['作業系統', 'Ubuntu Server 24.04 LTS'],
        ['組裝年份', '2025']
      ]
    },
    sources: [
      'https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-9-5900x.html',
      'https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5070-family/',
      'https://rog.asus.com/motherboards/rog-strix/rog-strix-b550-f-gaming-wifi-ii-model/spec/',
      'https://www.newegg.com/zotac-gaming-geforce-rtx-5070-ti-solid-sff-oc-16gb-graphics-card-triple-fans/p/N82E16814500607',
      'https://www.newegg.com/p/3C6-018V-00HU2',
      'https://www.kingston.com/datasheets/KVR32N22S8_16.pdf'
    ]
  },
  {
    id: 'intel-i5-12400',
    name: 'Windows 11',
    purpose: '',
    code: 'WINDOWS–01',
    cpu: 'Intel Core i5-12400',
    motherboard: 'ASUS TUF GAMING B660M-PLUS WIFI D4',
    ram: '32 GB DDR4-3600（XPG SPECTRIX D50 RGB 2 × 16 GB，雙通道）',
    gpu: 'ZOTAC GAMING GeForce RTX 3060 AMP White Edition',
    psu: '650 W（型號未知）',
    os: 'Windows 11 專業版',
    drives: [
      { type: 'SSD 1', model: 'Kingston SNV2S1000G · 1,000.2 GB' },
      { type: 'SSD 2', model: 'Micron MTFDKCD512TFK · 512.1 GB' }
    ],
    display: 'Xiaomi 電腦螢幕 A24i × 2',
    href: 'intel-i5-12400.html',
    parts: [],
    specs: {
      CPU: [
        ['完整型號', 'Intel Core i5-12400'],
        ['產品系列／代號', '第 12 代 Intel Core / Alder Lake'],
        ['架構', 'Alder Lake'],
        ['核心／執行緒', '6 個效能核心 / 12 執行緒'],
        ['Base Clock', '2.5 GHz'],
        ['Max Turbo Frequency', '最高 4.4 GHz'],
        ['L2 Cache', '7.5 MB'],
        ['Intel Smart Cache', '18 MB'],
        ['Processor Base Power', '65 W'],
        ['Maximum Turbo Power', '117 W'],
        ['製程', 'Intel 7'],
        ['插槽', 'LGA1700'],
        ['記憶體支援', 'DDR4-3200 / DDR5-4800'],
        ['記憶體通道', '雙通道，最大 128 GB'],
        ['PCI Express', 'PCIe 5.0 / 4.0，最多 20 lanes'],
        ['內顯', 'Intel UHD Graphics 730 / 24 EU'],
        ['最高運作溫度', '100°C']
      ],
      MOTHERBOARD: [
        ['完整型號', 'ASUS TUF GAMING B660M-PLUS WIFI D4'],
        ['晶片組', 'Intel B660'],
        ['CPU 插槽', 'LGA1700'],
        ['尺寸', 'Micro-ATX'],
        ['記憶體插槽', '4 × DDR4 DIMM'],
        ['最大記憶體容量', '128 GB'],
        ['記憶體支援', '最高 DDR4-5333（超頻）'],
        ['記憶體架構', '雙通道 / 支援 Intel XMP'],
        ['主要顯卡插槽', '1 × PCIe 5.0 x16'],
        ['其他擴充插槽', '1 × PCIe 3.0 x16（x4）/ 1 × PCIe 4.0 x1'],
        ['M.2', '2 × M.2（PCIe 4.0 x4，支援 2242 / 2260 / 2280）'],
        ['SATA', '4 × SATA 6 Gb/s'],
        ['RAID', 'SATA RAID 0 / 1 / 5 / 10'],
        ['有線網路', 'Realtek 2.5Gb Ethernet'],
        ['無線網路', 'Intel Wi-Fi 6（2.4 / 5 GHz）'],
        ['藍牙', 'Bluetooth 5.2'],
        ['音效', 'Realtek 7.1 聲道 HD Audio'],
        ['影像輸出', '1 × DisplayPort 1.4 / 1 × HDMI 2.1']
      ],
      RAM: [
        ['品牌／系列', 'ADATA XPG SPECTRIX D50 RGB'],
        ['總容量', '32 GB（16 GB × 2）'],
        ['記憶體類型', 'DDR4 UDIMM'],
        ['額定速度', 'DDR4-3600（XMP）'],
        ['通道配置', '雙通道'],
        ['XMP 電壓', '1.35 V'],
        ['CAS Latency', 'CL18'],
        ['RGB 燈效', '支援']
      ],
      GPU: [
        ['完整型號', 'ZOTAC GAMING GeForce RTX 3060 AMP White Edition'],
        ['產品料號', 'ZT-A30600F-10P'],
        ['GPU 架構', 'NVIDIA Ampere'],
        ['CUDA 核心', '3,584'],
        ['Boost Clock', '1,867 MHz'],
        ['顯示記憶體', '12 GB GDDR6'],
        ['記憶體介面', '192-bit'],
        ['記憶體速度', '15 Gbps'],
        ['介面', 'PCI Express 4.0 x16'],
        ['影像輸出', '3 × DisplayPort 1.4a / 1 × HDMI 2.1'],
        ['最大解析度', '7680 × 4320'],
        ['供電接頭', '2 × 8-pin'],
        ['功耗', '170 W'],
        ['散熱', 'IceStorm 2.0 雙風扇'],
        ['尺寸', '231.9 × 141.3 × 41.5 mm']
      ],
      STORAGE_01: [
        ['產品系列', 'Kingston NV2'],
        ['完整型號', 'SNV2S1000G'],
        ['容量', '1 TB（系統顯示 1,000.2 GB）'],
        ['外型尺寸', 'M.2 2280'],
        ['介面', 'PCIe 4.0 x4 NVMe'],
        ['循序讀取', '最高 3,500 MB/s'],
        ['循序寫入', '最高 2,100 MB/s'],
        ['耐寫量（TBW）', '320 TB']
      ],
      STORAGE_02: [
        ['產品系列', 'Micron 2450 NVMe SSD'],
        ['完整型號', 'MTFDKCD512TFK'],
        ['容量', '512 GB（系統顯示 512.1 GB）'],
        ['外型尺寸', 'M.2 2242'],
        ['介面', 'PCIe 4.0 x4 NVMe'],
        ['NAND 類型', 'Micron 176-layer 3D TLC NAND'],
        ['控制器設計', 'DRAM-less，支援 Host Memory Buffer（HMB）']
      ],
      POWER: [
        ['額定功率', '650 W'],
        ['型號', '未知']
      ],
      DISPLAY: [
        ['型號', 'Xiaomi 電腦螢幕 A24i（P24FBA-RAGL）'],
        ['數量', '2 台'],
        ['面板尺寸', '23.8 吋'],
        ['長寬比', '16:9'],
        ['面板類型', 'IPS'],
        ['解析度', '1920 × 1080（Full HD）'],
        ['更新率', '最高 100 Hz'],
        ['亮度', '250 cd/m²（典型值）'],
        ['對比率', '1000:1（典型值）'],
        ['反應時間', '6 ms（典型值）'],
        ['色彩', '1,670 萬色'],
        ['輸入端子', '1 × DisplayPort 1.4 / 1 × HDMI'],
        ['額定功率', '24 W']
      ],
      SYSTEM: [
        ['作業系統', 'Windows 11 專業版']
      ]
    },
    sources: [
      'https://www.intel.com/content/www/us/en/products/sku/134586/intel-core-i512400-processor-18m-cache-up-to-4-40-ghz/specifications.html',
      'https://www.asus.com/motherboards-components/motherboards/tuf-gaming/tuf-gaming-b660m-plus-wifi-d4/techspec/',
      'https://webapi3.adata.com/storage/downloadfile/datasheet_xpg_spectrix_d50_ddr4_rgb_memory.pdf',
      'https://www.kingston.com/en/support/technical/products/snv2s',
      'https://www.kingston.com/datasheets/SNV2S_us.pdf',
      'https://www.micron.com/products/obsolete/obsolete-2450-ssd',
      'https://www.zotac.com/product/graphics_card/zotac-gaming-geforce-rtx-3060-amp-white-edition',
      'https://www.mi.com/tw/product/xiaomi-monitor-a24i/',
      'https://www.mi.com/tw/product/xiaomi-monitor-a24i/specs/'
    ]
  },
  {
    id: 'dell-optiplex-7070',
    name: 'Dell OptiPlex 7070',
    purpose: '',
    code: 'DELL–01',
    cpu: 'Intel Core i5-9500T',
    motherboard: 'Dell OptiPlex 7070 OEM（Intel Q370）',
    ram: '16 GB DDR4（8 GB × 2，雙通道）',
    gpu: 'Intel UHD Graphics 630（處理器內顯）',
    os: 'Ubuntu Desktop 24.04',
    drives: [
      { type: 'SSD M.2 2242', model: '256 GB（品牌／型號未知）' }
    ],
    io: '2 × DisplayPort、1 × VGA、1 × USB-C',
    href: 'dell-optiplex-7070.html',
    parts: [],
    specs: {
      CPU: [
        ['完整型號', 'Intel Core i5-9500T'],
        ['產品系列／代號', '第 9 代 Intel Core / Coffee Lake Refresh'],
        ['核心／執行緒', '6 / 6'],
        ['Base Clock', '2.2 GHz'],
        ['Max Turbo Frequency', '最高 3.7 GHz'],
        ['Intel Smart Cache', '9 MB'],
        ['TDP', '35 W'],
        ['製程', '14 nm'],
        ['插槽', 'LGA1151'],
        ['記憶體支援', 'DDR4-2666'],
        ['記憶體通道', '雙通道，最大 128 GB'],
        ['PCI Express', 'PCIe 3.0，最多 16 lanes'],
        ['最高運作溫度', '100°C']
      ],
      MOTHERBOARD: [
        ['系統型號', 'Dell OptiPlex 7070'],
        ['晶片組', 'Intel Q370']
      ],
      RAM: [
        ['總容量', '16 GB（8 GB × 2）'],
        ['記憶體類型', 'DDR4'],
        ['通道配置', '雙通道'],
        ['處理器支援速度', '最高 DDR4-2666']
      ],
      STORAGE_01: [
        ['類型', 'M.2 SSD'],
        ['外型尺寸', 'M.2 2242'],
        ['容量', '256 GB'],
        ['品牌', '未知'],
        ['型號', '未知'],
        ['介面／協定', '未提供']
      ],
      GRAPHICS: [
        ['顯示核心', 'Intel UHD Graphics 630（處理器內顯）'],
        ['Execution Units', '24 EU'],
        ['Graphics Base Frequency', '350 MHz'],
        ['Graphics Max Dynamic Frequency', '1.10 GHz']
      ],
      'I/O': [
        ['DisplayPort', '2 × DisplayPort 1.2（後置）'],
        ['VGA', '1 × VGA（後置選配，本機已安裝）'],
        ['USB-C', '1 × USB 3.1 Gen 2 Type-C with PowerShare（前置）'],
        ['USB-A（Micro）', '前置 1 × USB 3.1 Gen 1 with PowerShare；後置 2 × USB 3.1 Gen 1（其中 1 個支援 Smart Power On）+ 2 × USB 3.1 Gen 2'],
        ['USB-A（SFF / Tower）', '前置 1 × USB 3.1 Gen 1 + 2 × USB 2.0（其中 1 個支援 PowerShare）；後置 4 × USB 3.1 Gen 1 + 2 × USB 2.0（其中 1 個支援 SmartPower On）'],
        ['音訊（Micro）', '前置 Headset / Universal Audio Jack + Line-out'],
        ['音訊（SFF / Tower）', '前置 Headset / Universal Audio Jack；後置 Line-out'],
        ['網路', '1 × RJ-45 Gigabit Ethernet（10/100/1000）'],
        ['安全性', 'Kensington 安全纜線鎖孔'],
        ['其他選配連接埠', '後置 VGA / HDMI 2.0b / DisplayPort / USB-C Alt Mode、序列埠或 PS/2（依配置）'],
        ['讀卡機（SFF / Tower）', 'SD 4.0（選配）']
      ],
      SYSTEM: [
        ['作業系統', 'Ubuntu Desktop 24.04']
      ]
    },
    sources: [
      'https://www.dell.com/support/manuals/en-us/optiplex-7070-micro/opti7070_micro_setup_specs/ports-and-connectors?guid=guid-0cb86ac5-ad1f-4ce2-a67c-136de301f6ec&lang=en-us',
      'https://www.dell.com/support/manuals/en-us/optiplex-7070-sff/opti7070_sff_setup_specs/ports-and-connectors?guid=guid-0cb86ac5-ad1f-4ce2-a67c-136de301f6ec&lang=en-us',
      'https://www.dell.com/support/manuals/en-us/optiplex-7070-desktop/opti7070_mt_setup_specs/ports-and-connectors?guid=guid-0cb86ac5-ad1f-4ce2-a67c-136de301f6ec',
      'https://www.intel.com/content/www/us/en/products/sku/190884/intel-core-i59500t-processor-9m-cache-up-to-3-70-ghz/specifications.html'
    ]
  },
  {
    id: 'nas',
    name: 'NAS',
    purpose: 'NETWORK ATTACHED STORAGE',
    code: 'NAS–01',
    cpu: 'Intel Core i3-8100',
    motherboard: 'ASUS WS C246 PRO',
    ram: '16 GB DDR4（Kingston FURY Beast DDR4-3200；平台上限 DDR4-2400）',
    gpu: 'Intel UHD Graphics 630（處理器內顯）',
    psu: 'MONTECH CENTURY 550W 80 PLUS Gold 全模組化',
    os: 'TrueNAS（版本未提供）',
    drives: [
      { type: 'SSD 1 · NVMe M.2', model: '128 GB（品牌／型號／尺寸未提供）' },
      { type: 'SSD 2 · SATA M.2', model: '128 GB（品牌／型號／尺寸未提供）' },
      { type: 'HDD × 4', model: 'Seagate IronWolf 4 TB × 4' }
    ],
    storage: 'NVMe M.2 SSD 128 GB + SATA M.2 SSD 128 GB + 4 × 4 TB HDD（RAIDZ1）',
    cooling: '未提供',
    href: 'nas.html',
    parts: [],
    specs: {
      CPU: [
        ['完整型號', 'Intel Core i3-8100'],
        ['產品系列／代號', '第 8 代 Intel Core / Coffee Lake'],
        ['核心／執行緒', '4 / 4'],
        ['Base Clock', '3.6 GHz'],
        ['Max Turbo Frequency', '不支援 Intel Turbo Boost'],
        ['Intel Smart Cache', '6 MB'],
        ['TDP', '65 W'],
        ['製程', '14 nm'],
        ['插槽', 'LGA1151'],
        ['最大記憶體容量', '64 GB'],
        ['記憶體支援', 'DDR4-2400'],
        ['記憶體通道', '雙通道'],
        ['PCI Express', 'PCIe 3.0，最多 16 lanes'],
        ['最高運作溫度', '100°C']
      ],
      MOTHERBOARD: [
        ['完整型號', 'ASUS WS C246 PRO'],
        ['晶片組', 'Intel C246'],
        ['CPU 插槽', 'LGA1151；支援第 8／9 代 Intel Core、Pentium、Celeron 與 Xeon E 系列'],
        ['尺寸', 'ATX（305 × 244 mm）'],
        ['記憶體插槽', '4 × DDR4 UDIMM'],
        ['最大記憶體容量', '128 GB（依處理器與 DIMM 類型）'],
        ['記憶體架構', '雙通道；DDR4-2666 / 2400；ECC 或 non-ECC UDIMM（依 CPU）'],
        ['PCIe 擴充', '2 × PCIe 3.0 x16（x16 / x8）+ 1 × PCIe 3.0 x16（x4）+ 2 × PCIe x1 + 1 × PCIe x4'],
        ['M.2', '2 × M.2；插槽支援 PCIe 3.0 x4，尺寸含 2242 / 2260 / 2280 / 22110（依插槽）'],
        ['SATA', '8 × SATA 6 Gb/s'],
        ['有線網路', '2 × Gigabit Ethernet（Intel I210-AT + Intel I219-LM）'],
        ['內建顯示輸出', '1 × DisplayPort / 1 × HDMI / 1 × DVI-D / 1 × VGA'],
        ['音效', '8 聲道 HD Audio I/O'],
        ['其他 I/O', '1 × USB 3.1 Gen 2 Type-A / 1 × USB 3.1 Gen 2 Type-C / 4 × USB 3.0 / S/PDIF 光纖輸出 / COM']
      ],
      RAM: [
        ['品牌／系列', 'Kingston FURY Beast DDR4'],
        ['總容量', '16 GB'],
        ['模組數量', '未提供'],
        ['記憶體類型', 'DDR4 UDIMM，non-ECC unbuffered'],
        ['模組額定速度', 'DDR4-3200（FURY Beast 系列規格）'],
        ['平台記憶體速度上限', '最高 DDR4-2400（依 Intel Core i3-8100 規格）'],
        ['XMP 電壓', '系列規格 1.35 V；實際模組料號未提供'],
        ['CAS Latency', '依模組料號而異，料號未提供']
      ],
      GRAPHICS: [
        ['顯示核心', 'Intel UHD Graphics 630（處理器內顯）'],
        ['Execution Units', '23 EU'],
        ['Graphics Base Frequency', '350 MHz'],
        ['Graphics Max Dynamic Frequency', '1.10 GHz']
      ],
      'I/O': [
        ['USB', '1 × USB 3.1 Gen 2 Type-A / 1 × USB 3.1 Gen 2 Type-C / 4 × USB 3.0'],
        ['影像輸出', '1 × HDMI / 1 × DisplayPort / 1 × DVI-D / 1 × VGA'],
        ['網路', '2 × Gigabit Ethernet（Intel I210-AT + I219-LM）'],
        ['音訊', '8 聲道 Audio I/O'],
        ['其他', 'S/PDIF 光纖輸出 / COM Port']
      ],
      STORAGE_01: [
        ['類型', 'NVMe M.2 SSD'],
        ['容量', '128 GB'],
        ['品牌／型號', '未提供'],
        ['M.2 尺寸', '未提供'],
        ['介面', 'NVMe（使用者提供）']
      ],
      STORAGE_02: [
        ['類型', 'SATA M.2 SSD'],
        ['容量', '128 GB'],
        ['品牌／型號', '未提供'],
        ['M.2 尺寸', '未提供'],
        ['介面', 'SATA（使用者提供）']
      ],
      STORAGE_03: [
        ['型號', 'Seagate IronWolf 4 TB'],
        ['數量', '4 顆'],
        ['單顆容量', '4 TB'],
        ['原始／估計可用容量', '16 TB / RAIDZ1 約 12 TB（未計檔案系統開銷）'],
        ['系列定位', 'NAS HDD'],
        ['介面', 'SATA 6 Gb/s'],
        ['儲存配置', 'RAIDZ1（單顆磁碟容錯）']
      ],
      POWER: [
        ['完整型號', 'MONTECH CENTURY 550W'],
        ['額定功率', '550 W'],
        ['效率認證', '80 PLUS Gold'],
        ['模組化', '全模組化'],
        ['風扇', 'FDB 風扇'],
        ['電容', '日本電容'],
        ['保固', '5 年（CENTURY 系列規格）']
      ],
      CASE: [
        ['品牌／型號', '半島鐵盒 PADO F10'],
        ['顏色', '黑色'],
        ['機殼類型', '中塔式多硬碟機殼'],
        ['主機板相容性', 'ATX / Micro-ATX / Mini-ITX'],
        ['硬碟擴充', '標示總計 13 個硬碟位（10 × 3.5 吋 + 3 × 2.5 吋）'],
        ['機殼尺寸', '約 410 × 210 × 475 mm'],
        ['顯卡長度限制', '約 260 mm'],
        ['CPU 散熱器高度限制', '約 170 mm'],
        ['風扇位置', '前置最多 3 顆、頂部 2 顆、後置 1 顆']
      ],
      SYSTEM: [
        ['作業系統', 'TrueNAS SCALE（版本未提供）']
      ]
    },
    sources: [
      'https://www.intel.com/content/www/us/en/products/sku/126688/intel-core-i38100-processor-6m-cache-3-60-ghz/specifications.html',
      'https://www.asus.com/motherboards-components/motherboards/workstation/ws-c246-pro/techspec/',
      'https://www.kingston.com/tw/memory/gaming/kingston-fury-beast-ddr4-memory',
      'https://www.montechpc.com/century-550w',
      'https://www.seagate.com/products/nas-drives/ironwolf-hard-drive/',
      'https://item.jd.com/100022205846.html',
      'https://diy.zol.com.cn/883/8836750.html',
      'https://www.truenas.com/docs/scale/gettingstarted/tnhardwareguide/'
    ]
  }
];

window.BUILDS.forEach(build => {
  if (Array.isArray(build.versions) && build.versions.length) return;

  const { id, name, purpose, code, href, ...configuration } = build;
  build.versions = [{
    id: 'current',
    date: null,
    label: '目前配置',
    summary: '目前登錄配置；版本日期待補',
    configuration
  }];
});

window.getBuildVersions = build => [...build.versions].sort((left, right) =>
  (left.date || '').localeCompare(right.date || '')
);
window.getLatestBuildVersion = build => {
  const recordedVersions = window.getBuildVersions(build).filter(version => version.status !== 'planned');
  return (recordedVersions.length ? recordedVersions : window.getBuildVersions(build)).at(-1);
};

const ubuntuServer = window.BUILDS.find(build => build.id === 'ubuntu-server');
const currentUbuntuConfig = ubuntuServer.versions[0].configuration;
const cloneConfig = config => JSON.parse(JSON.stringify(config));
const commonUbuntuSpecs = cloneConfig(currentUbuntuConfig.specs);
[
  'CPU', 'GPU', 'GPU_01', 'GPU_02', 'MOTHERBOARD',
  'RAM_01', 'RAM_02', 'POWER', 'STORAGE_02', 'STORAGE_03', 'STORAGE_04'
].forEach(group => delete commonUbuntuSpecs[group]);

const kingstonDdr4 = [
  ['品牌', 'Kingston ValueRAM'],
  ['數量／料號', 'KVR32N22S8/16 × 2'],
  ['總容量', '32 GB（16 GB × 2）'],
  ['記憶體類型', 'DDR4 UDIMM'],
  ['額定速度', 'DDR4-3200'],
  ['CAS Latency', 'CL22'],
  ['電壓', '1.2 V'],
  ['通道配置', '雙通道']
];

const transcendDdr4 = [
  ['品牌／系列', 'Transcend JetRam'],
  ['型號', 'JM3200HLE-16G'],
  ['數量', '16 GB × 2'],
  ['記憶體類型', 'DDR4 UDIMM'],
  ['速度', 'DDR4-3200'],
  ['CAS Latency', 'CL22'],
  ['電壓', '1.2 V']
];

const firstBuildCpuSpecs = [
  ['完整型號', 'Intel Core i5-9600K'],
  ['產品系列／代號', '第 9 代 Intel Core / Coffee Lake Refresh'],
  ['核心／執行緒', '6 / 6'],
  ['Base Clock', '3.7 GHz'],
  ['Max Turbo Frequency', '最高 4.6 GHz'],
  ['L2 Cache', '1.5 MB'],
  ['Intel Smart Cache', '9 MB'],
  ['TDP', '95 W'],
  ['製程', '14 nm'],
  ['插槽', 'LGA1151'],
  ['記憶體支援', 'DDR4-2666'],
  ['記憶體通道', '雙通道'],
  ['PCI Express', 'PCIe 3.0，最多 16 lanes'],
  ['內顯', 'Intel UHD Graphics 630 / 24 EU / 最高 1.15 GHz'],
  ['最高運作溫度', '100°C']
];

const z370Specs = [
  ['完整型號', 'MSI Z370 GAMING PRO CARBON'],
  ['晶片組', 'Intel Z370'],
  ['CPU 插槽', 'LGA1151，支援第 8／9 代 Intel Core（依 BIOS 版本）'],
  ['尺寸', 'ATX'],
  ['記憶體插槽', '4 × DDR4 DIMM'],
  ['最大記憶體容量', '64 GB'],
  ['記憶體架構', '雙通道 / 最高 DDR4-4000（OC）'],
  ['主要顯卡插槽', 'PCIe 3.0 x16'],
  ['擴充插槽', '3 × PCIe 3.0 x16（x16 / x8 / x4 電氣配置）+ 3 × PCIe 3.0 x1'],
  ['M.2', '2 × M.2（PCIe 3.0 x4 / SATA）'],
  ['SATA', '6 × SATA 6 Gb/s'],
  ['RAID', 'SATA RAID 0 / 1 / 5 / 10'],
  ['有線網路', 'Intel I219-V Gigabit Ethernet'],
  ['無線網路', '無內建 Wi-Fi（此型號非 AC 版本）'],
  ['音效', 'Realtek ALC1220 7.1 聲道 HD Audio'],
  ['影像輸出', 'DisplayPort 1.2 / HDMI 1.4 / DVI-D（依處理器內顯）'],
  ['USB', '後置 USB 3.1 Gen 2 Type-A / Type-C；另有 USB 3.1 Gen 1 與 USB 2.0']
];

const dualAsus3060Specs = [
  ['完整型號', 'ASUS DUAL-RTX3060-O12G-V2'],
  ['GPU 架構', 'NVIDIA Ampere / GeForce RTX 3060'],
  ['CUDA 核心', '3,584'],
  ['Boost Clock', 'OC 1,867 MHz / Gaming 1,837 MHz'],
  ['顯示記憶體', '12 GB GDDR6'],
  ['記憶體介面', '192-bit'],
  ['記憶體速度', '15 Gbps'],
  ['介面', 'PCI Express 4.0'],
  ['影像輸出', '3 × DisplayPort 1.4a / 1 × HDMI 2.1'],
  ['最大解析度', '7680 × 4320'],
  ['供電接頭', '1 × 8-pin'],
  ['建議電源', '650 W'],
  ['尺寸', '200 × 123 × 38 mm'],
  ['插槽寬度', '2-slot']
];

const dualMsi3060Specs = [
  ['完整型號', 'MSI GeForce RTX 3060 VENTUS 3X 12G OC'],
  ['GPU 架構', 'NVIDIA Ampere / GeForce RTX 3060'],
  ['CUDA 核心', '3,584'],
  ['Boost Clock', '1,807 MHz'],
  ['顯示記憶體', '12 GB GDDR6'],
  ['記憶體介面', '192-bit'],
  ['記憶體速度', '15 Gbps'],
  ['介面', 'PCI Express 4.0'],
  ['影像輸出', '3 × DisplayPort 1.4a / 1 × HDMI 2.1'],
  ['功耗', '170 W'],
  ['供電接頭', '1 × 8-pin'],
  ['散熱', 'TORX Fan 3.0 三風扇'],
  ['尺寸', '316 × 120 × 42 mm'],
  ['插槽寬度', '2-slot']
];

const gtx1650VentusSpecs = [
  ['完整型號', 'MSI GeForce GTX 1650 VENTUS XS 4G OC'],
  ['GPU 架構', 'NVIDIA Turing / GeForce GTX 1650'],
  ['CUDA 核心', '896'],
  ['Boost Clock', '1,665 MHz'],
  ['顯示記憶體', '4 GB GDDR5'],
  ['記憶體介面', '128-bit'],
  ['記憶體速度', '8 Gbps'],
  ['介面', 'PCI Express 3.0 x16'],
  ['影像輸出', '1 × DisplayPort 1.4a / 1 × HDMI 2.0b / 1 × DL-DVI-D'],
  ['功耗', '75 W'],
  ['供電接頭', '不需外接供電'],
  ['散熱', '雙風扇']
];

const radeonHd7470Specs = [
  ['完整型號', 'ASUS Radeon HD 7470 OEM（單槽；ASUS Essentio Series）'],
  ['GPU 架構', 'AMD TeraScale 2 / Caicos'],
  ['Stream Processors', '160'],
  ['核心時脈', '750 MHz（HD 7470 OEM 參考規格）'],
  ['製程', '40 nm'],
  ['顯示記憶體', '1 GB GDDR5（HD 7470 OEM 參考規格）'],
  ['記憶體介面', '64-bit'],
  ['記憶體時脈', '900 MHz'],
  ['介面', 'PCI Express 2.0 x16'],
  ['插槽寬度', '單槽'],
  ['影像輸出', '1 × DVI / 1 × DisplayPort（HD 7470 OEM 參考規格）'],
  ['功耗', '27 W（HD 7470 OEM 參考規格）']
];

const enermaxRevolutionIII850Specs = [
  ['完整型號', 'ENERMAX REVOLUTION III 850W'],
  ['產品型號', 'ERV850G-AHG-MAC / ERV850G-AHG-MAV（依區域版本）'],
  ['額定功率', '850 W'],
  ['效率認證', '80 PLUS Gold'],
  ['電源規範', 'ATX 3.1'],
  ['模組化', '全模組化'],
  ['顯卡電源線', '原生 600 W 12V-2x6'],
  ['風扇', '120 mm FDB'],
  ['電容', '100% 日系電容'],
  ['保護機制', 'OCP / OVP / UVP / OPP / OTP / SCP'],
  ['尺寸', '140 × 150 × 86 mm']
];

const rog3090Specs = [
  ['完整型號', 'ASUS ROG-STRIX-RTX3090-O24G-GAMING'],
  ['GPU 架構', 'NVIDIA Ampere / GeForce RTX 3090'],
  ['CUDA 核心', '10,496'],
  ['顯示記憶體', '24 GB GDDR6X'],
  ['記憶體介面', '384-bit'],
  ['記憶體速度', '19.5 Gbps'],
  ['介面', 'PCI Express 4.0'],
  ['Boost Clock', 'OC 1,890 MHz / Gaming 1,860 MHz'],
  ['影像輸出', '2 × HDMI 2.1 / 3 × DisplayPort 1.4a'],
  ['最大解析度', '7680 × 4320'],
  ['最大顯示器數量', '4'],
  ['NVLink', '支援'],
  ['供電接頭', '3 × 8-pin'],
  ['建議電源', '850 W'],
  ['尺寸', '318.5 × 140.1 × 57.8 mm'],
  ['插槽寬度', '2.9-slot'],
  ['Aura Sync', 'ARGB']
];

const evga1000Specs = [
  ['產品型號', 'EVGA SuperNOVA 1000 G5'],
  ['產品料號', '未提供'],
  ['額定功率', '1000 W'],
  ['效率認證', '80 PLUS Gold'],
  ['模組化', '全模組化'],
  ['風扇', '135 mm Fluid Dynamic Bearing / ECO Mode'],
  ['機身長度', '150 mm'],
  ['電源規範', 'ATX12V / EPS12V'],
  ['保固', '10 年（此系列原廠規格）']
];

const sources = {
  intel9600k: 'https://www.intel.com/content/www/us/en/products/sku/134896/intel-core-i59600k-processor-9m-cache-up-to-4-60-ghz/specifications.html',
  amdRyzen5900x: 'https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-9-5900x.html',
  asusB550f: 'https://rog.asus.com/motherboards/rog-strix/rog-strix-b550-f-gaming-wifi-ii-model/spec/',
  z370: 'https://www.msi.com/Motherboard/Z370-GAMING-PRO-CARBON/Specification',
  kingston: 'https://www.kingston.com/datasheets/KVR32N22S8_16.pdf',
  transcend: 'https://www.transcend-info.com/Products/No-705',
  asusDual3060: 'https://www.asus.com/motherboards-components/graphics-cards/dual/dual-rtx3060-o12g-v2/techspec/',
  msiGtx1650: 'https://www.msi.com/Graphics-Card/GeForce-GTX-1650-VENTUS-XS-4G-OC/Specification',
  radeonHd7470: 'https://technical.city/en/gpu/Radeon-HD-7470-OEM',
  msiVentus3060: 'https://www.msi.com/Graphics-Card/GeForce-RTX-3060-VENTUS-3X-12G-OC/Specification',
  enermaxRevolutionIII850: 'https://www.enermax.com/en/products/revolution-iii-850',
  evga1000: 'https://www.evga.com/products/Specs/PSU.aspx?pn=71d331b7-9306-4218-987f-875fd422fd44',
  fsp1200: 'https://www.fsplifestyle.com/us/product/HydroPTMXPRO1200W_GEN5.html',
  rog3090: 'https://rog.asus.com/graphics-cards/graphics-cards/rog-strix/rog-strix-rtx3090-o24g-gaming-model/spec/',
  micron2400: 'https://www.micron.com/products/obsolete/obsolete-2400-ssd',
  ironWolf: 'https://www.seagate.com/products/nas-drives/ironwolf-hard-drive/',
  zotac5070ti: 'https://www.zotac.com/product/graphics_card/zotac-gaming-geforce-rtx-5070-ti-solid-sff-oc'
};

const createUbuntuSnapshot = ({
  id, label, changeLabel, summary, cpu, motherboard, ram, gpu, psu, drives,
  specs, sourceKeys, storage
}) => {
  const configuration = cloneConfig(currentUbuntuConfig);
  configuration.cpu = cpu;
  configuration.motherboard = motherboard;
  configuration.ram = ram;
  configuration.gpu = gpu;
  configuration.psu = psu;
  configuration.drives = cloneConfig(drives);
  configuration.storage = storage;
  configuration.specs = {
    ...cloneConfig(commonUbuntuSpecs),
    ...cloneConfig(specs)
  };
  configuration.sources = [...new Set(sourceKeys.map(key => sources[key]).filter(Boolean))];
  return { id, date: id, label, changeLabel, summary, configuration };
};

const raidDrives = [
  { type: 'M.2 SSD / RAID 1', model: 'Micron 2400 512 GB NVMe SSD × 2' }
];
const wdBlue250 = { type: 'SSD', model: 'WD Blue 250 GB（完整型號／介面未提供）' };
const ironWolfDrive = cloneConfig(currentUbuntuConfig.drives.find(drive => drive.type === 'HDD'));
const datedUbuntuConfigs = [
  createUbuntuSnapshot({
    id: '2025-06',
    label: '初次組裝',
    changeLabel: 'i5-9600K · 雙 RTX 3060',
    summary: '2025 年 6 月首次組裝。初始記憶體為 Kingston ValueRAM 16 GB × 2；SSD 配置為 RAID 1。',
    cpu: 'Intel Core i5-9600K',
    motherboard: 'MSI Z370 GAMING PRO CARBON',
    ram: '32 GB DDR4（Kingston ValueRAM 16 GB × 2）',
    gpu: 'ASUS DUAL-RTX3060-O12G-V2 + MSI RTX 3060 VENTUS 3X 12G OC',
    psu: 'EVGA SuperNOVA 1000 G5 · 1000 W',
    drives: raidDrives,
    storage: 'M.2 RAID 1（Micron 2400 512 GB × 2）',
    specs: {
      CPU: firstBuildCpuSpecs,
      MOTHERBOARD: z370Specs,
      RAM_01: kingstonDdr4,
      GPU_01: dualAsus3060Specs,
      GPU_02: dualMsi3060Specs,
      POWER: evga1000Specs
    },
    sourceKeys: ['intel9600k', 'z370', 'kingston', 'asusDual3060', 'msiVentus3060', 'evga1000', 'micron2400']
  }),
  createUbuntuSnapshot({
    id: '2025-11',
    label: '加裝記憶體',
    changeLabel: '+ Transcend JetRam 32 GB',
    summary: '加裝 Transcend JetRam DDR4-3200 16 GB × 2；原有 Kingston 16 GB × 2 保留，記憶體總容量增至 64 GB。',
    cpu: 'Intel Core i5-9600K',
    motherboard: 'MSI Z370 GAMING PRO CARBON',
    ram: '64 GB DDR4-3200（Kingston 16 GB × 2 + Transcend 16 GB × 2）',
    gpu: 'ASUS DUAL-RTX3060-O12G-V2 + MSI RTX 3060 VENTUS 3X 12G OC',
    psu: 'EVGA SuperNOVA 1000 G5 · 1000 W',
    drives: raidDrives,
    storage: 'M.2 RAID 1（Micron 2400 512 GB × 2）',
    specs: {
      CPU: firstBuildCpuSpecs,
      MOTHERBOARD: z370Specs,
      RAM_01: kingstonDdr4,
      RAM_02: transcendDdr4,
      GPU_01: dualAsus3060Specs,
      GPU_02: dualMsi3060Specs,
      POWER: evga1000Specs
    },
    sourceKeys: ['intel9600k', 'z370', 'kingston', 'transcend', 'asusDual3060', 'msiVentus3060', 'evga1000', 'micron2400']
  }),
  createUbuntuSnapshot({
    id: '2025-12',
    label: '顯示卡更換',
    changeLabel: '雙 RTX 3060 → ROG RTX 3090 + IronWolf 4 TB',
    summary: '兩張 RTX 3060 更換為 ASUS ROG-STRIX-RTX3090-O24G-GAMING，並於同月加入 Seagate IronWolf 4 TB HDD。',
    cpu: 'Intel Core i5-9600K',
    motherboard: 'MSI Z370 GAMING PRO CARBON',
    ram: '64 GB DDR4-3200（Kingston 16 GB × 2 + Transcend 16 GB × 2）',
    gpu: 'ASUS ROG-STRIX-RTX3090-O24G-GAMING',
    psu: 'EVGA SuperNOVA 1000 G5 · 1000 W',
    drives: [...raidDrives, ironWolfDrive],
    storage: 'M.2 RAID 1 + Seagate IronWolf 4 TB HDD',
    specs: {
      CPU: firstBuildCpuSpecs,
      MOTHERBOARD: z370Specs,
      RAM_01: kingstonDdr4,
      RAM_02: transcendDdr4,
      GPU: rog3090Specs,
      STORAGE_02: cloneConfig(currentUbuntuConfig.specs.STORAGE_03),
      POWER: evga1000Specs
    },
    sourceKeys: ['intel9600k', 'z370', 'kingston', 'transcend', 'rog3090', 'evga1000', 'micron2400', 'ironWolf']
  }),
  createUbuntuSnapshot({
    id: '2026-01',
    label: '電源升級',
    changeLabel: 'EVGA 1000 G5 → FSP 1200 W',
    summary: '電源供應器由 EVGA SuperNOVA 1000 G5 更換為 FSP HYDRO PTM X PRO 1200W；IronWolf 4 TB HDD 沿用。',
    cpu: 'Intel Core i5-9600K',
    motherboard: 'MSI Z370 GAMING PRO CARBON',
    ram: '64 GB DDR4-3200（Kingston 16 GB × 2 + Transcend 16 GB × 2）',
    gpu: 'ASUS ROG-STRIX-RTX3090-O24G-GAMING',
    psu: 'FSP HYDRO PTM X PRO 1200W',
    drives: [...raidDrives, ironWolfDrive],
    storage: 'M.2 RAID 1 + Seagate IronWolf 4 TB HDD',
    specs: {
      CPU: firstBuildCpuSpecs,
      MOTHERBOARD: z370Specs,
      RAM_01: kingstonDdr4,
      RAM_02: transcendDdr4,
      GPU: rog3090Specs,
      STORAGE_02: cloneConfig(currentUbuntuConfig.specs.STORAGE_03),
      POWER: cloneConfig(currentUbuntuConfig.specs.POWER)
    },
    sourceKeys: ['intel9600k', 'z370', 'kingston', 'transcend', 'rog3090', 'fsp1200', 'micron2400', 'ironWolf']
  }),
  createUbuntuSnapshot({
    id: '2026-05',
    label: '處理器與主機板更換',
    changeLabel: 'i5-9600K / Z370 → R9 5900X / B550-F',
    summary: '處理器與主機板平台升級為 Ryzen 9 5900X 與 ASUS ROG STRIX B550-F GAMING WIFI II；IronWolf 4 TB HDD 沿用。',
    cpu: currentUbuntuConfig.cpu,
    motherboard: currentUbuntuConfig.motherboard,
    ram: currentUbuntuConfig.ram,
    gpu: 'ASUS ROG-STRIX-RTX3090-O24G-GAMING',
    psu: 'FSP HYDRO PTM X PRO 1200W',
    drives: [...raidDrives, ironWolfDrive],
    storage: 'M.2 RAID 1 + Seagate IronWolf 4 TB HDD',
    specs: {
      CPU: cloneConfig(currentUbuntuConfig.specs.CPU),
      MOTHERBOARD: cloneConfig(currentUbuntuConfig.specs.MOTHERBOARD),
      RAM_01: kingstonDdr4,
      RAM_02: transcendDdr4,
      GPU: rog3090Specs,
      STORAGE_02: cloneConfig(currentUbuntuConfig.specs.STORAGE_03),
      POWER: cloneConfig(currentUbuntuConfig.specs.POWER)
    },
    sourceKeys: ['amdRyzen5900x', 'asusB550f', 'kingston', 'transcend', 'rog3090', 'fsp1200', 'micron2400', 'ironWolf']
  }),
  createUbuntuSnapshot({
    id: '2026-06',
    label: '新增儲存裝置',
    changeLabel: '+ WD Blue 250 GB SSD',
    summary: '新增 WD Blue 250 GB SSD；完整型號、外型尺寸與介面未提供。IronWolf 4 TB HDD 沿用。',
    cpu: currentUbuntuConfig.cpu,
    motherboard: currentUbuntuConfig.motherboard,
    ram: currentUbuntuConfig.ram,
    gpu: 'ASUS ROG-STRIX-RTX3090-O24G-GAMING',
    psu: 'FSP HYDRO PTM X PRO 1200W',
    drives: [...raidDrives, wdBlue250, ironWolfDrive],
    storage: 'M.2 RAID 1 + WD Blue 250 GB SSD + Seagate IronWolf 4 TB HDD',
    specs: {
      CPU: cloneConfig(currentUbuntuConfig.specs.CPU),
      MOTHERBOARD: cloneConfig(currentUbuntuConfig.specs.MOTHERBOARD),
      RAM_01: kingstonDdr4,
      RAM_02: transcendDdr4,
      GPU: rog3090Specs,
      STORAGE_02: [
        ['品牌／系列', 'WD Blue'],
        ['容量', '250 GB']
      ],
      STORAGE_03: cloneConfig(currentUbuntuConfig.specs.STORAGE_03),
      POWER: cloneConfig(currentUbuntuConfig.specs.POWER)
    },
    sourceKeys: ['amdRyzen5900x', 'asusB550f', 'kingston', 'transcend', 'rog3090', 'fsp1200', 'wdBlue', 'micron2400', 'ironWolf']
  })
];

const currentJulyConfig = cloneConfig(currentUbuntuConfig);
currentJulyConfig.sources = [...new Set([
  ...currentJulyConfig.sources,
  sources.intel9600k,
  sources.z370,
  sources.kingston,
  sources.transcend,
  sources.asusDual3060,
  sources.msiVentus3060,
  sources.evga1000,
  sources.fsp1200,
  sources.rog3090,
  sources.ironWolf,
  sources.wdBlue
].filter(Boolean))];

ubuntuServer.versions = [
  ...datedUbuntuConfigs,
  {
    id: '2026-07',
    date: '2026-07',
    label: '顯示卡更換',
    changeLabel: 'ROG RTX 3090 → RTX 5070 Ti',
    summary: 'ROG RTX 3090 更換為 ZOTAC RTX 5070 Ti；WD Blue 250 GB SSD 與 IronWolf 4 TB HDD 均保留。',
    configuration: currentJulyConfig
  }
];

ubuntuServer.versions.push({
  id: '2026-10',
  date: '2026-10',
  label: '顯示卡更換',
  changeLabel: 'RTX 5070 Ti → ASUS Radeon HD 7470 OEM',
  summary: '移除 ZOTAC RTX 5070 Ti，改用 ASUS Radeon HD 7470 OEM 單槽顯示卡（ASUS Essentio Series）；列出的晶片規格為 HD 7470 OEM 參考規格。',
  configuration: (() => {
    const config = cloneConfig(currentJulyConfig);
    config.gpu = 'ASUS Radeon HD 7470 OEM GPU Single Slot - ASUS Essentio Series';
    config.specs = { ...config.specs, GPU: cloneConfig(radeonHd7470Specs) };
    config.sources = [...new Set([...config.sources, sources.radeonHd7470])];
    return config;
  })()
});

const windowsBuild = window.BUILDS.find(build => build.id === 'intel-i5-12400');
const currentWindowsConfig = windowsBuild.versions[0].configuration;
const octoberServerVersion = ubuntuServer.versions.find(version => version.id === '2026-10');
octoberServerVersion.label = '系統與硬體更新';
octoberServerVersion.changeLabel = 'Proxmox VE 9.1.1 · + RTX 3060 · 儲存重整';
octoberServerVersion.summary = '系統改為 Proxmox VE 9.1.1，加入原 Windows 主機的 ZOTAC RTX 3060 AMP White Edition，保留 HD 7470；兩顆 Micron 512 GB SSD 取消 RAID 1、分開使用，新增 SanDisk 128 GB SATA SSD 與 Kingston 512 GB NVMe M.2 SSD，移除 WD Blue 250 GB SSD。';
const octoberServerConfig = octoberServerVersion.configuration;
octoberServerConfig.os = 'Proxmox VE 9.1.1';
octoberServerConfig.gpu = `${octoberServerConfig.gpu} + ${currentWindowsConfig.gpu}`;
octoberServerConfig.drives = [
  { type: 'M.2 SSD 1', model: 'Micron 2400 512 GB NVMe SSD（獨立使用）' },
  { type: 'M.2 SSD 2', model: 'Micron 2400 512 GB NVMe SSD（獨立使用）' },
  { type: 'SATA SSD', model: 'SanDisk 128 GB（型號未提供）' },
  { type: 'NVMe M.2 SSD 3', model: 'Kingston 512 GB（型號未提供）' },
  cloneConfig(ironWolfDrive)
];
octoberServerConfig.storage = octoberServerConfig.drives.map(drive => drive.model).join(' + ');
delete octoberServerConfig.specs.GPU;
Object.assign(octoberServerConfig.specs, {
  GPU_01: cloneConfig(radeonHd7470Specs),
  GPU_02: cloneConfig(currentWindowsConfig.specs.GPU),
  STORAGE_01: [
    ['型號', 'Micron 2400 512 GB NVMe SSD'],
    ['容量', '512 GB'],
    ['類型', 'M.2 NVMe SSD']
  ],
  STORAGE_02: [
    ['型號', 'Micron 2400 512 GB NVMe SSD'],
    ['容量', '512 GB'],
    ['類型', 'M.2 NVMe SSD']
  ],
  STORAGE_03: [
    ['品牌', 'SanDisk'],
    ['類型', 'SSD'],
    ['容量', '128 GB'],
    ['介面', 'SATA'],
    ['型號', '未提供']
  ],
  STORAGE_04: [
    ['品牌', 'Kingston'],
    ['類型', 'M.2 SSD'],
    ['容量', '512 GB'],
    ['介面／協定', 'NVMe'],
    ['型號', '未提供']
  ],
  STORAGE_05: cloneConfig(currentUbuntuConfig.specs.STORAGE_03),
  SYSTEM: [['作業系統', 'Proxmox VE 9.1.1'], ['組裝年份', '2025']]
});
octoberServerConfig.sources.push('https://www.zotac.com/product/graphics_card/zotac-gaming-geforce-rtx-3060-amp-white-edition');
const initialKingstonDrive = currentWindowsConfig.drives[0];
const secondMicronDrive = currentWindowsConfig.drives[1];

const createWindowsSnapshot = ({
  date, label, changeLabel, summary, gpu, gpuSpecs, includeSecondDrive
}) => {
  const configuration = cloneConfig(currentWindowsConfig);
  configuration.gpu = gpu;
  configuration.drives = includeSecondDrive
    ? [cloneConfig(initialKingstonDrive), cloneConfig(secondMicronDrive)]
    : [cloneConfig(initialKingstonDrive)];
  configuration.storage = configuration.drives.map(drive => drive.model).join(' + ');
  configuration.specs = {
    ...cloneConfig(currentWindowsConfig.specs),
    GPU: cloneConfig(gpuSpecs)
  };
  if (!includeSecondDrive) delete configuration.specs.STORAGE_02;
  configuration.sources = [...new Set([
    ...configuration.sources,
    sources.asusDual3060,
    sources.msiGtx1650,
    sources.msiVentus3060
  ].filter(Boolean))];

  return { id: date, date, label, changeLabel, summary, configuration };
};

windowsBuild.versions = [
  createWindowsSnapshot({
    date: '2025-05',
    label: '初始組裝',
    changeLabel: 'DUAL RTX 3060 · Kingston SNV2S1000G',
    summary: '初始配置；當時只有 Kingston SNV2S1000G SSD，顯示卡為 ASUS DUAL-RTX3060-O12G-V2。其他零件沿用目前登錄規格。',
    gpu: 'ASUS DUAL-RTX3060-O12G-V2',
    gpuSpecs: dualAsus3060Specs,
    includeSecondDrive: false
  }),
  createWindowsSnapshot({
    date: '2025-07',
    label: '顯示卡更換',
    changeLabel: 'DUAL RTX 3060 → GTX 1650 VENTUS XS',
    summary: '顯示卡更換為 MSI GeForce GTX 1650 VENTUS XS 4G OC；儲存裝置仍只有 Kingston SNV2S1000G。',
    gpu: 'MSI GeForce GTX 1650 VENTUS XS 4G OC',
    gpuSpecs: gtx1650VentusSpecs,
    includeSecondDrive: false
  }),
  createWindowsSnapshot({
    date: '2025-09',
    label: '新增 SSD',
    changeLabel: '+ Micron MTFDKCD512TFK 512 GB',
    summary: '加裝 Micron MTFDKCD512TFK 512.1 GB SSD；GTX 1650 VENTUS XS 保留。',
    gpu: 'MSI GeForce GTX 1650 VENTUS XS 4G OC',
    gpuSpecs: gtx1650VentusSpecs,
    includeSecondDrive: true
  }),
  createWindowsSnapshot({
    date: '2025-12',
    label: '顯示卡更換',
    changeLabel: 'GTX 1650 → MSI RTX 3060 VENTUS 3X',
    summary: '顯示卡更換為 MSI GeForce RTX 3060 VENTUS 3X 12G OC；兩顆 SSD 保留。',
    gpu: 'MSI GeForce RTX 3060 VENTUS 3X 12G OC',
    gpuSpecs: dualMsi3060Specs,
    includeSecondDrive: true
  }),
  createWindowsSnapshot({
    date: '2026-01',
    label: '顯示卡更換',
    changeLabel: 'MSI RTX 3060 → ZOTAC RTX 3060 AMP White',
    summary: '顯示卡更換為目前的 ZOTAC GAMING GeForce RTX 3060 AMP White Edition；兩顆 SSD 保留。',
    gpu: currentWindowsConfig.gpu,
    gpuSpecs: currentWindowsConfig.specs.GPU,
    includeSecondDrive: true
  }),
  {
    ...createWindowsSnapshot({
      date: '2026-10',
      label: '顯示卡與電源升級',
      changeLabel: 'RTX 3060 → RTX 5070 Ti · ENERMAX 850W',
      summary: '從 Ubuntu Server 移入 ZOTAC RTX 5070 Ti，並更換為 ENERMAX REVOLUTION III 850W ATX 3.1 金牌全模組電源。',
      gpu: currentUbuntuConfig.gpu,
      gpuSpecs: currentUbuntuConfig.specs.GPU,
      includeSecondDrive: true
    }),
    configuration: (() => {
      const configuration = cloneConfig(currentWindowsConfig);
      configuration.gpu = currentUbuntuConfig.gpu;
      configuration.psu = 'ENERMAX REVOLUTION III 850W 80 PLUS Gold 全模組化';
      configuration.specs = {
        ...cloneConfig(currentWindowsConfig.specs),
        GPU: cloneConfig(currentUbuntuConfig.specs.GPU),
        POWER: cloneConfig(enermaxRevolutionIII850Specs)
      };
      configuration.sources = [...new Set([
        ...configuration.sources,
        ...currentUbuntuConfig.sources,
        sources.enermaxRevolutionIII850
      ].filter(Boolean))];
      return configuration;
    })()
  }
];

const dellBuild = window.BUILDS.find(build => build.id === 'dell-optiplex-7070');
const dellCurrentConfig = dellBuild.versions[0].configuration;
dellBuild.versions = [{
  id: '2026-01',
  date: '2026-01',
  label: '初始配置紀錄',
  changeLabel: 'OptiPlex 7070 · i5-9500T',
  summary: '2026 年 1 月配置紀錄；目前沒有其他零件更換紀錄。',
  configuration: dellCurrentConfig
}];

const nasBuild = window.BUILDS.find(build => build.id === 'nas');
nasBuild.versions = [{
  id: 'current',
  date: null,
  label: '目前配置',
  summary: '目前登錄配置；TrueNAS SCALE 版本未提供。',
  configuration: nasBuild.versions[0].configuration
}];

const itxConfiguration = {
  cpu: 'Intel Core i5-9600K',
  motherboard: 'MSI MPG Z390I GAMING EDGE AC',
  ram: '16 GB DDR4-2400（8 GB × 2）',
  gpu: 'MSI GeForce GTX 1650 D6 VENTUS XS OCV1',
  os: 'Windows 11 專業版',
  cooling: '寒溪花 G2-120 白色 ARGB 深鏡款 · 120 mm 一體式水冷',
  psu: 'SFX 550 W（品牌／型號未提供）',
  drives: [{ type: 'M.2 SSD', model: '512 GB（品牌／型號／介面未提供）' }],
  parts: [],
  specs: {
    CPU: cloneConfig(firstBuildCpuSpecs),
    MOTHERBOARD: [
      ['完整型號', 'MSI MPG Z390I GAMING EDGE AC'],
      ['晶片組', 'Intel Z390'],
      ['CPU 插槽', 'LGA1151，支援第 8／9 代 Intel Core'],
      ['尺寸', 'Mini-ITX（170 × 170 mm）'],
      ['記憶體插槽', '2 × DDR4 DIMM，雙通道'],
      ['最大記憶體容量', '64 GB（依官方最新規格）'],
      ['記憶體支援', 'DDR4-2133 / 2400 / 2666，最高 4800（OC）；支援 XMP'],
      ['擴充插槽', '1 × PCIe 3.0 x16'],
      ['M.2', '2 × Key M，支援 2260 / 2280；M2_1 支援 PCIe 3.0 x4 / SATA，M2_2 支援 PCIe 3.0 x4'],
      ['SATA', '4 × SATA 6 Gb/s；M2_1 安裝 SATA SSD 時 SATA2 停用'],
      ['RAID 支援', 'SATA RAID 0 / 1 / 5 / 10；M.2 PCIe RAID 0 / 1'],
      ['有線網路', 'Realtek 8111H Gigabit LAN'],
      ['無線網路', 'Intel Wireless-AC 9462，802.11ac，2.4 / 5 GHz，最高 433 Mbps'],
      ['藍牙', 'Bluetooth 5'],
      ['音效', 'Realtek ALC892，7.1 聲道，光纖 S/PDIF'],
      ['後置 USB', '2 × USB 3.1 Gen 2 Type-A + 2 × USB 3.1 Gen 1 Type-A + 2 × USB 2.0'],
      ['影像輸出', '1 × DisplayPort + 1 × HDMI'],
      ['風扇／水泵接頭', 'CPU、系統風扇、水泵各 1 × 4-pin']
    ],
    RAM: [
      ['總容量', '16 GB（8 GB × 2）'],
      ['記憶體類型', 'DDR4'],
      ['通道配置', '雙通道'],
      ['速度', 'DDR4-2400'],
      ['品牌／型號', '未提供']
    ],
    GPU: [
      ['完整型號', 'MSI GeForce GTX 1650 D6 VENTUS XS OCV1'],
      ['GPU 架構', 'NVIDIA Turing / GeForce GTX 1650'],
      ['CUDA 核心', '896'],
      ['Boost Clock', '1,620 MHz'],
      ['顯示記憶體', '4 GB GDDR6'],
      ['記憶體介面', '128-bit'],
      ['記憶體速度', '12 Gbps'],
      ['介面', 'PCI Express 3.0 x16'],
      ['影像輸出', '1 × DL-DVI-D / 1 × HDMI 2.0b / 1 × DisplayPort 1.4'],
      ['最大解析度', '7680 × 4320'],
      ['最大顯示器數量', '3'],
      ['功耗', '75 W'],
      ['供電接頭', '1 × 6-pin'],
      ['建議電源', '300 W'],
      ['散熱', '雙風扇'],
      ['尺寸', '179 × 115 × 42 mm'],
      ['重量', '466 g']
    ],
    STORAGE_01: [
      ['類型', 'M.2 SSD'],
      ['容量', '512 GB'],
      ['品牌／型號', '未提供'],
      ['介面／協定／尺寸', '未提供']
    ],
    COOLING: [
      ['品牌', '寒溪花'],
      ['型號', 'G2-120'],
      ['款式', '白色 ARGB 深鏡款'],
      ['類型', '120 mm 一體式水冷'],
      ['規格依據', '型號及款式由使用者確認；轉速、噪音與冷排尺寸未提供']
    ],
    POWER: [
      ['額定功率', '550 W'],
      ['規格', 'SFX'],
      ['品牌／型號', '未提供'],
      ['效率認證／模組化', '未提供']
    ],
    SYSTEM: [['作業系統', 'Windows 11 專業版']]
  },
  sources: [
    sources.intel9600k,
    'https://www.msi.com/Motherboard/MPG-Z390I-GAMING-EDGE-AC/Specification',
    'https://us.msi.com/Graphics-Card/GeForce-GTX-1650-D6-VENTUS-XS-OCV1/Specification'
  ]
};

window.BUILDS.push({
  id: 'intel-i5-9600k',
  name: 'Windows 11 · i5-9600K',
  purpose: 'MINI-ITX',
  code: 'WINDOWS–02',
  href: 'intel-i5-9600k.html',
  ...cloneConfig(itxConfiguration),
  versions: [{
    id: '2026-10',
    date: '2026-10',
    label: '初始配置紀錄',
    changeLabel: 'i5-9600K · Z390I · GTX 1650',
    summary: '2026 年 10 月配置紀錄：Mini-ITX 主機，搭配 GTX 1650 D6 VENTUS XS OCV1（6-pin）、寒溪花 G2-120 白色 ARGB 深鏡款水冷與 Windows 11 專業版。',
    configuration: itxConfiguration
  }]
});
