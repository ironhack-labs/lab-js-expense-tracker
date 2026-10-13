// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    let message = `${this.amount} €`;
    console.log(message);
    return message;
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
    let message = `-${this.amount} €`;
    console.log(message);
    return message;
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
    if (this.entries.length === 0) {
      return 0;
    }

    let totalIncome = 0;
    let totalExpenses = 0;

    for (let i = 0; i < this.entries.length; i++) {
      let currentEntry = this.entries[i];

      if (currentEntry.type === "income") {
        totalIncome = totalIncome + currentEntry.amount;
      } else if (currentEntry.type === "expense") {
        totalExpenses = totalExpenses + currentEntry.amount;
      }
    }
    let balance = totalIncome - totalExpenses;

    return balance;
  }
}
