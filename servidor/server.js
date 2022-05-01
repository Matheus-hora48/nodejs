const express = require('express');
const app = express();

app.use(
    express.urlencoded
)

app.get('/', (req, res) => {
res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>0lá mundo</button>
    </form>
    `);
});

app.get('/teste', (req, res) =>{
    //req.body vai aparece as coisa que foram enviada por um formulario na requisição do body (de acordo com o name do form)
    //req.query as query que vem na url /profiles/3
    //req.params partes que vem na rota da url /profiles/?chave1= valor
    //cada uma vai pegar um tipo de url
    res.send('Olá')
})

app.post('/', (req, res) => {
res.send('Recebi o formulário');
});

app.listen(3000, () => {
console.log('Acessar http://localhost:3000');
console.log('Servidor executando na porta 3000');
});