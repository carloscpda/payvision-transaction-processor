const availableBrands = ["visa", "mastercard", "amex"];

class Brand {
  constructor(value) {
    this.value = value;
  }

  // Check valid brand
  isValidBrand() {
    return availableBrands.includes(this.value);
  }

  // Compare
  equals(brand) {
    return this.value === brand;
  }
}

module.exports = Brand;
