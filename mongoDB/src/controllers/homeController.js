//onde vai ficar as coisa que vai aparecer nas rotas
exports.paginaInicial = (req, res, next) => {
    res.render('index');
    return
}

exports.trataPost = (req, res, next) => {
    res.send(`
        Ei, sou sua nova rota de post
    `);
    return
}

