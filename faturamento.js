const fs = require('fs');


const data = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'));


const diasComFaturamento = data.filter(d => d.faturamento > 0);


const menorFaturamento = Math.min(...diasComFaturamento.map(d => d.faturamento));
const maiorFaturamento = Math.max(...diasComFaturamento.map(d => d.faturamento));


const somaFaturamento = diasComFaturamento.reduce((acc, curr) => acc + curr.faturamento, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;

const diasAcimaDaMedia = diasComFaturamento.filter(d => d.faturamento > mediaMensal).length;

console.log(`Menor faturamento: ${menorFaturamento}`);
console.log(`Maior faturamento: ${maiorFaturamento}`);
console.log(`Dias com faturamento superior à média: ${diasAcimaDaMedia}`);
