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
    let balance = 0;
    // Calculate the current balance by iterating over the entries
    for (const entry of this.entries) {
      if (entry.type === "income") {
        balance += entry.amount;
      } else if (entry.type === "expense") {
        balance -= entry.amount;
      }
    }
    return balance;
  }

  getFormattedEntries() {
    let formattedEntries = this.entries.map((entry) => {
      const formattedAmount =
        entry.type === "income" ? `${entry.amount} €` : `-${entry.amount} €`;

      return `${entry.date} | ${entry.description} | ${formattedAmount}`;
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

console.log(budget);
console.log(formattedEntries);
