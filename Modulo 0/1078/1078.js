const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');

const N = lines[0];

for (let i = 1; i < 11; i++) {
    const resultado = N * i;
    console.log(`${i} x ${N} = ${resultado}`);
}