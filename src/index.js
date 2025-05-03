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
    // return !this.entries.length ? 0 :
    if (!this.entries.length) {
      return 0;
    }

    let incomes = 0;
    let expenses = 0;

    this.entries.forEach((entry) => {
      if (entry.type === "expense") {
        expenses += entry.amount;
      }
      if (entry.type === "income") {
        incomes += entry.amount;
      }
    });
    return incomes - expenses;
  }

  getFormattedEntries() {
    const entries = [];

    this.entries.forEach((entry) => {
      if (entry.type === "expense") {
        entries.push(
          `${entry.date} | ${entry.description} | -${entry.amount} €`
        );
      } else {
        entries.push(
          `${entry.date} | ${entry.description} | ${entry.amount} €`
        );
      }
    });
    return entries;
  }
}
