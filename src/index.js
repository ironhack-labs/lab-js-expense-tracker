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
        super(date, amount, description, paid);
        this.type = 'expense';
        this.paid = paid;
    }
    getFormattedAmount() {
       return `-${this.amount} €`;
    }
}

  // Budget
  class Budget {
    constructor (){
        this.entries = [];       
    }
    addEntry(entry) {
        this.entries.push(entry)

    }
    getCurrentBalance() {
    if ( this.entries.length === 0){
        return 0;        
    } 
    let total = 0;
    for (let i = 0; i < this.entries.length; i ++){
        if (this.entries[i].type === 'income') {
            total += this.entries[i].amount;
        } else {
            total -= this.entries[i].amount; 
        }
    }
    return total;
    }
    // another way
    getCurrentBalance() {
        if ( this.entries.length === 0){
            return 0;        
        } 
        let total = 0;
        this.entries.forEach((elem) => {
            if (elem.type === 'income') {
                total += elem.amount;
            } else if (elem.type === 'expense') {
                total -= elem.amount;
            }
        })
        return total;
    }

    getFormattedEntries() { 
        const strArray = [];
        this.entries.forEach((oneEntryInLoop) => {
            if (oneEntryInLoop.type === 'income') {
                 strArray.push(`${oneEntryInLoop.date} | ${oneEntryInLoop.description}  | ${oneEntryInLoop.getFormattedAmount()}`);
            } else if (oneEntryInLoop.type === 'expense') {
                strArray.push(`${oneEntryInLoop.date} | ${oneEntryInLoop.description}  | ${oneEntryInLoop.getFormattedAmount()}`);
           }
        });
        return strArray;
    }
  } 