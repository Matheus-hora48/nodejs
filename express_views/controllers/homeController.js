//onde vai ficar as coisa que vai aparecer nas rotas
exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <button>0lá mundo</button>
        </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send(`
        Ei, sou sua nova rota de post
    `);
}

