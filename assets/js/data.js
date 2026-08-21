window.BUILDS = [
  {
    id: 'ubuntu-server',
    name: 'Ubuntu Server',
    purpose: '',
    year: '2025',
    code: 'UBUNTU–01',
    os: 'Ubuntu Server 24.04 LTS',
    cpu: 'AMD Ryzen 9 5900X',
    motherboard: 'ASUS ROG STRIX B550-F GAMING WIFI II',
    ram: '64 GB DDR4-3200（Transcend 2 × 16 GB + Kingston 2 × 16 GB）',
    gpu: 'ZOTAC GAMING GeForce RTX 5070 Ti SOLID SFF OC',
    storage: 'M.2 RAID 1 + SATA SSD + 4 TB HDD',
    cooling: 'MSI 360 mm 一體式水冷（確切型號待補）',
    psu: 'FSP HYDRO PTM X PRO 1200W',
    drives: [
      { type: 'M.2 SSD / RAID 1', model: '512 GB × 2' },
      { type: 'SATA SSD', model: '512 GB' },
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
        ['品牌／料號', '待補']
      ],
      STORAGE_02: [
        ['類型', 'SATA SSD'],
        ['容量', '512 GB'],
        ['品牌／料號', '待補']
      ],
      STORAGE_03: [
        ['類型', 'HDD'],
        ['型號', 'Seagate IronWolf 4 TB'],
        ['系列', 'IronWolf NAS HDD'],
        ['介面', 'SATA 6 Gb/s'],
        ['完整料號', '待補']
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
        ['模組化', '全模除化'],
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
  }
];
