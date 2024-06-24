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
  }
  type = "expense";

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
    }
    return this.entries.reduce(
      (acc, entry) => {
        return entry.type === "income"
          ? acc + entry.amount
          : acc - entry.amount;
      },

      0
    );
  }

  getFormattedEntries() {
    const formattedEntries = [];

    this.entries.forEach((entry) => {
      const entrys = `${entry.date} | ${entry.description} | ${
        entry.type === "income" ? "" : "-"
      }${entry.amount} €`;

      formattedEntries.push(entrys);
    });

    return formattedEntries;
  }
}
