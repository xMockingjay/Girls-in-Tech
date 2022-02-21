const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');
const cardapio = require("./cardapio.js");

const codigo = lines[0];
const quantidade = lines[1];

const valorProduto = cardapio[codigo - 1].preco;
const valorTotal = (quantidade * valorProduto).toFixed(2);

console.log(`Total: R$ ${valorTotal}`);
