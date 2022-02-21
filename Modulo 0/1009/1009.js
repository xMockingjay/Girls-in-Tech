var input = require('fs').readFileSync('./1009/stdin', 'utf8');
var lines = input.split('\n');

const nome = lines[0];
const salario = lines[1];
const totalVendas = lines[2];

const comissao = totalVendas * (15 / 100);
const totalSalarioComissao = salario + comissao;

console.log(`Salário: ${salario}`);
console.log(`Total vendas: ${totalVendas}`);
console.log(`Comissão: ${comissao}`);
console.log(`TotalSalarioComissao: ${totalSalarioComissao}`);
