# Qieman UI Design Spec — Summary (EN)

This file is a concise English summary of the Qieman UI design guidelines.

## Design tokens

### Brand
- Brand primary: **#1B88EE**
- Poster/Header background: **#3180EC**
- Summary background: **#DBEBFF**
- Summary border: **#9CCBF8**

### Text colors
- Neutral: **#333333**
- Neutral subtle: **#606060**
- Neutral subtler: **#999999**
- Neutral subtlest: **#CCCCCC**
- Inverse: **#FFFFFF**
- Primary/Link: **#1B88EE**

### Semantic colors
- Error / Sell / Up: **#FA440C**
- Warning: **#EA9500**
- Success / Buy / Down: **#07AD8F**

### Background & card
- Page background: **#F9FAFB**
- Card default: **#FFFFFF**
- Card deep: **#F9FAFB**
- Card deeper: **#F7F7F7**
- Card primary faded: **#F0F6FF**
- Card warning faded: **#FFFAEF**
- Card error faded: **#FEEDE9**

### Borders
- Neutral: **#D8D8D8**
- Primary: **#1B88EE**
- Blue: **#9CCBF8**
- Yellow: **#FFDC9E**
- Red: **#FAB6A5**

### Chart palette (use in order)
1. #69B1F4  2. #F88D72  3. #FBCA74  4. #7DD4C4  
5. #68E0F3  6. #ADAFE8  7. #3A7BB8  8. #FAB6A5  
9. #EDC273 10. #9CCBF8 11. #C8CAEF 12. #6B9CCA

### Typography
- Title sizes: **32 / 26 / 24 / 19 / 18**
- Body sizes: **17 / 16 / 15**
- Caption sizes: **14 / 13 / 12 / 11**
- Font families:
  - Heading: `Poppins, Arial, sans-serif`
  - Body: `Lora, Georgia, serif`
  - Mono: `'Courier New', monospace`

### Spacing & radius
- Module spacing: **16px**
- Card padding: **12px**
- Radius: **8px / 12px / 24px**

## Components (baseline)

### Buttons
- Primary: bg **#1B88EE**, text **#FFFFFF**, radius **8px**, padding **12px 24px**
  - Hover: **#1580E0**, Active: **#0F78D4**, Disabled: **#CCCCCC**
- Text button: bg transparent, text **#1B88EE**
  - Hover underline, Active **#0F78D4**, Disabled **#CCCCCC**

### Cards
- Base: bg **#FFFFFF**, radius **8px**, padding **12px**, shadow `0 1px 3px rgba(0,0,0,0.1)`
- Highlight: bg **#F0F6FF**, border **#9CCBF8**, radius **12px**, padding **12px**
- Warning: bg **#FFFAEF**, border **#FFDC9E**, radius **12px**, padding **12px**
- Error: bg **#FEEDE9**, border **#FAB6A5**, radius **12px**, padding **12px**

## Layout patterns (4:3 HTML prototype)
- Poster/Header: left text + right illustration, title 32pt inverse, subtitle 16pt inverse, bg **#3180EC**
- Summary block: bg **#DBEBFF**, border **#9CCBF8**, radius **12px**, padding **12px**
- Content: module spacing **16px**, cards default **#FFFFFF** + radius **8px** + padding **12px**
- Footer: bg **#3180EC**, text inverse

## Icons & charts
- Icons: RemixIcon (typical sizes 16/20/24/32)
- Charts: Apache ECharts (bar/line/pie/scatter/area/radar/gauge)

## Accessibility & QA
- Aim for WCAG AA contrast (>= 4.5:1) where applicable
- Always define loading/empty/error states for key views
- Keep spacing/radius consistent and driven by tokens
