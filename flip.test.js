const { flip } = require("./flip");

test("flip", () => {
  const f = (key, value) => ({ [key]: value });
  const flipped = flip(f);

  expect(flipped("Bob", "name")).toEqual(f("name", "Bob"));
});
