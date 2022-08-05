const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split('\n');

const quantidadeTitas = Number(lines[0].split(' ')[0]);
const tamanhoMuralha = Number(lines[0].split(' ')[1]);

const ataqueP = Number(lines[2].split(' ')[0]);
const ataqueM = Number(lines[2].split(' ')[1]);
const ataqueG = Number(lines[2].split(' ')[2]);

const ordemAtaque = lines[1].split(" ").toString();

let muralhasNecessarias = 1;
let danoTotal

for (let i = 0; i < quantidadeTitas; i++) {
    let titaNoAtaque = ordemAtaque.charAt(i);
    if (titaNoAtaque == 'P') {
        tamanhoMuralha -= ataqueP;
    } else if (titaNoAtaque == 'M') {
        tamanhoMuralha -= ataqueM;
    } else {
        tamanhoMuralha -= ataqueG;
    }

    console.log(tamanhoMuralha);

    if (tamanhoMuralha <= 0) {
        muralhasNecessarias++;
        tamanhoMuralha += tamanhoMuralha;
    }
    console.log(muralhasNecessarias);
}