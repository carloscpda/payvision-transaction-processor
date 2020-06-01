const Id = require("../../src/models/Id");

describe("Id.isValidId method", () => {
  test("isValidId true - ok", () => {
    expect(new Id(2).isValidId()).toBe(true);
  });

  test("isValidId false - ok", () => {
    expect(new Id("2").isValidId()).toBe(false);
    expect(new Id(-1).isValidId()).toBe(false);
    expect(new Id(1.5).isValidId()).toBe(false);
  });
});
