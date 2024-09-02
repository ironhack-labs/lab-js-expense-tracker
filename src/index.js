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
// --> Income is a subclass of Entry
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

    this.paid = Boolean(paid);

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
    let currentBalance = 0;

    for (let i = 0; i < this.entries.length; i++) {
      let entry = this.entries[i];

      if (entry.type === "income") {
        currentBalance += entry.amount;
      } else if (entry.type === "expense") {
        currentBalance -= entry.amount;
      }
    }

    return currentBalance;
  }

  getFormattedEntries() {
    let formattedEntries = [];

    for (let i = 0; i < this.entries.length; i++) {
      let entry = this.entries[i]; // same above
      let formattedEntry = "";

      if (entry.type === "income") {
        formattedEntry = `${entry.date} | ${entry.description} | +${entry.amount} €`;
      } else if (entry.type === "expense") {
        formattedEntry = `${entry.date} | ${entry.description} | -${entry.amount} €`;
      }

      formattedEntries.push(formattedEntry);
    }

    return formattedEntries;
  }
}
