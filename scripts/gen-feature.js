const fs = require('fs');
const path = require('path');

const featureName = process.argv[2];

if (!featureName) {
    console.error('Error: Debes proporcionar un nombre.');
    process.exit(1);
}

const baseDir = path.join(__dirname, '../src/features', featureName);
const folders = ['components', 'hooks', 'services', 'mappers', 'types'];

// Crear carpetas
folders.forEach(folder => {
    fs.mkdirSync(path.join(baseDir, folder), { recursive: true });
});

// Crear index.ts básico
// fs.writeFileSync(path.join(baseDir, 'index.ts'), `export * from './hooks/use${featureName.charAt(0).toUpperCase() + featureName.slice(1)}';\n`);

console.log(`✅ Feature ${featureName} creada con éxito.`);