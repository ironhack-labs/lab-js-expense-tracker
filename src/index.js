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
  getTotalIncome() {
    let sum = 0;
    this.entries.forEach(function (entry) {
      if (entry.type === "income") {
        sum += entry.amount;
      }
    });
    return sum;
  }
  getTotalExpense() {
    let sum = 0;
    this.entries.forEach(function (entry) {
      if (entry.type === "expense") {
        sum += entry.amount;
      }
    });
    return sum;
  }

  getTotal(entryType) {
    let totalIncome = 0;
    let totalExpenses = 0;
    this.entries.forEach(function (entry) {
      if (entry.type === "income") {
        totalIncome += entry.amount;
      } else if (entry.type === "expense") {
        totalExpenses += entry.amount;
      }
    });
    if (this.entries.length === 0) {
      return 0;
    }
    if (entryType === "income") {
      return totalIncome;
    } else if (entryType === "expense") {
      return totalExpenses;
    }
  }

  //   getFormattedEntries() {
  //     let formattedEntries = [];
  //     this.entries.forEach(function (entry) {
  //       const formattedEntry = `${
  //         entry.date
  //       } | ${entry.description.toUpperCase()} | ${
  //         entry.type === "income" ? "+" : "-"
  //       } ${entry.amount} €`;

  //       formattedEntries.push(formattedEntry);
  //     });
  //     return formattedEntries;
  //   }

  getCurrentBalance() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}
