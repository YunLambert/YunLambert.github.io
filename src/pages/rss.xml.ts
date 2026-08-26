import type { APIRoute } from 'astro';

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;'
}[character] ?? character));

const notes = [
  {
    title: 'Git 的一些常用命令',
    description: '2020 年 Git 命令笔记历史归档。',
    date: '2020-01-24T00:00:00+08:00',
    path: '/notes/git-commands/'
  },
  {
    title: '深度探索二维码及其应用',
    description: '2019 年二维码原理与艺术二维码笔记历史归档。',
    date: '2019-01-15T00:00:00+08:00',
    path: '/notes/qr-code/'
  }
];

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://yunlambert.github.io');
  const items = notes.map((note) => {
    const link = new URL(note.path, root).href;
    return `<item><title>${escapeXml(note.title)}</title><description>${escapeXml(note.description)}</description><link>${link}</link><guid>${link}</guid><pubDate>${new Date(note.date).toUTCString()}</pubDate></item>`;
  }).join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Yun Lambert Notes</title><description>Archived technical notes</description><link>${root.href}</link>${items}</channel></rss>`, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  });
};
