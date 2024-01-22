const expense = "expense";
const income = "income";

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
    this.type = income;
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.type = expense;
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
    let result = 0;
    this.entries.forEach((entry) => {
      if (entry.type === income) {
        result += entry.amount;
      }
    });
    return result;
  }

  getTotalExpense() {
    let result = 0;
    this.entries.forEach((entry) => {
      if (entry.type === expense) {
        result += entry.amount;
      }
    });
    return result;
  }

  getCurrentBalance() {
    return this.getTotalIncome() - this.getTotalExpense();
  }

  getTotal(type) {
    let result = 0;
    this.entries.forEach((entry) => {
      if (entry.type === type) {
        result += entry.amount;
      }
    });
    return result;
  }

  getFormattedEntries() {
    const result = [];
    this.entries.forEach((entry) => {
      result.push(
        `${entry.date} | ${entry.description} | ${
          entry.type === income ? "+" : ""
        }${entry.getFormattedAmount()}`
      );
    });
    return result;
  }
}
