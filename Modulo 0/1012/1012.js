const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split(' ');

const A = lines[0];
const B = lines[1];
const C = lines[2];

const pi = (Math.PI).toFixed(5);

const areaTriangulo = ((A * C) / 2).toFixed(3);
const areaCirculo = (pi * (Math.pow(C, 2))).toFixed(3);
const areaQuadrado = (Math.pow(B, 2)).toFixed(3);
const areaRetangulo = (A * B).toFixed(3);

const parsedA = parseFloat(A);
const parsedB = parseFloat(B);
const areaTrapezio = (((parsedA + parsedB) * C) / 2).toFixed(3);


console.log(`TRIANGULO: ${areaTriangulo}`);
console.log(`CIRCULO: ${areaCirculo}`);
console.log(`TRAPEZIO: ${areaTrapezio}`);
console.log(`QUADRADO: ${areaQuadrado}`);
console.log(`RETANGULO: ${areaRetangulo}`);