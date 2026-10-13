// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  getFormattedAmount() {
    return ` ${this.amount}€ `;
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
    this.entries.push(entry);
  }
  getCurrentBalance() {
    let balance = 0;
    console.log(this.entries);

    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "income") {
        balance += this.entries[i].amount;
      } else if (this.entries[i].type === "expense") {
        balance -= this.entries[i].amount;
      }
    }

    // const diffIncome= newIncome1.amount - newExpense.amount;
    return balance;
  }
}

const newEntry = new Entry("12.10.2026", 100, "entry fee");

const newIncome = new Income("22.10.2026", 200, "entry fee vary income");
const newExpense = new Expense(
  "22.10.2026",
  200,
  "entry fee vary income",
  true,
);

console.log(newEntry);
console.log(newIncome);
console.log(newExpense);

console.log(newIncome.getFormattedAmount());
console.log(newExpense.getFormattedAmount());

const newBudget = new Budget("12.10.2026", 100, "entry fee");
console.log(newBudget.addEntry("12.10.2026", 100, "entry fee"));

newBudget.addEntry(newIncome);

console.log(newBudget.entries);

console.log(newBudget.getCurrentBalance());
