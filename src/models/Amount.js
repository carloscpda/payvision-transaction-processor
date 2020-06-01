class Amount {
  constructor(value) {
    this.value = value;
  }

  // Check valid amount
  isValidAmount() {
    return typeof this.value === "number" && this.value >= 0;
  }

  // Sum amounts
  static sum(amounts) {
    // Sum all amounts
    const s = amounts.reduce((total, amount) => (total += amount.value), 0);
    // It make sure have two decimals
    return Math.round(s * 1e2) / 1e2;
  }
}

module.exports = Amount;
