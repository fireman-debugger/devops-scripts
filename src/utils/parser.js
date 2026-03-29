const fs = require('fs');
const path = require('path');

const parser = {
  parseFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    const parsedData = {};

    for (const line of lines) {
      if (line.trim().startsWith('#')) {
        const key = line.trim().replace(/#.*/, '').trim();
        const value = lines.find((l) => l.trim().startsWith(`  ${key}`));
        if (value) {
          parsedData[key] = value.trim().replace(`  ${key}`, '').trim();
        }
      }
    }

    return parsedData;
  },
};

module.exports = { parser };