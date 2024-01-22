// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    console.log(`${this.amount} €`);
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
    console.log(`-${this.amount} €`);
    return `-${this.amount} €`;
  }
}

// Budget
class Budget extends Entry {
  constructor() {
    super();
    this.entries = [];
  }

  addEntry(entry) {
    this.entries.push(entry);
  }
  getTotalIncome() {
    if (this.entries.length === 0) {
      return 0;
    }
    let sum = 0;
    this.entries.forEach((element) => {
      sum += element;
      console.log(sum);
      return sum;
    });
  }
  getTotalExpense() {
    
    // this.entries.reduce((sum, entry) => entry.type === "income" ? sum + entry.amount : sum, 0);

    let sum = 0;
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "income") {
        sum += this.entries[i].amount;
      }
    }
    return sum

  }

  getCurrentBalance() {
    if (this.entries.length === 0) {
        return 0;
      }
    return this.getTotalIncome() - this.getTotalExpense() 
  }
}

// const budget = new Budget();
// const income = new Entry("2024-06-17", 100, "food");
// const expense = new Entry("2024-06-17", 100, "food", true);
// budget.addEntry(36);
// budget.addEntry(2);

// console.log(budget.getTotalIncome());
