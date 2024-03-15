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
    super(date, amount, description, paid);
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
  getTotalIncome() {
    let totalIncome = 0;
    this.entries.forEach((num) => {
      if (num.type == "income") {
        totalIncome += num.amount;
      }
    });
    return totalIncome;
  }
  getTotalExpense() {
    let totalExpense = 0;
    this.entries.forEach((num) => {
      if (num.type == "expense") {
        totalExpense += num.amount;
      }
    });
    return totalExpense;
  }
  getCurrentBalance() {
    let currentBalance = this.getTotalIncome() - this.getTotalExpense();
    return currentBalance;
  }
  getTotal(type) {
    let totalIncome = 0;
    this.entries.forEach((num) => {
      if (num == type) {
        totalIncome += num;
      }
      return totalIncome;
    });
  }
  getFormattedEntries() {
    let finalIncome = 0;
    let finalExpense = 0;
    let incomeArray = [`${this.date} | ${this.description} | +${finalIncome}`];
    let expenseArray = [
      `${this.date} | ${this.description} | -${finalExpense}`,
    ];
    this.entries.forEach((num) => {
      if (num.type == "income") {
        incomeArray.push(num);
      } else if (num.type == "expense") {
        expenseArray.push(num);
      }
    });
    return incomeArray, expenseArray;
  }
}
