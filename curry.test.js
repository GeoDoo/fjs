const { curry } = require("./curry");

test("curry", () => {
  const add = (a, b, c) => a + b + c;
  const f = curry(add);

  expect(f(1)(2)(3)).toBe(6);
  expect(f(1)(2, 3)).toBe(6);
  expect(f(1, 2)(3)).toBe(6);
  expect(f(1, 2, 3)).toBe(6);
});
