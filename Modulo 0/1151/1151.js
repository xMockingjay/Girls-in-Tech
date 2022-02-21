const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');

const N = parseInt(lines[0]);

let fibonacci = [0, 1];

for (let i = 2; i < N; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
}
console.log(fibonacci);