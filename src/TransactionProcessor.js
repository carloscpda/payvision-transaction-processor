const Transaction = require("./models/Transaction");
const Amount = require("./models/Amount");

class TransactionProcessor {
  constructor(transactions) {
    // parse transaction param to Transaction
    this.transactions = transactions.map((tx) => new Transaction(tx));
  }

  print(tx) {
    console.log(
      `ID: ${tx.id} - Brand: ${tx.brand} - Currency: ${tx.currency} - Amount: ${tx.amount}`
    );
  }

  // Check valid transactions rules
  static isValidTransaction(tx) {
    return new Transaction(tx).isValidTransaction();
  }

  // Remove invalid transactions
  filterInvalidTransactions() {
    this.transactions = this.transactions.filter((tx) =>
      tx.isValidTransaction()
    );
    return this;
  }

  // Return transactions of given currency
  getTransactionsByCurrency(currency) {
    this.filterInvalidTransactions();
    this.transactions = this.transactions.filter((tx) =>
      tx.currency.equals(currency)
    );
    return this;
  }

  // Return transactions of given brand
  getTransactionsByBrand(brand) {
    this.filterInvalidTransactions();
    this.transactions = this.transactions.filter((tx) =>
      tx.brand.equals(brand)
    );
    return this;
  }

  // BONUS:
  // Apply multiple filters. Filters parameter should be an array of functions (predicates)
  filterTransaction(filters) {
    this.filterInvalidTransactions();

    // Get DTO for apply filters
    let transactions = this.transactions.map((tx) => tx.getTransactionDto());

    // Apply filters
    transactions = filters.reduce(
      (txs, filter) => txs.filter(filter),
      transactions
    );

    // Save
    this.transactions = transactions.map((tx) => new Transaction(tx));
    return this;
  }

  // Return the total amount of current transactions array
  sum() {
    this.filterInvalidTransactions();
    return Amount.sum(this.transactions.map((tx) => tx.amount));
  }
}

module.exports = TransactionProcessor;
