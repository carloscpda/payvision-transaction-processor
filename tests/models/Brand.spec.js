const Brand = require("../../src/models/Brand");

describe("Brand.isValidBrand method", () => {
  test("isValidBrand true - ok", () => {
    expect(new Brand("visa").isValidBrand()).toBe(true);
  });

  test("isValidBrand false - ok", () => {
    expect(new Brand(2).isValidBrand()).toBe(false);
    expect(new Brand("v1sa").isValidBrand()).toBe(false);
  });
});

describe("Brand.equals method", () => {
  test("equals true - ok", () => {
    expect(new Brand("visa").equals("visa")).toBe(true);
  });

  test("equals false - ok", () => {
    expect(new Brand("visa").equals("mastercard")).toBe(false);
  });
});
