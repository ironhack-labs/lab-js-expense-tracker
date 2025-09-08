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
  constructor(date, amount, description, type = "income") {
    super(date, amount, description);
    this.type = type;
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid, type = "expense") {
    super(date, amount, description);
    this.paid = paid;
    this.type = type;
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

  addEntry(IorEArr) {
    this.entries.push(IorEArr);
  }

  getCurrentBalance() {
    if (this.entries === 0) {
      return 0;
    }
    let expensetotal = 0;
    let incometotal = 0;

    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "expense") {
        expensetotal += this.entries[i].amount;
      } else {
        incometotal += this.entries[i].amount;
      }
    }

    return expensetotal - incometotal;
  }

  getFormattedEntries() {
    let formattedarray = [];
    this.entries.forEach(function (currentElement) {
      if (currentElement.type === "income") {
        formattedarray.push(
          `${currentElement.date} | ${currentElement.description} | ${currentElement.amount} €`
        );
      } else {
        formattedarray.push(
          `${currentElement.date} | ${currentElement.description} | -${currentElement.amount} €`
        );
      }
    });
    return formattedarray;
  }
}

let budget1 = new Budget();

let newincome = new Income("2025.06.24", 25, "lala");

let newexpense = new Expense("2023.05.24", 50, "lalala");

budget1.addEntry(newincome);
budget1.addEntry(newexpense);
let result = budget1.getFormattedEntries();

console.log(budget1);
console.log(result);
// Get formatted Entries
