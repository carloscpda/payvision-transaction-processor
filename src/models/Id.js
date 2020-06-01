class Id {
  constructor(value) {
    this.value = value;
  }

  // Check valid amount
  isValidId() {
    return Number.isInteger(this.value) && this.value > 0;
  }
}

module.exports = Id;
