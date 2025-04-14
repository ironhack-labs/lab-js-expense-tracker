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

// Income //TBC
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
  addEntry(expense) {
    this.entries.push(expense);
  }
  getCurrentBalance() {
    let totalIncome = 0;
    let totalExpense = 0;

    if (!this.entries.length) {
      return 0;
    }
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "expense") {
        totalExpense += this.entries[i].amount;
      } else {
        totalIncome += this.entries[i].amount;
      }
    }
    return totalIncome - totalExpense;
  }
}

// should return the difference between the total income and the total expense of all entries
