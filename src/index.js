// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    return `€ ${this.amount}`;
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date);
    this.amount = amount;
    this.description = description;
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.amount = amount;
    this.description = description;
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
  addEntry(entry) {
    this.entries.push(entry);
  }

  getCurrentBalance() {
    if (this.entries.length === 0) return 0;

    return this.entries.reduce((total, entry) => {
      const amount = Number(entry.amount) || 0;

      if (entry.type === "income") {
        return total + amount;
      } else {
        return total - amount;
      }
    }, 0);
  }
  getFormattedEntries() {
    const formattedEntries = [];

    this.entries.forEach((entry) => {
      let sign;

      if (entry.type === "income") {
        sign = "+";
      } else {
        sign = "-";
      }

      formattedEntries.push(
        `${entry.date} | ${entry.description} | ${sign}${entry.amount} €`
      );
    });

    return formattedEntries;
  }
}
