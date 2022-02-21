const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');

const N = parseInt(lines[0]);

let fibonacci = [1, 1];

for (let i = 2; i < N; i++) {
    fibonacci.unshift(fibonacci[0] + fibonacci[1]);
}
console.log(fibonacci);