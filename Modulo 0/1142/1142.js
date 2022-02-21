const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');

const linhas = lines[0];
let numero = 1;

for (let i = 0; i < linhas; i++) {
    for( let j = 0; j < 4; j++) {
        if(numero % 4 == 0) {
            console.log(`PUM`);
        } else {
            console.log(`${numero}`);
        }

    }    
}