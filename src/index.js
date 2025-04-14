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
  addEntry(newEntry) {
    this.entries.push(newEntry);
  }
  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    } else {
      let totalIncome = 0;
      let totalExpenses = 0;
      this.entries.forEach((entry) => {
        if (entry.type === "income") {
            totalIncome += entry.amount;   
        }
        else if (entry.type === "expense"){
            totalExpenses += entry.amount;
        }
      });
      return totalIncome - totalExpenses;
    }
}
getFormattedEntries() {  
    const arr = [];
    this.entries.forEach((entry) => {
        if (entry.type === "income") {
            arr.push(`${entry.date} | ${entry.description} | ${entry.amount} €`)   
        }
        else if (entry.type === "expense"){
            arr.push(`${entry.date} | ${entry.description} | -${entry.amount} €`)
        }
    }
)
return arr;
}
}