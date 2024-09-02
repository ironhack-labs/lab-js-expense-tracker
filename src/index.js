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
    this.entries.push(entry);   // Será un objeto new entry 'income' o 'expense'
  }

  getCurrentBalance() {
    if(this.entries.length === 0) {
      return 0;
    }

    let totalIncome = 0;
    let totalExpense = 0;

    for(let i = 0; i < this.entries.length; i++) {
      if(this.entries[i].type === "income") {
        totalIncome += this.entries[i].amount;
      } else if(this.entries[i].type === "expense") {
        totalExpense += this.entries[i].amount;
      }
    }

    return totalIncome - totalExpense;
  }

  getFormattedEntries() {
    let arrayStrings = [];

    for(let i = 0; i < this.entries.length; i++) {
      let entry = this.entries[i];

      if(entry.type === "income") {
        arrayStrings.push(`${entry.date} | ${entry.description} | ${entry.amount} €`);
      } else if(entry.type === "expense") {
        arrayStrings.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
      }
    }

    // console.log("sale algo", incomes, expenses);
    return arrayStrings;
  }
}

let ingreso1 = new Income("20/08", 100, "extra");
let ingreso2 = new Income("21/08", 150, "bonus");
let gasto1 = new Expense("02/09", 50, "comida", true);

let total = new Budget();
total.addEntry(ingreso1);
total.addEntry(ingreso2);
total.addEntry(gasto1);

console.log(total.getFormattedEntries());

