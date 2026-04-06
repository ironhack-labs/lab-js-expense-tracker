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
  constructor(date, amount, description, category) {
    super(date, amount, description);
    this.type = "expense";
    this.paid = category;
  }
  getFormattedAmount() {
    let message = `-${this.amount} €`;
    return message;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
    if (this.entries.length === 0) {
      return 0;
    }
  }

  addEntry(newEntry) {
    this.entries.push(newEntry);
  }

  getCurrentBalance() {
    let total = 0;
    if (this.entries.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < this.entries.length; i++) {
        if (this.entries === "income") {
          total += this.entries[i];
        } else if (this.entries === "expense") {
          total -= this.entries[i];
        }
      }
    }
    return total;
  }

  getFormattedEntries() {
    let arr = [];
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries === "income") {
        arr.push(this.entries[i]);
      } else if (this.entries === "expense") {
        arr.push(this.entries[i]);
      }
    }
    return arr;
  }
}
