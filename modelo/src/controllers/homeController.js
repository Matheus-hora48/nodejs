//onde vai ficar as coisa que vai aparecer nas rotas
exports.paginaInicial = (req, res) => {
    res.render('index');
}

exports.trataPost = (req, res) => {
    res.send(`
        Ei, sou sua nova rota de post
    `);
}

