// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  // Add a method to the class
  getFormattedAmount() {
    return this.amount + " €";
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
  constructor(date, amount, description, category, paid) {
    super(date, amount, description, category);
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
  addEntry(Entry) {
    this.entries.push(Entry);
  }
  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }
    let totalInconme = 0;
    let totalExpenses = 0;

    for (const entry of this.entries) {
      if (entry.type === "income") {
        totalInconme += entry.amount;
      } else if (entry.type === "expense") {
        totalExpenses += entry.amount;
      }
    }
    return totalInconme - totalExpenses;
  }
}
