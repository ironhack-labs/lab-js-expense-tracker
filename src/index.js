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
    // this.amount = amount;
    // this.description = description;
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
    let balance = 0;

    if (this.entries.length === 0) {
      return 0;
    } //else if (this.newEntry instanceof Budget) {

    for (const entry of this.entries) {
      if (entry instanceof Income) {
        balance += entry.amount;
      } else {
        balance -= entry.amount;
      }
    }
    console.log(balance);
    return balance;
    // } else if (this.newEntry instanceof Income) {
    //   for (const entry of this.entries) {
    //     this.getCurrentBalance += balance;
    //   }
    // }
    // return this.Entry.Income.amount - this.Entry.Expense.amount;
  }
}
