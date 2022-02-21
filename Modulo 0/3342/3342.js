const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');

const n = parseInt(lines[0]);
console.log(typeof n);

function calculaCasas(tamanho) {
    if (tamanho % 2 === 0) {
        const multiplicador = tamanho / 2;
        console.log(`${tamanho * multiplicador} casas brancas e ${tamanho * multiplicador} casas pretas`)
    } else {
        const totalCasas = Math.pow(tamanho, 2);
        const casasPretas = Math.floor(totalCasas / 2);
        const casasBrancas = totalCasas - casasPretas;
        console.log(`${casasBrancas} casas brancas e ${casasPretas} casas pretas`)
    }
}

calculaCasas(n);