const fs = require('fs');
const path = require('path');

// Verificar que se haya pasado un argumento
if (process.argv.length < 3) {
  console.error('Uso: node index.js <ruta-del-archivo-zip>');
  process.exit(1);
}

// Ruta del archivo ZIP
const zipPath = process.argv[2];

// Verificar que exista el archivo
if (!fs.existsSync(zipPath)) {
  console.error(`Archivo no encontrado: ${zipPath}`);
  process.exit(1);
}

// Leer archivo ZIP
const zipBuffer = fs.readFileSync(zipPath);

// Convertir a Base64
const zipBase64 = zipBuffer.toString('base64');

// Guardar el resultado en un archivo de texto (opcional)
const outputPath = path.basename(zipPath, '.zip') + '_base64.txt';
fs.writeFileSync(outputPath, zipBase64);

console.log(`Archivo convertido a Base64 y guardado en: ${outputPath}`);
