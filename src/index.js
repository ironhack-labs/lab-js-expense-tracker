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

  getTotalIncome() {
    if (this.entries.length === 0) {
      return 0;
    }

    let sumIncome = 0;

    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        sumIncome += Number(entry.amount);
      }
    });

    return sumIncome;
  }

  getTotalExpense() {
    if (this.entries.length === 0) {
      return 0;
    }

    let sumExpense = 0;

    this.entries.forEach((entry) => {
      if (entry.type === "expense") {
        sumExpense += Number(entry.amount);
      }
    });

    return sumExpense;
  }

  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }

    return this.getTotalIncome() - this.getTotalExpense();
  }
}
