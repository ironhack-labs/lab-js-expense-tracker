// Entry
class Entry {
constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
    
}

// method 
getFormattedAmount(){
let string = `${this.amount} €`;
return string
}
}

// Income
class Income extends Entry {
constructor(date, amount, description, type){
    super(date, amount, description)
      this.type = type

}

}

// Expense
class Expense extends Entry {
constructor(date, amount, description, paid){
    super(date, amount, description)
      this.paid = paid;
      this.amount = -amount;

}

getFormattedAmounExpenses() {

let string = `amount €:" ${this.amount}`;
return string
}
}

// BUDGET 
class Budget {
    constructor() {
    this.entries = [];
    if(this.entry.length === 0) {
    return 0}
    }
  
addNewEntry(NewEntry) {
 
 this.entry.push(NewEntries);

}
getCurrentBalance() {
let totalEntries = 0;
if (this.entry.lenght === 0 ) {return 0;} 
else {
for (let i = 0; i <= this.entry.length; i++ ) 
    if (this.Entry === "Entry" ) {
        total += this.entry[i].amount
        return total;
    }

}

}

}

 