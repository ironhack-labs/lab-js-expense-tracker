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
        this.paid = paid;
        this.type = 'expense';
    }
    getFormattedAmount() {
        return `${- this.amount} €`;
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];

    }

    addEntry (entry){

        this.entries.push(entry);
    }

   getCurrentBalance(){
    let balance = 0;
    if(this.entries.length === 0){
        return balance;
    }
    for (let i = 0; i < this.entries.length; i++){
        if(this.entries[i].type === 'income'){
            balance += this.entries[i].amount;
        } else {
            balance -= this.entries[i].amount;
        }
    }

    return balance;
   }

   getFormattedEntries(){
    let finalArr = [];
    this.entries.forEach(function (element){
        finalArr.push({
            date: element.date,
            amount: element.getFormattedAmount(),
            description: element.description,
        });
    });
   return finalArr;

   }
}


