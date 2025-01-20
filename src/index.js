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
    this.type = 'income';
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.type = 'expense';
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
  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }
    let totalIncome = 0;
    let totalExpense = 0;

    for (const newEntry of this.entries) {
      if (newEntry.type === 'income') {
        totalIncome += newEntry.amount;
      } else if (newEntry.type === 'expense') {
        totalExpense += newEntry.amount;
      }
    }

    return totalIncome-totalExpense;
  }
  getFormattedEntries(){
    
  }
}

/* const firstEntry = new Entry('2025,1,15', 1250, ' newinvestment');
firstEntry.getFormattedAmount();
const secondEntry = new Expense('2025,1,17' , 460, 'firstExpense');
secondEntry.getFormattedAmount(); */
