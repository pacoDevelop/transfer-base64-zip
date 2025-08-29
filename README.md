# zip-to-base64 / base64-to-zip

## Descripción / Description

**Español:**
Este proyecto proporciona scripts de Node.js para **convertir archivos ZIP a Base64** y viceversa. Permite transformar archivos ZIP en una cadena Base64 para facilitar su transferencia, almacenamiento en bases de datos o envío por canales que solo aceptan texto, y reconstruirlos nuevamente en su formato original.

**English:**
This project provides Node.js scripts to **convert ZIP files to Base64** and vice versa. It allows transforming ZIP files into a Base64 string for easy transfer, database storage, or transmission over text-only channels, and also reconstruct them back into their original format.

---

## Características / Features

* Convertir cualquier archivo ZIP a una cadena Base64 / Convert any ZIP file to a Base64 string.
* Guardar automáticamente el resultado en un archivo de texto con sufijo `_base64.txt` / Automatically save the result to a text file with `_base64.txt` suffix.
* Manejo básico de errores: verifica que se proporcione un archivo y que exista / Basic error handling: checks that a file is provided and exists.
* Ligero y sin dependencias externas, solo Node.js / Lightweight and dependency-free, only Node.js standard modules.

---

## Instalación / Installation

1. Clonar el repositorio / Clone the repository:

```bash
git clone https://github.com/usuario/zip-to-base64.git
cd zip-to-base64
```

2. Instalar dependencias (si las hubiera) / Install dependencies (if any):

```bash
npm install
```

---

## Uso / Usage

### Convertir ZIP a Base64 / Convert ZIP to Base64

```bash
node index.js archivo.zip
```

Esto generará `archivo_base64.txt` con el contenido codificado en Base64.
This will generate `archivo_base64.txt` containing the Base64-encoded content.

### Reconstruir ZIP desde Base64 / Reconstruct ZIP from Base64

```bash
node decode-zip.js archivo_base64.txt
```

Esto generará `archivo.zip` reconstruido a partir del Base64.
This will generate `archivo.zip` reconstructed from the Base64 content.

---

## Ejemplo / Example

**Español:**

```bash
node index.js ejemplo.zip
# Genera ejemplo_base64.txt

node decode-zip.js ejemplo_base64.txt
# Genera ejemplo.zip
```

**English:**

```bash
node index.js example.zip
# Generates example_base64.txt

node decode-zip.js example_base64.txt
# Generates example.zip
```

---

## Licencia / License

GNU General Public License v3.0
