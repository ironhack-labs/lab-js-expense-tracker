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
  addEntry(value) {
    this.entries.push(value);
  }
  getCurrentBalance() {
    if (this.entries.length === 0) return 0;
    let totalIncome = 0;
    let totalExpense = 0;
    this.entries.forEach(() => {
      totalIncome += Income.amount;
      totalExpense += Expense.amount;
    });
    return totalIncome - totalExpense;
  }
  getFormattedEntries() {
    let result = [];
    this.entries.forEach((element) => {
      result.push(
        `${element.date} | ${element.description} | ${element.getFormattedAmount}`
      );
    });
    return result;
  }
}
