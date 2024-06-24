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
    console.log(entry);
  }

  getCurrentBalance() {
    if (!this.entries.length) return 0;
    let total = 0;
    for (let i = 0; i < this.entries.length; i++) {
      const entry = this.entries[i];
      if (entry.type === "expense") {
        total -= entry.amount;
        continue;
      }
      total += entry.amount;
    }
    return total;
  }
  getFormattedEntries() {
    const entriesString = [];
    this.entries.forEach((element) => {
      entriesString.push(element);
    });
    return entriesString;
  }
}
