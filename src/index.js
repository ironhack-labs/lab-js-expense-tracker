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
    this.paid = paid; // boolean
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
    let balance = 0;

    if (this.entries.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < this.entries.length; i++) {
        if (this.entries[i].type === "income") {
          balance += this.entries[i].amount;
        } else if (this.entries[i].type === "expense") {
          // && this.entries[i].paid){
          balance -= this.entries[i].amount;
        }
      }
    }
    return balance;
  }
  getFormattedEntries() {
    let formattedEntries = [];
    for (let i = 0; i < this.entries.length; i++) {
      formattedEntries.push(
        `${this.entries[i].date} | ${
          this.entries[i].description
        } | ${this.entries[i].getFormattedAmount()}`
      );
    }
    return formattedEntries;
  }
}


const budget1 = new Budget();
const budget2 = new Budget();
const income1 = new Income("2024-06-17", 200, "salary");
const income2 = new Income("2024-06-17", 200, "tips");
const expense1 = new Expense("2024-06-17", 500, "new tattoo", true);
const expense2 = new Expense("2024-06-17", 100, "food for the dog", false);

budget1.addEntry(income1);
budget1.addEntry(income2);
budget1.addEntry(expense1);
budget1.addEntry(expense2);

console.log(budget1.getCurrentBalance());
console.log();
console.log(budget1.getFormattedEntries());
