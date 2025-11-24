// Entry
class Entry {
    constructor (date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
        getFormattedAmount (){
            return `${this.amount} €`
        }
}

let amount = 100;


// Income
class Income extends Entry {
    constructor (date, amount, description){
        super(date, amount, description)
        this.type = `income`;
    }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid){
        super (date, amount, description, paid)
        this.paid = paid;
        this.type = "expense"
    }
     getFormattedAmount (){
            return `-${this.amount} €`
        }
    }     
    
    amount = 99;


// Budget
class Budget {
    constructor(){
        this.entries=[];
    }

    addEntry(entry) {
        this.entries.push(entry);
    }
    
    getCurrentBalance(){
      if (this.entries.length === 0){
        return 0;
      }

      let total = 0;

      for (let i=0; i<this.entries.length; i++){
        let amounts = this.entries[i];
        if(amounts.type === "income"){
            total += amounts.amount;
            } else if (amounts.type === "expense"){
                total -=amounts.amount;
            }
        }
         return total;
      }
    
    }
  


