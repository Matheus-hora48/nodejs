const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>0lá mundo</button>
    </form>
    `);
    });

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado pelo contato');
});

app.listen(3000, () =>{
    console.log('Teste')
})

app.listen (3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});