const fs = require('fs');
const path = require('path');

// Verificar que se haya pasado un argumento
if (process.argv.length < 3) {
  console.error('Uso: node decode-zip.js <archivo-base64.txt>');
  process.exit(1);
}

// Ruta del archivo Base64
const base64Path = process.argv[2];

// Verificar que exista
if (!fs.existsSync(base64Path)) {
  console.error(`Archivo no encontrado: ${base64Path}`);
  process.exit(1);
}

// Leer el contenido Base64
const base64Content = fs.readFileSync(base64Path, 'utf8');

// Convertir Base64 a Buffer
const zipBuffer = Buffer.from(base64Content, 'base64');

// Guardar como ZIP
const outputZip = path.basename(base64Path, path.extname(base64Path)) + '.zip';
fs.writeFileSync(outputZip, zipBuffer);

console.log(`Archivo ZIP reconstruido correctamente: ${outputZip}`);
