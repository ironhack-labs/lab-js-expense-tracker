// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    if (this.amount >= 0) {
      return `${this.amount} €`;
    } else {
      return `-${this.amount} €`;
    }
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
    if (this.entries.length === 0) {
      return 0;
    } else {
      let totalIncome = this.entries
        .filter((entry) => entry instanceof Income)
        .reduce((acc, entry) => acc + entry.amount, 0);

      let totalExpenses = this.entries
        .filter((entry) => entry instanceof Expense)
        .reduce((acc, entry) => acc + entry.amount, 0);

      return totalIncome - totalExpenses;
    }
  }
  getFormattedEntries() {
    const formattedEntries = [];
    this.entries.forEach((entry) => {
      if (entry instanceof Income) {
        formattedEntries.push(
          `${entry.date} | ${entry.description} | ${entry.amount} €`
        );
      } else if (entry instanceof Expense) {
        formattedEntries.push(
          `${entry.date} | ${entry.description} | -${entry.amount} €`
        );
      }
    });

    return formattedEntries;
  }
}

const budget = new Budget();

// Create few income and expense entries for the budget
const income1 = new Income("2024-06-17", 10, "other");
const income2 = new Income("2024-06-17", 3456, "salary");
const expense1 = new Expense("2024-06-17", 100, "food", true);
const expense2 = new Expense("2024-06-17", 99, "food", true);

// Add the entries to the budget
budget.addEntry(income1);
budget.addEntry(income2);
budget.addEntry(expense1);
budget.addEntry(expense2);

// Call the getFormattedEntries method
const formattedEntries = budget.getFormattedEntries();
console.log(formattedEntries);
