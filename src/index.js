// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    return `${this.amount} €`;
  }
}
// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description, paid);
    this.type = "expense";
    this.paid = paid;
  }
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
    this.balance = 0;
  }
  addEntry(entryObj) {
    this.entries.push(entryObj);
    if (entryObj instanceof Income) {
      this.balance += entryObj.amount;
    } else if (entryObj instanceof Expense) {
      this.balance -= entryObj.amount;
    }
  }
  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }
    return this.balance;
  }
}
