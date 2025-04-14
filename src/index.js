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
    this.entries.push(entry);
  }
  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }
    let totalExpense = 0;
    let totalIncome = 0;
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "expense") {
        totalExpense += this.entries[i].amount;
        console.log(totalExpense);
      } else {
        totalIncome += this.entries[i].amount;
      }
    }
    return totalIncome - totalExpense;
  }
  getFormattedEntries() {
    let formattedEntries = [];
    this.entries.forEach((element) => {
      if (element.type === "income") {
        totalIncome += Entry.amount;
      } else if (entry.type === "expense") {
        totalExpense += Entry.amount;
      }
      return totalExpense - Entry.amount;
    });
    return formattedEntries;
  }
}
