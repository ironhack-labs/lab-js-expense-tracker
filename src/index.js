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
  getCurrentBalance() {
    let totalIncome = 0;
    let totalExpenses = 0;

    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        totalIncome += entry.amount;
      } else if (entry.type === "expense") {
        totalExpenses += entry.amount;
      }
    });
    return totalIncome - totalExpenses;
  }
}
const myBudget = new Budget();

const income1 = new Income("2024-06-01", 1000, "Salary");
const income2 = new Income("2024-06-15", 500, "Freelance Work");

const expense1 = new Expense("2024-06-05", 200, "Groceries", true);
const expense2 = new Expense("2024-06-10", 100, "Utilities", true);

myBudget.addEntry(income1);
myBudget.addEntry(income2);
myBudget.addEntry(expense1);
myBudget.addEntry(expense2);

console.log("Current Balance:");
console.log(myBudget.getCurrentBalance());
