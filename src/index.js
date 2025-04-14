// Entry
class Entry {
    constructor(date, amount, description){
this.date = date;
this.amount = amount;
this.description = description;
}

getFormattedAmount (){
return `${this.amount} €`;
}
}

const Entry2 = new Entry("01/09/2024", 50, "Fruits");
console.log(`${Entry2.date}; ${Entry2.getFormattedAmount()}; ${Entry2.description}`);

// Income
class Income extends Entry{
    constructor (date, amount, description){
    super (date, amount, description);
    this.type = "income";
}
}

// Expense
class Expense extends Entry{
constructor (date, amount, description, paid){
    super (date, amount, description);
    this.paid = paid;
    this.type = "expense";
}

getFormattedAmount (){
    return `-${this.amount} €`;
    }
}

const expense1 = new Expense('September', 1000, "Dessert", true);
console.log(`${expense1.date}; ${expense1.getFormattedAmount()}; ${expense1.type}`);

// Budget
class Budget {
constructor() {
    this.entries = [];
  }

  addEntry(entry) {
    this.entries.push(entry); 
  }

  getCurrentBalance() {
    if (this.entries.length === 0) return 0;

    let totalIncome = 0;
    let totalExpense = 0;

    this.entries.forEach((entry) => {
      if (entry.type === 'income') {
        totalIncome += entry.amount;
      } else if (entry.type === 'expense') {
        totalExpense += entry.amount;
      }
    });

    return totalIncome - totalExpense; 
  }

  // helped 
  
  getFormattedEntries() {
    return this.entries.map((entry) => {
      if (entry.type === 'income') {
        return `${entry.date} | ${entry.description} | +${entry.getFormattedAmount()}`;
      } else if (entry.type === 'expense') {
        return `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
      }
    });
  }
}