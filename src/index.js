// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount (){
    let money = this.amount + " €";
    return money; 
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
class Expense extends Entry{
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense"; 
  }
  getFormattedAmount (){
    let money = "-" + this.amount + " €";
    return money; 
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
    let addBalance = 0;
    if (this.entries.length == 0){
      return 0;
    }
    for (let i=0 ; i<entries.length ; i++) {
      if (entries[i].entry === "income"){
        addBalance += entries[i].amount;
      }
      else if (entries[i] === "expense"){
        addBalance -= entries[i].amount;
      }
    };
    return addBalance;
  }

}
