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
    let newIncome = 0;
    let newExpense = 0;
    let balance = 0;

    if (this.entries.length === 0) {
      return 0;
    }
    for (let i = 0; this.entries.length; i++) {
      if (this.entries[i].type === "income") {
        newIncome += this.entries[i].amount;
      } else if (this.entries[i].type === "expense") {
        newExpense += this.entries[i].amount;
      }
    }
    balance = newIncome + newExpense;
    
    return balance;
  }
  getFormattedEntries() {}
}
