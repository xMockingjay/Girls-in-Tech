const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');

const quantidade = lines[0];

for (let i = 1; i <= quantidade; i++) {
    if (lines[i] == 0) {
        console.log(`NULL`);
    }
    if (Math.abs(lines[i]) % 2 === 0) {
    console.log(`EVEN`);        
    } else {
            console.log(`ODD`);
    }
    if (lines[i] < 0) {
        console.log(`NEGATIVE`);
    } else {
        console.log(`POSITIVE`);
    }
}