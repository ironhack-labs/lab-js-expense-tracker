// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    let resultAmount = `${this.amount} €`;
    return resultAmount;
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    //porque é que não tem type nos parenteses??
    super(date, amount, description);
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.type = "expense";
    this.paid = paid;
  }
  getFormattedAmount() {
    let resultAmount = `-${this.amount} €`;
    return resultAmount;
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
  getTotalIncome() {
    if (this.entries.length === 0) {
      return 0;
    }
    let entriesSum = 0;
    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        entriesSum += Number(entry.amount);
      }
    });
    return entriesSum;
  }
  getTotalExpense() {
    let expensesSum = 0;
    this.entries.forEach((entry) => {
      if (entry.type === "expense") {
        expensesSum += Number(entry.amount);
      }
    });
    return expensesSum;
  }
  getCurrentBalance(){
    if (this.entries.length === 0) {
      return 0
    }
    else {
      return this.getTotalIncome() - this.getTotalExpense()
    }
  }
}
