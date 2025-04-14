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
  addEntry(newEntry) {
    this.entries.push(newEntry);
  }
  getCurrentBalance() {
    let totalIncome = 0;
    let totalExpenses = 0;
    for (const element of this.entries) {
      if (element.type === "expense") {
        totalExpenses += element.amount;
      }
      if (element.type === "income") {
        totalIncome += element.amount;
      }
    }
    return totalIncome - totalExpenses;
  }
  getFormattedEntries() {
    const formattedEntries = [];
    this.entries.forEach((element) => {
      if (element.type === "expense") {
        formattedEntries.push(
          `${element.date} | ${element.description} | -${element.amount} €`
        );
      }
      if (element.type === "income") {
        formattedEntries.push(
          `${element.date} | ${element.description} | ${element.amount} €`
        );
      }
    });
    return formattedEntries;
  }
}
