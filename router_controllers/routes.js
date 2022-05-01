const express = require('express');
const route = express. Router();
const homeController = require('./controllers/homeController');

// Rotas da home - onde vai ficara a referencia para as rotas
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);


module.exports = route;