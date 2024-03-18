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
    return `${-this.amount} €`;
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
    if (this.entries.length > 0) {
      let balance = 0;
      this.entries.forEach(function (currentEntry) {
        if (currentEntry.type === "income") {
          balance += currentEntry.amount;
        } else if (currentEntry.type === "expense") {
          balance -= currentEntry.amount;
        }
      });
      return balance;
    } else {
      return 0;
    }
  }

  getFormattedEntries() {
    let entryArr = [];
    this.entries.forEach(function (entry) {
      if (entry.type === "income") {
        entryArr.push(
          `${entry.date} | ${entry.description} | ${entry.amount} €`
        );
      } else if (entry.type === "expense") {
        entryArr.push(
          `${entry.date} | ${entry.description} | -${entry.amount} €`
        );
      }
    });
    return entryArr;
  }
}
