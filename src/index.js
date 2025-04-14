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
    super(date, amount, description, paid);
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
    let result = 0;
    if (this.entries.length === 0) {
      return 0;
    } else {
      this.entries.forEach((transaction) => {
        if (transaction.type === "income") {
          result += transaction.amount;
        } else if (transaction.type === "expense") {
          result -= transaction.amount;
        }
      });
    }
    return result;
  }
  getFormattedEntries() {
    let formattedEntries = [];
    this.entries.forEach((eachFormattedEntry) => {
      if (eachFormattedEntry.type === "income") {
        formattedEntries.push(
          `${eachFormattedEntry.date} | ${eachFormattedEntry.description} | ${eachFormattedEntry.amount} €`
        );
      } else if (eachFormattedEntry.type === "expense") {
        formattedEntries.push(
          `${eachFormattedEntry.date} | ${eachFormattedEntry.description} | -${eachFormattedEntry.amount} €`
        );
      }
    });
    return formattedEntries;
  }
}

//

//! ----  Area for testing!  ---- //
