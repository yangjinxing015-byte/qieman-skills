#!/usr/bin/env node
/**
 * validate-report-swipe-deck.mjs
 * 且慢报告横向翻页 deck 静态校验
 */
import { readFileSync } from 'node:fs';

const file = process.argv[2];
if (!file) {
  console.error('Usage: node scripts/validate-report-swipe-deck.mjs <index.html>');
  process.exit(2);
}

const html = readFileSync(file, 'utf8');
const htmlNoComments = html.replace(/<!--[\s\S]*?-->/g, '');
const errors = [];
const warnings = [];

const ALLOWED = new Set([
  'R01', 'R02', 'R03', 'R04', 'R05', 'R06', 'R07', 'R08', 'R09', 'R10', 'R11', 'R12',
]);

const slideRe = /<section\b[^>]*class="[^"]*\bslide\b[^"]*"[^>]*>[\s\S]*?<\/section>/g;
const slides = [...htmlNoComments.matchAll(slideRe)].map((m, idx) => ({
  idx: idx + 1,
  html: m[0],
  tag: m[0].match(/<section\b[^>]*>/)?.[0] ?? '',
}));

if (!slides.length) errors.push('未找到 <section class="slide">。');
if (!html.includes('#deck')) errors.push('缺少 #deck 横向翻页容器。');
if (!html.includes('translateX') && !html.includes('100vw')) {
  warnings.push('未检测到 100vw 翻页 transform，请确认使用 template-report-swipe.html。');
}
if (html.includes('720pt')) {
  warnings.push('检测到 720pt 固定画布，横向翻页版应使用 100vw×100vh。');
}
if (html.includes('[必填]') && !file.includes('template-report-swipe')) {
  errors.push('仍存在 [必填] 占位符。');
}
if (/border:\s*1px\s+solid\s+#EDEDED/i.test(html)) {
  errors.push('白卡片使用了禁止的 #EDEDED 描边。');
}

slides.forEach((slide) => {
  const layout = slide.tag.match(/\bdata-layout="([^"]+)"/)?.[1];
  if (!layout) errors.push(`第 ${slide.idx} 页: 缺少 data-layout (R01–R12)。`);
  else if (!ALLOWED.has(layout)) errors.push(`第 ${slide.idx} 页: data-layout="${layout}" 未登记。`);

  if (!/\bdata-theme=/.test(slide.tag)) {
    warnings.push(`第 ${slide.idx} 页: 建议添加 data-theme (cover/section/light/page)。`);
  }
});

if (errors.length) {
  console.error('❌ validate-report-swipe-deck FAILED\n');
  errors.forEach((e) => console.error('  •', e));
  if (warnings.length) {
    console.error('\nWarnings:');
    warnings.forEach((w) => console.error('  ⚠', w));
  }
  process.exit(1);
}

console.log(`✅ validate-report-swipe-deck OK (${slides.length} slides)`);
if (warnings.length) warnings.forEach((w) => console.warn('⚠', w));
