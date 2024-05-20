// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    const FormattedAmount = `${this.amount} €`;
    return FormattedAmount;
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
    const FormattedAmount = `-${this.amount} €`;
    return FormattedAmount;
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
    if (this.entries.length === 0) {
      return 0;
    }

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
  getFormattedEntries() {
    const FormattedEntries = [];
    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        FormattedEntries.push(
          `${entry.date} | ${entry.description} | ${entry.amount} €`
        );
      } else if (entry.type === "expense") {
        FormattedEntries.push(
          `${entry.date} | ${entry.description} | -${entry.amount} €`
        );
      }
    });
    return FormattedEntries;
  }
}
