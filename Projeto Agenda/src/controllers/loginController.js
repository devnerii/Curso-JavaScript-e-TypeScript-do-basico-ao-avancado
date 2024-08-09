const Login = require("../models/LoginModel");

exports.index = (req, res) => {
  res.render("login", { csrfToken: req.csrfToken() });
};

exports.register = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(function () {
        return res.redirect("/login/index");
      });
      return;
    }

    req.flash("success", 'Seu usuário foi criado com sucesso.');
    req.session.save(function () {
      return res.redirect("/login/index");
    });

  } catch (error) {
    console.log(error);
    return res.render("404");
  }
};
