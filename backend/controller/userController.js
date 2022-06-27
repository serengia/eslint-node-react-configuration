exports.getUser = function (req, res, next) {
  res.status(200).json({
    data: "<Data here...>",
  });
};

exports.createUser = (req, res, next) => {
  // const { name, email, password, passwordConfirm } = req.body;

  // Will throw Eslint, prefer-destructuring error
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const passwordConfirm = req.body.passwordConfirm;

  console.log(name, email, password, passwordConfirm);

  res.status(200).json({
    data: "<Data here...>",
  });
};
