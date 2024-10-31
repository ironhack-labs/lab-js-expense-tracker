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
    this.newEntry = newEntry;
    this.entries.push(newEntry);
  }

  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }
    let balanceIncome = 0;
    let balanceExpense = 0;

    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        balanceIncome += entry.amount;
      } else {
        balanceExpense += entry.amount;
      }
    });
    return balanceIncome - balanceExpense;
  }
  getFormattedEntries() {
    const formatedEntries = [];
    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        formatedEntries.push(
          `${entry.date} | ${entry.description} | +${entry.amount}€`
        );
      } else {
        formatedEntries.push(
          `${entry.date} | ${entry.description} | -${entry.amount}€`
        );
      }
    });
    return formatedEntries;
  }
}
