const { transactions } = require("../../src/examples");
const Transaction = require("../../src/models/Transaction");

describe("Transaction.isValidTransaction method", () => {
  test("isValidTransaction true - ok", () => {
    expect(new Transaction(transactions[0]).isValidTransaction()).toBe(true);
  });

  test("isValidTransaction false - ok", () => {
    expect(new Transaction(transactions[3]).isValidTransaction()).toBe(false);
  });
});

describe("Transaction.getTransactionDto method", () => {
  test("getTransactionDto valid", () => {
    expect(new Transaction(transactions[0]).getTransactionDto()).toEqual(
      transactions[0]
    );
  });

  test("getTransactionDto invalid", () => {
    expect(new Transaction(transactions[0]).getTransactionDto()).not.toEqual(
      transactions[1]
    );
  });
});
