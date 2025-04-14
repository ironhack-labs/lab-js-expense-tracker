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
  entries = [];
  addEntry(newEntry) {
    this.entries.push(newEntry);
  }

  getCurrentBalance() {
    let balance = 0;

    if (this.entries.length === 0) {
      return 0;
    }

    for (let i = 0; i < this.entries.length; i++) {
      const entry = this.entries[i];

      if (entry.type === "income") {
        balance += entry.amount;
      } else {
        balance -= entry.amount;
      }
    }

    return balance;
  }
}
