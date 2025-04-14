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
class Expense extends Income {
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

  addEntry(entry) {
    this.entries.push(entry);
  }

  getCurrentBalance() {
    if (this.entry === 0) return 0;
    const balance = this.entries.reduce(
      (acc, curr) =>
        curr.type === "income" ? acc + curr.amount : acc - curr.amount,
      0
    );
    return balance;
  }

  getFormattedEntries() {
    const entriesLog = [];
    this.entries.forEach((ent) => {
      const isExpence = ent.type === "expence" ? "-" : "";
      entriesLog.push(
        `${ent.date} | ${ent.description} | ${ent.getFormattedAmount()}`
      );
    });
    return entriesLog;
  }
}
