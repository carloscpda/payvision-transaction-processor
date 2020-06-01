const Id = require("./Id");
const Brand = require("./Brand");
const Currency = require("./Currency");
const Amount = require("./Amount");

class Transaction {
  constructor({ id, brand, currency, amount }) {
    this.id = new Id(id);
    this.brand = new Brand(brand);
    this.currency = new Currency(currency);
    this.amount = new Amount(amount);
  }

  // Check valid transaction id
  isValidId() {
    return this.id.isValidId();
  }

  // Check valid transaction brand
  isValidBrand() {
    return this.brand.isValidBrand();
  }

  // Check valid transaction currency
  isValidCurrency() {
    return this.currency.isValidCurrency();
  }

  // Check valid transaction amount
  isValidAmount() {
    return this.amount.isValidAmount();
  }

  // Check valid transaction
  isValidTransaction() {
    return (
      this.isValidId() &&
      this.isValidBrand() &&
      this.isValidCurrency() &&
      this.isValidAmount()
    );
  }

  // Return transition dto
  getTransactionDto() {
    return {
      id: this.id.value,
      brand: this.brand.value,
      currency: this.currency.value,
      amount: this.amount.value,
    };
  }
}

module.exports = Transaction;
