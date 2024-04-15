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
  }
  type = "income";
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
  addEntry(newEntry) {
    this.entries.push(newEntry);
  }

  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }

    let totalIncome = 0;
    let totalExpenses = 0;

    for (const entry of this.entries) {
      if (entry.type === "expense") {
        totalExpenses += entry.amount;
      } else if (entry.type === "income") {
        totalIncome += entry.amount;
      }
    }

    return totalIncome - totalExpenses;
  }
}

const budget2024 = new Budget()
const expense1 = new Expense("15/04/2024", 150, "", true)

budget2024.addEntry(expense1)

console.log(budget2024.entries)
