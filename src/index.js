// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    const amountEuro = `${this.amount}€`;
  }
}

// Income
class Income {}

// Expense
class Expense {}

// Budget
class Budget {}
