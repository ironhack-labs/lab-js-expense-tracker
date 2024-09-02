// Entry
class Entry {
  constructor (date, amount, description){
    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  getFormattedAmount(){
    return `${this.amount} €`;
  }
}

// Income
class Income extends Entry {
  constructor (date, amount, description){
    super(date, amount, description);
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor (date, amount, description, category){
    super(date, amount, description);
    this.type = "expense";
    this.paid = category;
  }

  getFormattedAmount(){
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor(){
    this.entries =[];
  }

  addEntry(newEntry){
    this.entries.push(newEntry);
  }

  getCurrentBalance(){
    if (this.entries.length === 0) {
      return 0;
    }
    let totalIncome = 0;
    let totalExpenses = 0;
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "income") {
        totalIncome += this.entries[i].amount;
      } else if (this.entries[i].type === "expense") {
        totalExpenses += this.entries[i].amount;
      }
    }
      return totalIncome - totalExpenses;
    }

  //Bonus - Get Formatted Entries
  getFormattedEntries(){
    let formatterEntries = [];
    for (let i = 0; i < this.entries.length; i++){
      formatterEntries.push(`${this.entries[i].date} | ${this.entries[i].description} | ${this.entries[i].getFormattedAmount()}`);
    }
    console.log(formatterEntries)
    return formatterEntries;
  }
}

  
