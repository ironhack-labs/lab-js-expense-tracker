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
class Expense extends Income {
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
    const totalIncome = this.entries
      .filter((entry) => entry.type === "income")
      .reduce((acc, entry) => acc + entry.amount, 0);
    const totalExpense = this.entries
      .filter((entry) => entry.type === "expense")
      .reduce((acc, entry) => acc + entry.amount, 0);
    return totalIncome - totalExpense;
  }

  getFormattedEntries() {
    return this.entries.map((entry) => {
      return `${entry.date} | ${
        entry.description
      } | ${entry.getFormattedAmount()}`;
    });
  }
}

const budget1 = new Budget();
const budget2 = new Budget();
const income1 = new Income("2024-06-17", 10, "other");
const income2 = new Income("2024-06-17", 3456, "salary");
const expense1 = new Expense("2024-06-17", 100, "food", true);
const expense2 = new Expense("2024-06-17", 99, "food", true);
budget1.addEntry(income1);
budget1.addEntry(income2);
budget1.addEntry(expense1);
budget1.addEntry(expense2);

budget2.addEntry(income1);
budget2.addEntry(income2);
budget2.addEntry(expense1);

console.log(budget1.entries);
console.log(budget2.entries);

console.log(budget1.getCurrentBalance());
console.log(budget2.getCurrentBalance());
console.log(budget1.getFormattedEntries());
console.log(budget2.getFormattedEntries());
