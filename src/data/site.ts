export const site = {
  name: 'Yun Lambert',
  title: 'Yun Lambert — 写系统，也走世界。',
  description:
    '写系统，也走世界。Building systems, collecting horizons. 关于网络系统、媒体技术与远方的个人主页。',
  url: 'https://yunlambert.github.io',
  github: 'https://github.com/YunLambert'
} as const;

export const projects = [
  {
    id: '01',
    name: 'Yuno',
    eyebrow: 'NETWORK SYSTEMS',
    summary: 'A C++20 network and media systems laboratory: event loops, protocols, and composable infrastructure.',
    tags: ['C++20', 'Networking', 'Media'],
    href: 'https://github.com/YunLambert',
    linkLabel: 'GitHub profile',
    motif: 'orbit'
  },
  {
    id: '02',
    name: 'MiniPlayer',
    eyebrow: 'DESKTOP EXPERIENCE',
    summary: 'A focused playback experiment shaped around small surfaces, calm controls, and native performance.',
    tags: ['Native UI', 'Playback', 'Product'],
    motif: 'wave'
  },
  {
    id: '03',
    name: 'BotsWorkflow',
    eyebrow: 'AGENT WORKFLOWS',
    summary: 'Exploring how small agents coordinate tools, context, and human checkpoints without losing clarity.',
    tags: ['Automation', 'Agents', 'Workflow'],
    motif: 'nodes'
  }
] as const;

/**
 * Atlas entries are intentionally abstract and coarse-grained.
 * Edit labels and normalized x/y coordinates here; do not add precise locations.
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
    mark: 'SIGNAL',
    title: 'Learning to see systems',
    text: 'From error-correcting codes to event loops: looking for the small rules beneath visible behavior.'
  },
  {
    mark: 'CURRENT',
    title: 'Building closer to the wire',
    text: 'Working across modern C++, networking, real-time media, and tools that make complex flows legible.'
  },
  {
    mark: 'HORIZON',
    title: 'Collecting wider contexts',
    text: 'Travel as another kind of systems study — observing pace, infrastructure, language, and light.'
  },
  {
    mark: 'RETURN',
    title: 'Bringing the view back',
    text: 'Turning field notes into calmer interfaces, sturdier software, and questions worth exploring next.'
  }
] as const;
