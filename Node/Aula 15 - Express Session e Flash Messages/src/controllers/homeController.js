const HomeModel = require('../models/HomeModel');

HomeModel.create({
  titulo: 'Um título de testes.',
  descricao: 'Uma descrição de testes.'
})
  .then(dados => console.log(dados)).catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
  req.session.usuario = {
    nome: 'Luiz', logado: true
  }
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST.');
};
