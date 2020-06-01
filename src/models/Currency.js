const availableCurrencies = ["EUR", "GBP", "USD"];

class Currency {
  constructor(value) {
    this.value = value;
  }

  // Check valid currency
  isValidCurrency() {
    return availableCurrencies.includes(this.value);
  }

  // Compare
  equals(currency) {
    return this.value === currency;
  }
}

module.exports = Currency;
