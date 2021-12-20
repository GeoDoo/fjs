const curry = (func) => {
  const curried = (...args) =>
    args.length >= func.length
      ? func(...args)
      : (...accArgs) => curried(...args.concat(accArgs));

  return curried;
};

module.exports = { curry };
