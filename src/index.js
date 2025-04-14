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
  addEntry(entry) {
    this.entries.push(entry);
  }
  getCurrentBalance() {
    if (this.entries.length === 0) return 0;
    let balance = 0;
    for (const entry of this.entries) {
      if (entry.type === "income") {
        balance += entry.amount;
      } else if (entry.type === "expense") {
        balance -= entry.amount;
      }
    }
    return balance;
  }
  // was getting frustrated by the below bonus. Could not get it to pass with the formatted entry.
  //   getFormattedEntries() {
  //     const formatted = [];
  //     this.entries.forEach(function (entry) {
  //       formatted.push(
  //         `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
  //       );
  //       return formatted;
  //     });
  //   }
}
