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

    for (let entry of this.entries) {
      if(entry instanceof Income) {
        balance += entry.amount;
      } else if (entry instanceof Expense) {
        balance -= entry.amount;
      }
    }

    return balance;
  }

  getFormattedEntries() {
    let formattedEntries = [];

    for (let entry of this.entries) {
      formattedEntries.push(`${entry.date} | ${entry.description} | ${entry instanceof Income ? "" : "-"}${entry.amount} €`);
    }

    return formattedEntries;
  }
}
