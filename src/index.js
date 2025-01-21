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
    super(date);
    this.amount = amount;
    this.description = description;
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
    }

    return this.entries.reduce((balance, entry) => {
      if (entry instanceof Income) {
        return balance + entry.amount;
      } else if (entry instanceof Expense) {
        return balance - entry.amount;
      }
      return balance;
    }, 0);
  }
  getFormattedEntries() {
    const formattedEntries = [];

    this.entries.forEach((entry) => {
      let formattedEntry;
      if (entry instanceof Income) {
        formattedEntry = `${entry.date} | ${entry.description} | +${entry.amount} €`;
      } else if (entry instanceof Expense) {
        formattedEntry = `${entry.date} | ${entry.description} | -${entry.amount} €`;
      }
      formattedEntries.push(formattedEntry);
    });

    return formattedEntries;
  }
}
