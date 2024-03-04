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
  addEntry(entry) {
    this.entries.push(entry);
  }
  getTotalIncome() {
    let sum = 0;
    this.entries.forEach((entry) => {
      if (entry.type == "income") {
        sum += entry.amount;
      }
    });
    return sum;
  }
  getTotalExpense() {
    let sum = 0;
    this.entries.forEach((entry) => {
      if (entry.type == "expense") {
        sum += entry.amount;
      }
    });
    return sum;
  }
  getCurrentBalance() {
    return this.getTotalIncome() - this.getTotalExpense();
  }

  // Bonus : Iteration 5

  getTotal(type) {
    let sum = 0;
    this.entries.forEach((entry) => {
      if (entry.type == type) {
        sum += entry.amount;
      }
    });
    console.log(sum);
    return sum;
  }

  getFormattedEntries() {
    this.entries.forEach((entry) => {
      return `${entry.date} | ${entry.description} | ${entry.amount}`;
    });
  }
}
