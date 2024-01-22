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

// const test = new Entry(11, '100', 'test');
// console.log(test.getFormated());

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = 'income';
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.type = 'expense';
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
    this.entries.forEach((x) =>
      x.type === 'income' ? (totalIncome += x.amount) : x
    );
    return totalIncome;
  }

  getTotalExpense() {
    let totalIncome = 0;
    this.entries.forEach((x) =>
      x.type === 'expense' ? (totalIncome += x.amount) : x
    );
    return totalIncome;
  }
  getCurrentBalance() {
    if (!this.entries.length) return 0;
    let income = this.getTotalIncome();
    let expenses = this.getTotalExpense();
    return income - expenses;
  }
}
