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
  constructor(date, amount, description, type = "income") {
    super(date, amount, description);
    this.type = type;
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
class Budget extends Entry {
  constructor() {
    super();
    this.entries = [];
  }
  addEntry(entry) {
    this.entries.push(entry);
  }
  getCurrentBalance() {
    let balance = 0;
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "income") {
        balance += this.entries[i].amount;
      } else {
        balance -= this.entries[i].amount;
      }
    }
    return balance;
  }
  getFormattedEntries() {
    let formattedEntries = [];
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "income") {
        formattedEntries.push(
          `${this.entries[i].date} | ${this.entries[i].description} | ${this.entries[i].amount} €`
        );
      } else {
        formattedEntries.push(
          `${this.entries[i].date} | ${this.entries[i].description} | -${this.entries[i].amount} €`
        );
      }
    }
    return formattedEntries;
  }
}
