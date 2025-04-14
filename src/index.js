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

  addEntry(entry) {
    this.entry = entry;
    this.entries.push(entry);
  }

  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    } else {
      let totalIncomes = 0;
      let totalExpenses = 0;

      for (let i = 0; i < this.entries.length; i++) {
        if (this.entries[i].type === "income") {
          totalIncomes += this.entries[i].amount;
        } else if (this.entries[i].type === "expense") {
          totalExpenses += this.entries[i].amount;
        }
      }

      return totalIncomes - totalExpenses;
    }
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
    return formattedEntries;
  }
}
