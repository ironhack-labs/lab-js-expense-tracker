// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
    // this.getFormattedAmount();
  }
  getFormattedAmount() {
    // console.log(`${this.amount} €`);
    return `${this.amount} €`;
  }
}

// let testEntry = new Entry(new Date(), 111, "das");
// console.log(testEntry.getFormattedAmount());

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}

// let testIncome = new Income(new Date(), 111, "das");
// console.log(testIncome);

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";
  }
  getFormattedAmount() {
    // console.log(`${this.amount} €`);
    return `-${this.amount} €`;
  }
}

let testExpense = new Expense("2024-06-17", 100, "food", true);
console.log(testExpense.getFormattedAmount());
// Budget
class Budget {
  constructor() {
    this.entries = [];
  }
  addEntry(entry) {
    this.entries.push(entry);
    return this.entries;
  }
  getCurrentBalance() {
    if (!this.entries.length) return 0;
    let budgetSum = 0;
    this.entries.forEach((element) => {
      if (element.type === "expense") budgetSum -= element.amount;
      if (element.type === "income") budgetSum += element.amount;
    });
    return budgetSum;
  }
  getFormattedEntries() {
    let strArr = [];
    this.entries.forEach((element) => {
      if (element.type === "expense") {
        strArr.push(
          `${element.date} | ${element.description} | -${element.amount} €`
        );
      }
      if (element.type === "income") {
        strArr.push(
          `${element.date} | ${element.description} | ${element.amount} €`
        );
      }
    });
    return strArr;
  }
}

let testBudget = new Budget();
let testExpense2 = new Expense("2024-06-17", 100, "food", true);
let testIncome1 = new Income("2024-06-17", 50, "food");

console.log(testBudget.addEntry(testExpense2));
console.log(testBudget.addEntry(testIncome1));

// console.log(testBudget.getCurrentBalance());
console.log(testBudget.getFormattedEntries());
