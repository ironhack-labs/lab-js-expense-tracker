const ENTRY_TYPE_INCOME = 'income';
const ENTRY_TYPE_EXPENSE = 'expense';

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
    this.type = ENTRY_TYPE_INCOME;
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = ENTRY_TYPE_EXPENSE;
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
    return this.entries.reduce((total, entry) => {
      const sign = entry.type === ENTRY_TYPE_EXPENSE ? -1 : 1;
      return total + sign * entry.amount;
    }, 0);
  }

  getFormattedEntries() {
    let formattedEntries = [];

    this.entries.forEach((entry) => {
      const formattedEntry = `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
      formattedEntries.push(formattedEntry);
    });

    return formattedEntries;
  }
}
