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
    this.paid = paid; //boolean
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

  addEntry(entryObj) {
    this.entries.push(entryObj);
  }

  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }
    let balance = 0;
    let incomes = 0;
    let expenses = 0;

    this.entries.forEach(function (element) {
      if (element.type === "income") {
        incomes += element.amount;
      } else if (element.type === "expense") {
        expenses += element.amount;
      }
    });

    balance = incomes - expenses;
    return balance;
  }

  getFormattedEntries() {
    let formattedEntries = [];
    this.entries.forEach(function (element) {
      if (element.type === "income") {
        formattedEntries.push(
          `${element.date} | ${element.description} | ${element.amount} €`
        );
      } else {
        formattedEntries.push(
          `${element.date} | ${element.description} | -${element.amount} €`
        );
      }
    });

    return formattedEntries;
  }
}

const incomeEntry = new Income("2025-06-23", 35, "test income");
console.log(incomeEntry.getFormattedAmount());
const expenseEntry = new Expense("2025-06-23", 30, "test expense", true);
console.log(expenseEntry.getFormattedAmount());

const budget = new Budget();
budget.addEntry(incomeEntry);
budget.addEntry(expenseEntry);
console.log(budget.getCurrentBalance());
console.log(budget.getFormattedEntries());
