const curry = (func) => {
  const curried = (...args) =>
    args.length >= func.length
      ? func(...args)
      : (...rest) => curried(...args.concat(rest));

  return curried;
};

module.exports = { curry };
