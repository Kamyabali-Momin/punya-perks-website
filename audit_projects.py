import os
import json

projects = {
    'Deskmerit': r'C:\Users\Admin\Downloads\Deskmerit project',
    'Setbench': r'C:\Users\Admin\Downloads\SetBenchmark Website 2',
    'Squalible': r'C:\Users\Admin\Downloads\Squalible code updated 3'
}

for name, path in projects.items():
    print(f"\n============================== {name} DETAILS ==============================")
    
    # 1. Header component
    header_candidates = ['Header.tsx', 'DeskmeritHeader.tsx', 'Navbar.tsx']
    for hc in header_candidates:
        hp = os.path.join(path, 'src', 'components', hc)
        if os.path.exists(hp):
            with open(hp, encoding='utf-8') as f:
                lines = f.readlines()
            imports = [l.strip() for l in lines if l.startswith('import')]
            print(f"Header ({hc}): {len(lines)} lines | Imports: {imports[:4]}")
            break
            
    # 2. Footer component
    footer_candidates = ['Footer.tsx', 'DeskmeritFooter.tsx']
    for fc in footer_candidates:
        fp = os.path.join(path, 'src', 'components', fc)
        if os.path.exists(fp):
            with open(fp, encoding='utf-8') as f:
                lines = f.readlines()
            imports = [l.strip() for l in lines if l.startswith('import')]
            print(f"Footer ({fc}): {len(lines)} lines | Imports: {imports[:4]}")
            break
            
    # 3. CSS / Tokens
    styles_candidates = [
        ('src/styles/design-tokens.css', os.path.join(path, 'src', 'styles', 'design-tokens.css')),
        ('src/design-system/tokens.ts', os.path.join(path, 'src', 'design-system', 'tokens.ts')),
        ('src/index.css', os.path.join(path, 'src', 'index.css')),
        ('tailwind.config.js', os.path.join(path, 'tailwind.config.js'))
    ]
    for label, sp in styles_candidates:
        if os.path.exists(sp):
            with open(sp, encoding='utf-8') as f:
                content = f.read()
            print(f"Style file ({label}): {len(content)} chars | Preview: {repr(content[:100])}")
            
    # 4. Routing in App.tsx
    app_tsx = os.path.join(path, 'src', 'App.tsx')
    if os.path.exists(app_tsx):
        with open(app_tsx, encoding='utf-8') as f:
            app_code = f.read()
        routes_count = app_code.count('<Route')
        print(f"App.tsx: {len(app_code.splitlines())} lines | Route count: {routes_count}")

    # 5. Check data structures
    data_dir = os.path.join(path, 'src', 'data')
    if os.path.exists(data_dir):
        data_files = os.listdir(data_dir)
        print(f"Data files ({len(data_files)}): {data_files}")
