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
  getFormattedAmount() {
    return `${this.amount} €`;
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
    this.currentBalance = 0;
  }
  addEntry(entry) {
    this.entries.push(entry);
  }
  getTotalIncome() {
    if (!this.entries.length) {
      return 0;
    }
    this.totalIncome = 0;
    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        this.totalIncome += entry.amount;
      } 
      });

    return this.totalIncome;
  }

  getTotalExpense() {
    if (!this.entries.length) {
      return 0;
    }

    this.totalExpenses = 0;
    this.entries.forEach((entry) => {
      if (entry.type === "expense") {
        this.totalExpenses += entry.amount;
      }
    });
    return this.totalExpenses;
  }

  getCurrentBalance() {
    if (!this.entries.length) {
      return 0;
    }
    return this.getTotalIncome() - this.getTotalExpense();
  }
}


const budget = new Budget();

const incomeEntry1 = new Income ("2022-01-01", 100, "Salary");
const incomeEntry2 = new Income ("2022-02-01", 200, "Bonus");
const expenseEntry = new Expense ("2022-01-15", 50, "Groceries", true);

budget.addEntry(incomeEntry1);
budget.addEntry(incomeEntry2);
budget.addEntry(expenseEntry);

console.log(budget.getCurrentBalance()); // Should print 300