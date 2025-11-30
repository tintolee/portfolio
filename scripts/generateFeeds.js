#!/usr/bin/env node
/**
 * Generates RSS (feed.xml) and JSON Feed (feed.json) from projects.json
 */
const fs = require('fs');
const path = require('path');

const projectsPath = path.resolve(__dirname, '../src/content/projects.json');
const outRss = path.resolve(__dirname, '../public/feed.xml');
const outJson = path.resolve(__dirname, '../public/feed.json');

function loadProjects() {
  const raw = fs.readFileSync(projectsPath, 'utf-8');
  return JSON.parse(raw);
}

function generateRSS(projects) {
  const items = projects
    .map(p => `    <item>\n      <title>${escapeXml(p.title)}</title>\n      <link>https://www.oluwatosinadelaja.com/projects#${p.slug}</link>\n      <description>${escapeXml(p.summary)}</description>\n    </item>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Oluwatosin Adelaja Portfolio Feed</title>\n    <link>https://www.oluwatosinadelaja.com/</link>\n    <description>Updates and new projects from Oluwatosin Adelaja.</description>\n    <language>en</language>\n${items}\n  </channel>\n</rss>\n`;}

function generateJSONFeed(projects) {
  const items = projects.map(p => ({
    id: p.slug,
    url: `https://www.oluwatosinadelaja.com/projects#${p.slug}`,
    title: p.title,
    content_text: p.summary
  }));
  return JSON.stringify({
    version: 'https://jsonfeed.org/version/1',
    title: 'Oluwatosin Adelaja Portfolio Feed',
    home_page_url: 'https://www.oluwatosinadelaja.com/',
    feed_url: 'https://www.oluwatosinadelaja.com/feed.json',
    description: 'Updates and new projects from Oluwatosin Adelaja.',
    items
  }, null, 2);
}

function escapeXml(str) {
  return str.replace(/[<>&'\"]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','\"':'&quot;','\'':'&apos;' }[c]));
}

function run() {
  const projects = loadProjects();
  fs.writeFileSync(outRss, generateRSS(projects));
  fs.writeFileSync(outJson, generateJSONFeed(projects));
  console.log(`Generated ${outRss} and ${outJson}`);
}

run();
