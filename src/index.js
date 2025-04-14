// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormatedAmount() {
    console.log("20€", this.amount);
  }
}
// Income
class Income {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
    super(date, amount, description);
    this.property = income
  }
}

// Expense
class Expense {}

// Budget
class Budget {}
