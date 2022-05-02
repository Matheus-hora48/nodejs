const HomeModels = require('../models/homeModels')

// HomeModels.create({
//     titulo: 'Um titulo',
//     descricao: 'Uma descricao'
// })
    .then(dados => console.log(dados))
    .catch(e =>console.log(e))

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

