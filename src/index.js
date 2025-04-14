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
    if (!this.entries.length) {
      return 0;
    }
    return this.entries.reduce((acc, entry) => {
      if (entry instanceof Income) {
        return acc + entry.amount;
      } else if (entry instanceof Expense) {
        return acc - entry.amount;
      }
      return acc;
    }, 0);
  }
  getFormattedEntries() {
    const formattedEntries = [];

    this.entries.forEach((entry) => {
      // Uso de getFormattedAmount()
      const formattedAmount = entry.getFormattedAmount();
      const formattedEntry = `${entry.date} | ${entry.description} | ${formattedAmount}`;

      formattedEntries.push(formattedEntry);
    });

    return formattedEntries;
  }
}
