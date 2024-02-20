// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date; //binding 'date' to the class of Entry
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
    super(date, amount, description); //inherit attributes from the Entry class
    this.type = "income"; //create new attribute specific to Income class
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
  getTotalIncome() {
    let totIn = 0;
    this.entries.forEach((e) => {
      if (e instanceof Income) {
        totIn += e.amount;
      }
    });
    return totIn;
  }
  getTotalExpense() {
    let totOut = 0;
    this.entries.forEach((e) => {
      if (e instanceof Expense) {
        totOut += e.amount;
      }
    });
    {
      return totOut;
    }
  }
  getCurrentBalance() {
    let balance = 0;
    this.entries.forEach((e) => {
      balance.push(e(totIn.amount - totOut.amount));
    });
    return balance;
  }
}
