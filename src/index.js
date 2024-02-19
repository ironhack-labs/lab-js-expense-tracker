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

  addEntry(object) {
    this.entries.push(object);
  }

  getTotalIncome() {
    let incomeSum = 0;
    this.entries.forEach((e) => {
      if (e.type === "income") {
        incomeSum += e.amount;
      }
    });
    return incomeSum;
  }

  getTotalExpense() {
    let expenseSum = 0;
    this.entries.forEach((e) => {
      if (e.type === "expense") {
        expenseSum += e.amount;
      }
    });
    return expenseSum;
  }

  getTotal(type) {
    let sum = 0;
    this.entries.forEach((e) => {
      if (e.type === type) {
        sum += e.amount;
      }
    });
    return sum;
  }

  getCurrentBalance() {
    return this.getTotal("income") - this.getTotal("expense");
  }

  getFormattedEntries() {
    this.entries.forEach((e) => {
      let type = "+";
      if (e.type === "expense") {
        type = "-";
      }

      return console.log(`${e.date} | ${e.description} | ${type}${e.amount} €`);
    });
  }
}
