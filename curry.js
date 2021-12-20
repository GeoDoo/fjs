const curry = (func) => {
  const curried = (...args1) => {
    if (args1.length >= func.length) {
      return func(...args1);
    } else {
      return (...args2) => {
        return curried(...args1.concat(args2));
      };
    }
  };

  return curried;
};

module.exports = { curry };
