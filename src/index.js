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
    if (this.entries.length === 0) {
      return 0;
    } else {
      let income_total = 0;
      let expense_total = 0;
      for (let i = 0; i < this.entries.length; i++) {
        if (this.entries[i].type === "income") {
          income_total += this.entries[i].amount;
        } else {
          expense_total += this.entries[i].amount;
        }
      }
      return income_total - expense_total;
    }
  }

  getFormattedEntries() {
    let arr = [];
    this.entries.forEach((entry) => {
      const date = entry.date;
      const description = entry.description;
      const amount = entry.amount;
      if (entry.type === "income") {
        arr.push(`${date} | ${description} | ${amount} €`);
      } else {
        arr.push(`${date} | ${description} | -${amount} €`);
      }
    });
    return arr;
  }
}
