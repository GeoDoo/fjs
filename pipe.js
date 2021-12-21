const pipe =
  (...funcs) =>
  (initArg) =>
    funcs.reduce((acc, f) => f(acc), initArg);

module.exports = { pipe };
