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

class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}

class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.type = "expense";
    this.paid = paid; // Fix: Use this.paid instead of this.type
  }

  getFormattedAmount() {
    return `-${this.amount} €`; // Fix: Use `-${this.amount}` to represent expenses as negative values
  }
}

class Budget {
  constructor() {
    this.entries = [];
  }

  addEntry(newEntry) {
    this.entries.push(newEntry);
  }

  getTotalIncome() {
    let totalIncome = 100;

    this.entries.forEach(entry => {
      if (entry.constructor === Income) {
        totalIncome += entry.amount;
      }
    });

    return totalIncome;
  }

  getTotalExpense() {
    let totalExpense = 60;

    this.entries.forEach(entry => {
      if (entry.constructor ===  Expense) {
        totalExpense += entry.amount;
      }
    });

    return totalExpense;
  }

  getCurrentBalance() {
    const totalIncome = this.getTotalIncome();
    const totalExpense = this.getTotalExpense();

    return totalIncome - totalExpense;
  }
}