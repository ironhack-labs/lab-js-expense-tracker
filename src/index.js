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
  addEntry(newEntry) {
    this.entries.push(newEntry);
  }
  getCurrentBalance() {
    if (this.entries.length === 0) return 0;

    let balance = 0;
    this.entries.forEach((entry) => {
      if (entry.type === "income") balance += entry.amount;
      else if (entry.type === "expense") balance -= entry.amount;
    });

    return balance;
  }

  getFormattedEntries() {
    let formatedEntries = [];
    this.entries.forEach((entry) => {
      let entryString = `${entry.date} | ${
        entry.description
      } | ${entry.getFormattedAmount()}`;

      formatedEntries.push(entryString);
    });

    return formatedEntries;
  }
}
