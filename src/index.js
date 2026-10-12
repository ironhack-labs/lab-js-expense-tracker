// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  getFormattedAmount() {
    let amount = `${this.amount} €`;
    return amount;
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }

  getIncome() {
    let income = `${this.type}`;
    return income;
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description, paid);
    this.type = "expense";
    this.paid = paid;
  }

  getFormattedAmount() {
    let amount = `-${this.amount} €`;
    return amount;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }

  addEntry(Income) {
    this.entries.push(Income);
  }

  getCurrentBalance() {
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

  getFormattedEntries() {
    const formattedEntries = [];
    this.entries.forEach((entry) => {
      formattedEntries.push(
        `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`,
      );
    });
    return formattedEntries;
  }
}
