const Amount = require("../../src/models/Amount");

describe("Amount.isValidAmount method", () => {
  test("isValidAmount true - ok", () => {
    expect(new Amount(2).isValidAmount()).toBe(true);
  });

  test("isValidAmount false - ok", () => {
    expect(new Amount("2").isValidAmount()).toBe(false);
    expect(new Amount(-2).isValidAmount()).toBe(false);
  });
});

describe("Amount.sum method", () => {
  test("sum with empty array - 0", () => {
    expect(Amount.sum([])).toBe(0);
  });

  test("sum with valid array", () => {
    const x = new Amount(1.1);
    const y = new Amount(2.2);
    const z = new Amount(3.3);
    expect(Amount.sum([x, y, z])).toBe(6.6);
  });

  test("sum with long amount", () => {
    const x = new Amount(1.1000001);
    expect(Amount.sum([x])).toBe(1.1);
  });
});
