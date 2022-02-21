const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');

const tamanhoVetor = lines.length;
let maior = 0;
let posicao = 0;

for (let i = 0; i < tamanhoVetor; i++) {
    let parsedNumber = parseFloat(lines[i]);
    if (parsedNumber > maior) {        
        maior = parsedNumber;
        posicao = i + 1;
    }    
}
console.log(`${maior}`);
console.log(`${posicao}`);