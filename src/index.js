// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  getFormattedAmount() {
    const str = `${this.amount} €`;
    return str;
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
    const str = `-${this.amount} €`;
    return str;
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
    if (!this.entries || this.entries.length === 0) {
      return 0;
    }
    let balance = 0;
    // for (let i = 0; i < this.entries.length; i++)
    this.entries.forEach((entry) => {
      //   let entry = this.entries[i];
      if (entry.type === "income") {
        balance += entry.amount;
      } else if (entry.type === "expense") {
        balance -= entry.amount;
      }
    });
    return balance;
  }

  getFormattedEntries() {
    let formattedEntries = [];
    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        formattedEntries.push(
          `${entry.date} | ${entry.description} | ${entry.amount} €`
        );
      } else if (entry.type === "expense") {
        formattedEntries.push(
          `${entry.date} | ${entry.description} | -${entry.amount} €`
        );
      }
    });
    console.log(formattedEntries);
    return formattedEntries;
  }
}
