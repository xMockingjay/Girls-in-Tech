import app from './src/app.js'; // esta sendo importado um arquivo que não existe, será que não foi feito push?
/**
 * Afim de curiosidade, geralmente a comunidade usa a porta 80 e 8080 para serviços web, front-end ou as vezes banco de dados, mais isso não é regra.
 * No backend a galera curti usar faixas de 3000, 4000 e 5000, mas também não é regra
 */
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
})