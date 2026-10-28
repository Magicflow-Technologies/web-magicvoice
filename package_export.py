import os
import glob
import zipfile
import shutil

OUT_DIR = os.path.abspath("out")
ZIP_NAME = "magicvoice-web-estatica.zip"

def main():
    print("=== Empaquetando exportación estática de Magic Voice ===")
    
    if not os.path.isdir(OUT_DIR):
        print(f"ERROR: No se encontró la carpeta '{OUT_DIR}'. Ejecuta primero 'npm run build'.")
        return

    # 1. Buscar el archivo CSS compilado
    css_files = glob.glob(os.path.join(OUT_DIR, "_next", "static", "css", "*.css"))
    if not css_files:
        print("ADVERTENCIA: No se encontró ningún archivo CSS en out/_next/static/css/")
        css_content = ""
    else:
        primary_css = css_files[0]
        print(f"CSS compilado encontrado: {primary_css}")
        with open(primary_css, "r", encoding="utf-8") as f:
            css_content = f.read()
        
        # Copiar a out/styles.css como fallback directo en la raíz
        styles_dest = os.path.join(OUT_DIR, "styles.css")
        shutil.copyfile(primary_css, styles_dest)
        print(f"CSS copiado a: {styles_dest} ({len(css_content)} bytes)")

    # 2. Inyectar CSS directamente en todos los archivos HTML
    html_count = 0
    for root, _, files in os.walk(OUT_DIR):
        for file in files:
            if file.endswith(".html"):
                html_path = os.path.join(root, file)
                with open(html_path, "r", encoding="utf-8") as f:
                    content = f.read()

                modified = False
                
                # Inyectar link a styles.css si no existe
                if 'href="/styles.css"' not in content and 'href="./styles.css"' not in content:
                    link_tag = '<link rel="stylesheet" href="/styles.css">'
                    if "</head>" in content:
                        content = content.replace("</head>", f"  {link_tag}\n</head>", 1)
                        modified = True

                # Inyectar CSS en línea para garantizar que NUNCA quede sin estilos
                if css_content and 'id="magicvoice-inlined-css"' not in content:
                    style_tag = f'<style id="magicvoice-inlined-css">\n{css_content}\n</style>'
                    if "</head>" in content:
                        content = content.replace("</head>", f"{style_tag}\n</head>", 1)
                        modified = True

                if modified:
                    with open(html_path, "w", encoding="utf-8") as f:
                        f.write(content)
                    html_count += 1
                    rel = os.path.relpath(html_path, OUT_DIR)
                    print(f"  [+] Estilos inyectados en: {rel}")

    print(f"Total HTMLs actualizados con CSS en línea: {html_count}")

    # 3. Asegurar que .htaccess exista en out/
    htaccess_out = os.path.join(OUT_DIR, ".htaccess")
    htaccess_pub = os.path.join("public", ".htaccess")
    if os.path.exists(htaccess_pub) and not os.path.exists(htaccess_out):
        shutil.copyfile(htaccess_pub, htaccess_out)
        print("Copiado .htaccess a out/")

    # 4. Crear el archivo ZIP con rutas POSIX (forward slashes '/')
    print(f"\nCreando archivo ZIP compatible con Linux: {ZIP_NAME}")
    if os.path.exists(ZIP_NAME):
        os.remove(ZIP_NAME)

    total_files = 0
    with zipfile.ZipFile(ZIP_NAME, "w", zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(OUT_DIR):
            for file in files:
                abs_file = os.path.join(root, file)
                rel_file = os.path.relpath(abs_file, OUT_DIR)
                # OBLIGATORIO: Usar / en lugar de \ para Linux / cPanel
                posix_arcname = rel_file.replace("\\", "/")
                zf.write(abs_file, posix_arcname)
                total_files += 1

    zip_size_mb = os.path.getsize(ZIP_NAME) / (1024 * 1024)
    print(f"ÉXITO: Se comprimieron {total_files} archivos en {ZIP_NAME} ({zip_size_mb:.2f} MB)")
    print("Todas las rutas dentro del ZIP usan '/' (compatibilidad 100% con cPanel / Apache / LiteSpeed / Linux).")

if __name__ == "__main__":
    main()
