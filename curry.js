const curry = (func) => {
  const curried = (...accArgs) =>
    accArgs.length >= func.length
      ? func(...accArgs)
      : (...args) => curried(...accArgs.concat(args));

  return curried;
};

module.exports = { curry };
