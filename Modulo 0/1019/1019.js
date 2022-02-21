const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');

let segundos = parseInt(lines[0]);

const horas = Math.floor(segundos / 3600);
segundos %= 3600;
const minutos = Math.floor(segundos / 60);
segundos %= 60;


console.log(`${horas}:${minutos}:${segundos}`);