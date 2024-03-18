// Entry
class Entry {
    constructor(date, amount, description){
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
    constructor (date, amount, description){
        super(date, amount, description)
        this.type = `income`
    }
    
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super(date, amount, description)
        this.type = "expense"
        this.paid = paid;
        
    }
    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

// Budget
class Budget{
constructor () {
    this.entries = []
} 
    addEntry(entry) {
        this.entries.push(entry)
    }
    getCurrentBalance(){
        if (this.entries.length === 0) {
            return 0;
        }

        let sum = 0;
        this.entries.forEach(function(entry) {
            if (entry.type === "income") {
                sum += entry.amount;
            }
            else if (entry.type === "expense") {
                sum -= entry.amount;
            }    
        }); return sum     
    }
}

