const { pipe } = require("./pipe");

test("pipe", () => {
  const increment = (num) => num + 1;
  const decrement = (num) => num - 1;
  const double = (num) => num * 2;
  const half = (num) => num / 2;
  const f = pipe(increment, half);
  const g = pipe(decrement, double);

  expect(f(6)).toBe(3.5);
  expect(g(6)).toBe(10);
});
