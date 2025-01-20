// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    return this.amount + " €";
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super();
    this.date = date;
    this.amount = amount;
    this.description = description;
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super();
    this.date = date;
    this.amount = amount;
    this.description = description;
    this.paid = paid;
    paid = 0;
    this.type = "expense";
  }
  getFormattedAmount() {
    return -this.amount + " €";
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
    if (this.entries.length === 0) {
      return 0;
    } else {
      this.entries.forEach(function (entry) {
        console.log(entry);
        if (entry.type === "income") {
          income += entry.amount;
        } else if (entry.type === "expense") {
          expense += entry.amount;
        }
      });
      return income - expense;
    }
  }
  getFormattedEntries() {
    let formattedArr = [];
    let income = [];
    let expense = [];
    this.entries.forEach(function (entry) {
      //   formattedArr.push(entry);
      if (entry.type === "income") {
        entry.amount = entry.amount + " €";
        income.push(entry);
      } else if (entry.type === "expense") {
        entry.amount = entry.amount + " €";
        expense.push(entry);
      }
    });
    return formattedArr;
  }
}
