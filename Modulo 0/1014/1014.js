const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');

const X = lines[0];
const Y = lines[1];

const consumoMedio = (X / Y).toFixed(3);

console.log(`${consumoMedio} km/l`);