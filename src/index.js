// Entry
class Entry {
  constructor(date, amount,  description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount(){
    return `${this.amount} €`;
  }
}

// Income
class Income extends Entry{
  constructor(date, amount,  description) {
    super(date, amount,  description);
    this.type = "income";
  }
}

// Expense
class Expense extends Entry{

  constructor(date, amount,  description, paid){
    super(date, amount,  description);
    this.type = "expense";
    this.paid = paid;
  }
  getFormattedAmount(){
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {

  
  constructor(){
    this.entries = [];
  }
  addEntry(entry){
    this.entries.push(entry);
  }
  getCurrentBalance(){
    if (this.entries.length === 0) {
      return 0;
    }
    //lo unico que tenemos es el array entries//este tiene que estar relleno de expenses o incomes //la diferencia esta en la propiedad type: 
    let balance = 0;
    let totalIncome = 0;
    let totalExpenses = 0;
    for (let i = 0; i < this.entries.length; i++){
      if (this.entries[i].type === "expense"){
        totalExpenses += this.entries[i].amount;
      } else {
        totalIncome += this.entries[i].amount;
      }
    }
    balance = totalIncome - totalExpenses;
    return balance;
  }

  //"DATE | DESCRIPTION | +AMOUNT €"
  getFormattedEntries(){
    let formatedEntriesArray = [];

    for (let i = 0; i < this.entries.length; i++){
      if (this.entries[i].type === "expense"){
        formatedEntriesArray.push(`${this.entries[i].date} | ${this.entries[i].description} | -${this.entries[i].amount} €`);
      } else if (this.entries[i].type === "income"){
        formatedEntriesArray.push(`${this.entries[i].date} | ${this.entries[i].description} | ${this.entries[i].amount} €`);
      } else {
        return 0;
      }
    }

    console.log(formatedEntriesArray);
    
    return formatedEntriesArray;
    

  }
}
