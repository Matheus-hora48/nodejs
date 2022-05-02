require('dotenv').config();
const express = require('express');
const app = express();

//serve para modelar a base de dados
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));

//serve para salvar um cookie no pc
const session = require('express-session');

//salvar a seções na bd 
const MongoStore = require('connect-mongo');

//mensagens autodescritrutiva
const flash = require('connect-flash');

//rotas da aplicação
const routes = require('./routes');

//caminhos
const path = require('path');

//proteção
const helmet = require('helmet');

//token para os form
const csrf = require('csurf');

//funções que sao executadas nas rotas no meio do caminho
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());

//formularios para aplicação
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//são os arquivo estaticos
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash());

//são os arquivos que renderiza na tela
app.set('views', path.resolve(__dirname, 'src', 'views'));

//tipo de engine que renderiza na tela
app.set('view engine', 'ejs');

//configurando o csrf token
app.use(csrf());

//os middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
