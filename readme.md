# Transactions Processor

We want to develop a new transactions processor library to complete online payments. **TransactionProcessor.js** file contains the code scaffolding of our new payments engine.

## Your tasks

- ✅ Have a look to the code. Do you miss any class?

  Yes, I've code 5 classes more with their respective tests:

  - **Transaction**: It is the main class. It will represent every transaction of the TransactionProcessor.
  - **Currency**, **Amount**, **Id** and **Brand**: I have added a class for every property of the Transaction. It has multiple benefits. Mainly, bearing in mind SOLID principles, every property has their validations. For example, a Transaction doesn't know if a currency is valid (it is a Currency's responsability). Neither the Transaction class know how to sum amounts (it is an Amount's responsability).

- ✅ Complete **./src/TransactionProcessor.js** class.
- ✅ Make sure all tests pass. Would you include more tests?

  I've fix two test that were not working and added more test for the new classes

- ✅ Do you know the pattern used by TransactionProcessor class?

  Yes, it using a [Builder Pattern](https://refactoring.guru/design-patterns/builder) where every filter is modifying our instance and the sum method (build) is giving us the result.

We strongly recommend the use of: map, filter and reduce (among others).

You can use app.js file to play with TransactionProcessor class.

## Considerations

### Valid operations

Here you can find all array [operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

The following operations are **forbidden**:

- for
- foreach
- while

### Valid transactions

A valid transaction must have:

- A float number non-negative amount value (amount >= 0).
- One brand of: { "visa", "mastercard", "amex" }, lowercase.
- One currency of: { "EUR", "GBP", "USD" }, uppercase.
- An ID greater than zero integer value (id > 0).

## How to set up the project

To run the project, open a terminal and execute the following command from project root path:

- Install dependencies

> yarn

- Run the application

> yarn start

- Run tests

> yarn test
