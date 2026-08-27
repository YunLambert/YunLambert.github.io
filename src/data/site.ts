export const site = {
  name: '小云朵想养鲸鱼',
  title: '欢迎光临 小云朵想养鲸鱼の博客',
  description:
    '欢迎光临小云朵想养鲸鱼の博客：coding、hiking、designing、photograph、vibecoding、music、travel，以及一点点深海星空。',
  url: 'https://yunlambert.github.io',
  github: 'https://github.com/YunLambert'
} as const;

export const interestTags = [
  'coding',
  'hiking',
  'designing',
  'photograph',
  'vibecoding',
  'music',
  'travel',
  'systems',
  'whales',
  'sunset',
  'starlight'
] as const;

export const domainOrder = ['code', 'photograph', 'article', 'travel', 'music'] as const;

export const domains = {
  code: {
    label: 'Code',
    title: 'Code Lab',
    eyebrow: 'C++ / NETWORK / AI-NATIVE TOOLS',
    href: '/code/',
    intro: '写系统、拆协议、做工具。这里放真正能跑、能解释、能继续演进的技术作品。',
    note: '当前重点：Yuno、MiniPlayer、Agent workflow，以及把复杂系统讲清楚的工程笔记。',
    cards: []
  },
  photograph: {
    label: 'Photograph',
    title: 'Photograph Notes',
    eyebrow: 'LIGHT / FRAME / MEMORY',
    href: '/photograph/',
    intro: '把光线、街道、山海和人的瞬间存下来。不是作品集压力，而是观察世界的方式。',
    note: '之后可以继续放摄影风格、设备、修图流程、旅行照片故事。',
    cards: []
  },
  article: {
    label: 'Article',
    title: 'Article Archive',
    eyebrow: 'BLOG / NOTES / LONG-FORM THINKING',
    href: '/article/',
    intro: '旧文章先保留，新文章再慢慢长出来。技术、旅行、生活观察都可以归到这里。',
    note: '历史文章保持原文，不伪装修订；新的文章页以后可以按主题扩展。',
    cards: [
      {
        title: 'Git 的一些常用命令',
        meta: '2020 · Historical archive',
        text: '早期 Git 笔记，保留原文并附历史归档提醒。',
        href: '/notes/git-commands/'
      },
      {
        title: '深度探索二维码及其应用',
        meta: '2019 · Historical archive',
        text: '关于二维码编码、纠错与艺术化的一次长篇探索。',
        href: '/notes/qr-code/'
      },
      {
        title: 'Next entries',
        meta: 'Future · Tech × Life',
        text: '后续适合写 Yuno 设计笔记、AI-native 播放器、旅行复盘和摄影观察。'
      }
    ]
  },
  travel: {
    label: 'Travel',
    title: 'Travel Atlas',
    eyebrow: 'HIKING / RAIL / SEA / CITY',
    href: '/travel/',
    intro: '走过的地方会反过来改变写代码的方式：耐心、路线、系统、边界和风景。',
    note: '这里先用抽象地点与情绪，不暴露精确住址、未来行程或私人信息。',
    cards: []
  },
  music: {
    label: 'Music',
    title: 'Music Room',
    eyebrow: 'VOICE / LOOP / EMOTION',
    href: '/music/',
    intro: '音乐是另一种工程：节奏、层次、情绪曲线，还有反复打磨后的完成感。',
    note: '之后可以放歌单、录音记录、歌词片段、吉他练习和创作草稿。',
    cards: []
  }
} as const;

export const featuredDomains = domainOrder.map((key) => ({ key, ...domains[key] }));

/**
 * Legacy abstract atlas data, kept for the existing AtlasMap component and future travel page reuse.
 * Labels stay coarse and non-private.
 */
export const atlasPoints = [
  { label: 'Coastal light', x: 76, y: 43, kind: 'horizon' },
  { label: 'Island wind', x: 83, y: 54, kind: 'memory' },
  { label: 'Mountain lines', x: 67, y: 49, kind: 'horizon' },
  { label: 'Northern rails', x: 61, y: 30, kind: 'memory' },
  { label: 'Old streets', x: 48, y: 37, kind: 'horizon' }
] as const;

export const timeline = [
  {
    mark: 'CODE',
    title: '先把东西做出来',
    text: '系统、协议、播放器、Agent 工具；真实项目是最好的学习路线。'
  },
  {
    mark: 'PHOTO',
    title: '把世界看清楚一点',
    text: '光、颜色、构图和地点，让页面不只是技术名片，也有生活质感。'
  },
  {
    mark: 'TRAVEL',
    title: '走远一点再回来',
    text: '旅行不是逃离工程，而是给工程补充更大的上下文。'
  },
  {
    mark: 'MUSIC',
    title: '留下节奏和情绪',
    text: '创作带来的完成感，会反过来推动学习和长期项目继续向前。'
  }
] as const;
