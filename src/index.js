// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  getFormattedAmount() {
    return this.amount + " €";
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
    return "-" + this.amount + " €";
  }
}

class Budget {
  constructor() {
    this.entries = [];
  }
  addEntry(entry) {
    this.entries.push(entry);
  }
  getCurrentBalance() {
    let totalIncome = this.entries
      .filter((entry) => entry.type === "income")
      .reduce((acc, entry) => acc + entry.amount, 0);
    let totalExpenses = this.entries
      .filter((entry) => entry.type === "expense")
      .reduce((acc, entry) => acc + entry.amount, 0);
    return totalIncome - totalExpenses;
  }

  //Or
  //   getCurrentBalance() {
  //     let balance = 0;
  //     for (const entry of this.entries) {
  //       balance += entry.type === "income" ? entry.amount : -entry.amount;
  //     }
  //     return balance;
  //   }

  getFormattedEntries() {
    let formattedEntries = [];
    this.entries.forEach((entry) => {
        if (entry.type === "income") {
            formattedEntries.push(`${entry.date} | ${entry.description} | ${entry.amount} €`);
        } 
        else if (entry.type === "expense") {
            formattedEntries.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
        }
    });
    return formattedEntries;
   
  }
}
