const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');

const linhas = lines[0];
let numero = 1;

for (let i = 0; i < linhas; i++) {
    console.log(`${numero} ${Math.pow(numero, 2)} ${Math.pow(numero, 3)}`);   
    numero++;
}