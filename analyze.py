import json
import re

# 1. Parse sitemap_structured.txt
with open('sitemap_structured.txt', encoding='utf-8') as f:
    lines = [line.strip() for line in f]

# Extract all tables
tables = []
current_table = []
in_table = False
for line in lines:
    if line == '[TABLE START]':
        in_table = True
        current_table = []
        continue
    elif line == '[TABLE END]':
        in_table = False
        tables.append(current_table)
        continue
    if in_table:
        current_table.append(line)

print(f"Total tables found in sitemap: {len(tables)}")
for i, t in enumerate(tables):
    print(f"Table {i+1} rows: {len(t)} | Header: {t[0] if t else 'Empty'}")

# Table 0: Page inventory (38 pages)
# Table 1: Page-by-page content outline
# Table 2: Templates and reusable components (9 templates)
# Table 3: Footer, utility and legal pages (7 pages)
# Table 4: Open decisions (7 decisions)

# Parse table 0 (primary pages)
primary_pages = []
for row in tables[0][1:]:
    parts = [p.strip() for p in row.split('|')]
    if len(parts) >= 7:
        primary_pages.append({
            'section': parts[0],
            'page': parts[1],
            'url': parts[2],
            'purpose': parts[3],
            'audience': parts[4],
            'priority': parts[5],
            'primary_cta': parts[6]
        })

print(f"\nParsed {len(primary_pages)} primary pages from sitemap Table 1.")

# Parse table 1 (page outlines)
page_outlines = {}
for row in tables[1][1:]:
    parts = [p.strip() for p in row.split('|')]
    if len(parts) >= 3:
        page_outlines[parts[0]] = {
            'sections': parts[1],
            'template': parts[2]
        }
print(f"Parsed {len(page_outlines)} page outlines from sitemap Table 2.")

# Parse table 2 (templates)
templates = []
for row in tables[2][1:]:
    parts = [p.strip() for p in row.split('|')]
    if len(parts) >= 3:
        templates.append({
            'template': parts[0],
            'used_by': parts[1],
            'must_include': parts[2]
        })
print(f"Parsed {len(templates)} templates from sitemap Table 3.")

# Parse table 3 (footer/utility pages)
utility_pages = []
for row in tables[3][1:]:
    parts = [p.strip() for p in row.split('|')]
    if len(parts) >= 3:
        utility_pages.append({
            'page': parts[0],
            'url': parts[1],
            'note': parts[2]
        })
print(f"Parsed {len(utility_pages)} utility/legal pages from sitemap Table 4.")

# Parse table 4 (open decisions)
open_decisions = []
for row in tables[4][1:]:
    parts = [p.strip() for p in row.split('|')]
    if len(parts) >= 4:
        open_decisions.append({
            'id': parts[0],
            'decision': parts[1],
            'owner': parts[2],
            'blocks': parts[3]
        })
print(f"Parsed {len(open_decisions)} open decisions from sitemap Table 5.")

# Now parse Option B Page 2 (PDF table of contents)
with open('Punya-Perks-Website-Option-B-Jade.pdf_page_2.txt', encoding='utf-8') as f:
    b_toc = f.read()

pdf_sheets = []
# Lines like: " 5.  Loyalty Program Software for India, Australia & NZ\nMain  ·  1440×9642"
pattern = re.compile(r'^\s*(\d+)\.\s+(.*?)\n([^\n·]+)\s+·\s+([0-9]+×[0-9]+)', re.MULTILINE)
for m in pattern.finditer(b_toc):
    pdf_sheets.append({
        'sheet_num': int(m.group(1)),
        'title': m.group(2).strip(),
        'identifier': m.group(3).strip(),
        'dimensions': m.group(4).strip()
    })

print(f"\nParsed {len(pdf_sheets)} sheets from Option B PDF TOC.")
for s in pdf_sheets:
    print(f"Sheet {s['sheet_num']:2d}: {s['identifier']} | {s['dimensions']} | {s['title']}")
