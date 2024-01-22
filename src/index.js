// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    // console.log(this.amount + "€");

    return this.amount + " " + "€";
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
    this.balance;
  }

  addEntry(entry) {
    this.entries.push(entry);
  }
  getTotalIncome() {
    this.entries.forEach((elem) => {
      if (elem.type === "income") {
        this.totalIncome += elem.amount;
      }
    });
    return this.totalIncome;
  }
  getTotalExpense() {
    this.entries.forEach((elem) => {
      if (elem.type === "expense") {
        this.totalExpenses += elem.amount;
      }
    });
    return this.totalExpenses;
  }
  getCurrentBalance() {
    this.expenses = this.getTotalExpense();
    this.income = this.getTotalIncome();
    this.balance = this.income - this.expenses;
    // console.log(this.balance);
    return this.balance;
  }
}
