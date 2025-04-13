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
