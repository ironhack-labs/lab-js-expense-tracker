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
  constructor(date, amount, description, category) {
    super(date, amount, description);
    this.type = "expense";
    this.paid = category;
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

    let income = 0;
    let expenses = 0;

    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "income") {
        income += this.entries[i].amount;
      } else {
        expenses += this.entries[i].amount;
      }
    }

    return income - expenses;
  }
  getFormattedEntries() {
    let formattedStrings = [];

    for (let i = 0; i < this.entries.length; i++) {
      formattedStrings.push(
        `${this.entries[i].date} | ${this.entries[i].description} | ${this.entries[i].getFormattedAmount()}`
      );
    }
    return formattedStrings;
  }
}

income1 = new Income(2, 10, "fsd");
income2 = new Income(2, 10, "fsd");
income3 = new Income(2, 10, "fsd");

expense1 = new Expense(2, 2, "dsd", false);
expense2 = new Expense(2, 2, "dsd", true);xs

budget = new Budget();

budget.addEntry(income1);
budget.addEntry(income2);
budget.addEntry(income3);
budget.addEntry(expense1);
budget.addEntry(expense2);

console.log(budget.getFormattedEntries);

//console.log(budget)

//console.log(income1)
