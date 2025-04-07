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
    this.date = date;
    this.amount = amount;
    this.description = description;
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date);
    this.amount = amount;
    this.description = description;
    this.paid = Boolean(paid);
    this.type = "expense";
  }

  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

const ex1 = new Expense("2024-06-17", 100, "food", true);

console.log(ex1.getFormattedAmount());

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
    } else {
      let totalIncome = 0;
      let totalExpense = 0;

      for (let i = 0; i < this.entries.length; i++) {
        if (this.entries[i].type === "income") {
          totalIncome += this.entries[i].amount;
        } else {
          totalExpense += this.entries[i].amount;
        }
      }

      return totalIncome - totalExpense;
    }
  }
}
