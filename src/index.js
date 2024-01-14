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
    this.totalIncome = 0;
    this.totalExpenses = 0;
    this.currentBalance = 0;
  }
  addEntry(entry) {
    this.entries.push(entry);
  }
  getTotalIncome() {
    if (!this.entries.length) {
      return 0;
    }

    this.totalIncome = 0;

    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        this.totalIncome += entry.amount;
      }
    });

    return this.totalIncome;
  }

  getTotalExpense() {
    if (!this.entries.length) {
      return 0;
    }

    this.totalExpenses = 0;

    this.entries.forEach((entry) => {
      if (entry.type === "expense") {
        this.totalExpenses += entry.amount;
      }
    });
    return this.totalExpenses;
  }

  getCurrentBalance() {
    if (!this.entries.length) {
      return 0;
    }
    return totalIncome - totalExpenses;
  }
}
