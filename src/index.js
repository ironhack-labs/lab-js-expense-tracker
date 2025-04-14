// Entry
class Entry {
  constructor(date, amount, description) {
    (this.date = date),
      (this.amount = amount),
      (this.description = description);
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
  addEntry(entry) {
    this.entries.push(entry);
  }

  getCurrentBalance() {
    if (this.entries.length === 0) return 0;
    let balance = 0;
    let totalExpense = 0;
    let totalIncome = 0;
    for (let i = 0; i < this.entries.length; i++) {
      let entry = this.entries[i];
      if (entry.type === "income") {
        totalIncome += entry.amount;
      } else if (entry.type === "expense") {
        totalExpense += entry.amount;
      }
    }
    balance = totalIncome - totalExpense;
    return balance;
  }
  //bonus

  getFormattedEntries() {
    let formattedEntries = [];

    this.entries.forEach(function (entry) {
      const formattedString = `${entry.date} | ${
        entry.description
      } | ${entry.getFormattedAmount()}`;
      formattedEntries.push(formattedString);
    });
    return formattedEntries;
  }
}
