const Currency = require("../../src/models/Currency");

describe("Currency.isValidCurrency method", () => {
  test("isValidCurrency true - ok", () => {
    expect(new Currency("EUR").isValidCurrency()).toBe(true);
  });

  test("isValidCurrency false - ok", () => {
    expect(new Currency(2).isValidCurrency()).toBe(false);
    expect(new Currency("€").isValidCurrency()).toBe(false);
  });
});

describe("Currency.equals method", () => {
  test("equals true - ok", () => {
    expect(new Currency("EUR").equals("EUR")).toBe(true);
  });

  test("equals false - ok", () => {
    expect(new Currency("EUR").equals("USD")).toBe(false);
  });
});
