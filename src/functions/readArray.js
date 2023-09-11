const path = require('path');
const fs = require('fs');

const readArray = (fileName) => {
  return fs.readFileSync(
    path.join(__dirname, '..', 'data', fileName),
    'utf-8'
  )
    .split('\n')
    .map((value) => Number(value));
}

module.exports = readArray;
