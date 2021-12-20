const { add } = require("./math");

test("lala", () => {
  expect(add(1, 2)).toBe(3);
});

test("lala", () => {
  expect(add('1', '2')).toBe(3);
});
