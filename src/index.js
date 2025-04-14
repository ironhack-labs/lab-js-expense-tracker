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
    if (this.entries.length === 0) {
      return 0;
    }
    let balance = 0;
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "income") {
        balance += this.entries[i].amount;
      } else if (this.entries[i].type === "expense") {
        balance -= this.entries[i].amount;
      }
    }
    return balance;
  }

  /* getFormattedEntries() {
    let result = [];
    this.entries.forEach((element) => {
      if (element.type === "income") {
        result.push(
          `${element.date} | ${element.description} | ${element.amount} €`
        );
      } else if (element.type === "expense") {
        result.push(
          `${element.date} | ${element.description} | -${element.amount} €`
        );
      }
    });
    return result;
  } */

  getFormattedEntries() {
    const formattedEntries = [];
    this.entries.forEach((entry) => {
      formattedEntries.push(
        `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()} `
      );
    });
    return formattedEntries;
  }
}
