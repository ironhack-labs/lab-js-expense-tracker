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
    if (this.entries.length === 0) {
      return 0;
    }

    let totalExpense = 0;
    let totalIncome = 0;

    for (const entry of this.entries) {
      if (entry.type === "income") {
        totalIncome += entry.amount;
      } else if (entry.type === "expense") {
        totalExpense += entry.amount;
      }
    }

    return totalIncome - totalExpense;
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
