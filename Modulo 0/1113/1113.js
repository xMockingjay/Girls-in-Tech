const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');

console.log(lines.length);

const linhas = (lines.length) / 2;