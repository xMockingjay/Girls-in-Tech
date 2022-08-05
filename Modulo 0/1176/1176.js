const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');

const numeroCasos = parseInt(lines[0]);
let maior = 0;

//Encontra o maior numero para criar a série de Fibonacci
for (let i = 1; i <= numeroCasos; i++) {
    let parsedNumber = parseFloat(lines[i]);
    if (parsedNumber > maior) {        
        maior = parsedNumber;
    }    
}

for (var j = 2; j <= casoTeste; j++) {
    fibonacci.push(fibonacci[j - 2] + fibonacci[j - 1]);
}






// let indiceNumero = 1;

// for(let i = 1; i <= numeroCasos; i++) {
//     let casoTeste = parseInt(lines[i]);
//     for (var j = 2; j <= casoTeste; j++) {
//         fibonacci.push(fibonacci[j - 2] + fibonacci[j - 1]);
//         indiceNumero++;
//     }
//     console.log(`Fib(${casoTeste}) = ${fibonacci[j - 1]}`);
// }
