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
    // it takes the constructor arguments from entry
    super(date, amount, description);
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid; // true or false
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
      } else {
        totalIncome += this.entries[i].amount;
      }
    }
    return totalIncome - totalExpense;
  }
  getFormattedEntries() {
    let formattedEntries = [];
    this.entries.forEach((element) => {
      if (element.type === "expense") {
        formattedEntries.push(
          `${element.date} | ${element.description} | -${element.amount} €`
        );
      } else {
        formattedEntries.push(
          `${element.date} | ${element.description} | ${element.amount} €`
        );
      }
    });
    return formattedEntries;
  }
}
