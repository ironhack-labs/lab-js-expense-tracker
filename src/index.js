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

    if (this.paid === undefined) {
      this.paid = false;
    }
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
    // console.log(this.entries);
    // console.log(this.entries);
  }
  getTotalIncome() {
    if (this.entries.length === 0) {
      return 0;
    }

    this.totalIncome = 0;
    let entries = this.entries;

    // console.log("All Entries:", entries)

    entries.forEach((element) => {
      if (element.type === "income") {
        this.totalIncome += element.amount;
      }
    });
    // console.log("Total Income:", this.totalIncome);

    return this.totalIncome;
  }

  getTotalExpense() {
    if (this.entries.length === 0) {
      return 0;
    }

    this.totalExpense = 0;
    let entries = this.entries;

    // console.log("All Entries:", entries)

    entries.forEach((element) => {
      if (element.type === "expense") {
        this.totalExpense += element.amount;
      }
    });

    // console.log("Total Expenses:", this.totalExpense);

    return this.totalExpense;
  }

  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }
    
    
    console.log("Balance:", this.totalIncome - this.totalExpense)
    return this.getTotalIncome() - this.getTotalExpense()
    // return this.totalIncome - this.totalExpense
  }
}

// const myIncome1 = new Income("2024-12-02", 100, "Gehalt");
// const myIncome2 = new Income("2024-11-02", 149, "Gehalt2");
// // console.log(myIncome1.amount +  myIncome2.amount)

// const myExpense1 = new Expense("2024-12-02", 50, "Schuhe");
// // console.log(myExpense1)

// const budget = new Budget();
// budget.addEntry("income");
// budget.addEntry("expense");
// budget.getTotalIncome();

const budget = new Budget();
const income1 = new Income("2024-06-17", 100, "food");
const income2 = new Income("2024-06-17", 200, "food");
const expense = new Expense("2024-06-17", 100, "food", true);

budget.addEntry(income1);
budget.addEntry(income2);
budget.addEntry(expense);

budget.getTotalIncome();
budget.getTotalExpense();
budget.getCurrentBalance();
