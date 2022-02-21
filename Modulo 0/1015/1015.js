let input = require('fs').readFileSync('./stdin', 'utf8');
let lines = input.split(' ');

const x1 = lines[0];
const y1 = lines[1];
const x2 = lines[2];
const y2 = lines[3];

let moduloDistancia = Math.abs(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
let distanciaFinal = moduloDistancia.toFixed(4);

console.log(distanciaFinal);