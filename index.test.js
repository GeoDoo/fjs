const { getDaysFromSessionStorage } = require("./index");

test("getDaysFromSessionStorage", () => {
  const numOfDays = "5";
  const someOthernumOfDays = "10";

  /****************************** One way (the actual sessionStorage) ******************************/
  sessionStorage.setItem("foo", "bar");
  expect(getDaysFromSessionStorage(sessionStorage)).toBe(null);

  sessionStorage.setItem("numOfDays", numOfDays);
  expect(getDaysFromSessionStorage(sessionStorage)).toBe(numOfDays);

  // second test
  sessionStorage.setItem("numOfDays", someOthernumOfDays);
  expect(getDaysFromSessionStorage(sessionStorage)).toBe(someOthernumOfDays);

  /****************************** Another way (a plain object, custom mock) ******************************/
  const emptySession = {
    getItem: (_key) => null,
  };

  expect(getDaysFromSessionStorage(emptySession)).toBe(null);

  const session = {
    getItem: (_key) => numOfDays,
  };

  expect(getDaysFromSessionStorage(session)).toBe(numOfDays);

  // second test
  session.getItem = () => someOthernumOfDays;

  expect(getDaysFromSessionStorage(session)).toBe(someOthernumOfDays);

  /****************************** Another way (with a jset mock function stubbed) ******************************/
  const sessionSpy = {
    getItem: jest.fn().mockReturnValue(numOfDays),
  };
  const result = getDaysFromSessionStorage(sessionSpy);

  expect(sessionSpy.getItem).toHaveBeenCalledWith("numOfDays");
  expect(result).toBe(numOfDays);
});
