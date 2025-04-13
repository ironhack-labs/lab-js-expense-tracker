//labs
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
  }
  addEntry(newEntry) {
    this.entries.push(newEntry);
  }
  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }
    let currentBalance = 0;
    for (const entry of this.entries) {
      if (entry.type === "expense") {
        currentBalance -= entry.amount;
      } else if (entry.type === "income") {
        currentBalance += entry.amount;
      }
    }
    return currentBalance;
  }
}

const exemple = new Budget();
const someExpense = new Expense("01 avril 2024", 100, "", true);
const someExpense2 = new Expense("01 avril 2024", 200, "", true);
exemple.addEntry(someExpense);
exemple.addEntry(someExpense2);
console.log(exemple.entries);
