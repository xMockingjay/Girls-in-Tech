const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');
console.log(lines);

const tamanhoVetor = lines.length;
let maior = 0;
let posicao = 0;

for (let i = 0; i < tamanhoVetor; i++) {
    if (lines[i] > maior) {
        maior = lines[i];
        posicao = i + 1;
    }
}

console.log(`${maior}`);
console.log(`${posicao}`);