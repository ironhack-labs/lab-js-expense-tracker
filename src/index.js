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
  addEntry(entry) {
    this.entries.push(entry);
  }
  getCurrentBalance(){
    if(this.entries.length === 0 ){
        return 0
    }
    let totalIncome = 0;
    let totalExpense = 0;
    for(let i = 0; i < this.entries.length; i++){
        if(this.entries[i].type === "income"){
            totalIncome += this.entries[i].amount;
        }else if(this.entries[i].type === "expense"){
            totalExpense += this.entries[i].amount;
        }
    }
    return totalIncome - totalExpense;
  }
}

