const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');

let salario = parseFloat(lines[0]);

if (salario <= 2000) 
    return console.log(`Isento`);

const impostoA = 0.08;
const impostoB = 0.18;
const impostoC = 0.28;


if (salario > 3000 && salario < 2000.01) {
    let impostoTotal = ((salario - 2000) * impostoA).toFixed(2);
    console.log(`R$ ${impostoTotal}`);
} else if (salario > 3000.01 && salario < 4500) {
        let impostoTotal = (((salario - 3000) * impostoB) + (1000 * impostoA)).toFixed(2);
        console.log(`R$ ${impostoTotal}`);
    } else if (salario > 4500) {
            let impostoTotal = (((salario - 4500) * impostoC) + (1500 * impostoB) + (1000 * impostoA)).toFixed(2);
            console.log(`R$ ${impostoTotal}`);
        }