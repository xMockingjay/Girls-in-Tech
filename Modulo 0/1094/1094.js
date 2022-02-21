const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');

const N = parseInt(lines[0]);

let coelhos = 0;
let ratos = 0;
let sapos = 0;

 for (let i = 1; i < N * 2; i = i + 2) {    
    let quantidade = parseInt(lines[i]);

    if (lines[i + 1] == 'C') {
        coelhos += quantidade;
    } else if (lines[i + 1] == 'R') {
        ratos += quantidade;
    } else {
        sapos+= quantidade;
    }
 }

 const totalCobaias = coelhos + ratos + sapos;

 console.log(`Total: ${totalCobaias} cobaias`);
 console.log(`Total de coelhos: ${coelhos}`);
 console.log(`Total de ratos: ${ratos}`);
 console.log(`Total de sapos: ${sapos}`);
 console.log(`Percentual de coelhos: ${((coelhos * 100) / totalCobaias).toFixed(2)} %`);
 console.log(`Percentual de ratos: ${((ratos * 100) / totalCobaias).toFixed(2)} %`);
 console.log(`Percentual de sapos: ${((sapos * 100) / totalCobaias).toFixed(2)} %`);
