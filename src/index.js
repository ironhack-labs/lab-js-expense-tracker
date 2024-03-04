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

  addEntry(a) {
    this.entries.push(a);
  }

  test() {
    console.log(this.entries);
  }

  getTotal(a) {
    let total = 0;
    this.entries.forEach((n) => {
      if (n.type === a) {
        total += n.amount;
      }
    });
    console.log(total);
  }

  getTotalIncome() {
    let sum = 0;
    this.entries.forEach((n) => {
      if (n.type === "income") {
        sum += n.amount;
      }
    });
    return sum;
  }

  getTotalExpense() {
    let sum = 0;
    this.entries.forEach((n) => {
      if (n.type === "expense") {
        sum += n.amount;
      }
    });
    return sum;
  }

  getCurrentBalance() {
    return this.getTotalIncome() - this.getTotalExpense();
  }

  getFormattedEntries() {
    this.entries.forEach((n) => {
      if (n.type === "income") {
        console.log(`${n.date} | ${n.description} | +${n.amount} €`);
      } else {
        console.log(`${n.date} | ${n.description} | -${n.amount} €`);
      }
    });
  }
}

const plus = new Income("december", 300, "salary");
const newPlus = new Income("december", 500, "salary");
const minus = new Expense("december", 10, "cinema", true);
const newMinus = new Expense("december", 150, "investment", false);

const budget = new Budget();
budget.addEntry(plus);
budget.addEntry(newPlus);
budget.addEntry(minus);
budget.addEntry(newMinus);
budget.test();

budget.getTotalIncome();

budget.getCurrentBalance();

budget.getTotal("income");
budget.getTotal("expense");

budget.getFormattedEntries();
