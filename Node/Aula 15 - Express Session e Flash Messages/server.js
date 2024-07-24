require('dotenv').config();
const express = require('express');
const app = express();
const { default: mongoose } = require('mongoose');

// Conexão com o MongoDB
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('pronto');
  })
  .catch(err => {
    console.error('Erro ao conectar à base de dados:', err);
  });

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { connect } = require('http2');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'teste',
  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true
    }
  })
})

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

// Evento 'pronto'
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
