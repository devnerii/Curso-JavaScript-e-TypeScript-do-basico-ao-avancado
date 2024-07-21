require('dotenv').config();
const express = require('express');
const app = express();
const { default: mongoose } = require('mongoose');

// Conexão com o MongoDB
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('Conectado à base de dados.');
    app.emit('pronto');
  })
  .catch(err => {
    console.error('Erro ao conectar à base de dados:', err);
  });

const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

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
