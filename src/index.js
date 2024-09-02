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
  addEntry(entry) {
    this.entries.push(entry);
  }
  getCurrentBalance() {
    if (this.entries.length == 0) {
      return 0;
    } else {
      const totalIncome = this.entries
        .filter((entry) => entry.type === "income")
        .reduce((sum, income) => sum + income.amount, 0);
      const totalExpense = this.entries
        .filter((entry) => entry.type === "expense")
        .reduce((sum, expense) => sum + expense.amount, 0);
      return totalIncome - totalExpense;
    }
  }
  getFormattedEntries() {
    const formattedEntries = [];
    this.entries.forEach((entry) => {
      formattedEntries.push(
        `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
      );
    });
    return formattedEntries;
  }
}

const budget1 = new Budget();
const budget2 = new Budget();
const income1 = new Income("2024-06-17", 200, "food");
const income2 = new Income("2024-06-17", 200, "food");
const expense1 = new Expense("2024-06-17", 100, "food", true);
const expense2 = new Expense("2024-06-17", 500, "food", false);
budget1.addEntry(income1);
budget1.addEntry(income2);
budget1.addEntry(expense1);
budget1.addEntry(expense2);
// Challenge 2
let a = 1;
