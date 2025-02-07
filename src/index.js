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
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";
  }
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }
  addEntry(entry) {
    this.entries.push(entry);
  }
  getCurrentBalance() {
    let income = 0;
    let expense = 0;
    if (this.entries.length === 0) return 0;
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "income") income += this.entries[i].amount;
      else if (this.entries[i].type === "expense")
        expense += this.entries[i].amount;
    }
    return income - expense;
  }
  getFormattedEntries() {
    let array = [];
    for (let i = 0; i < this.entries.length; i++) {
      array.push(
        `${this.entries[i].date} | ${
          this.entries[i].description
        } | ${this.entries[i].getFormattedAmount()}`
      );
    }
    return array;
  }
}
