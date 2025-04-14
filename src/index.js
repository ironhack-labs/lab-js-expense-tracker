// Entry
class Entry {
    constructor(date, amount, description) {    //constructor is a function inside of a function. 
        this.date = date // not an object. its a function thats being executed 
        this.amount = amount // this.amount assigned to the value of the amount passed in as the argument to the constructor? se repite en cada uno
        this.description = description  
    }
    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {  //every class needs a constructor so it needs to be added 
        super(date, amount, description)  //invokes parent class constructor?
        this.type = 'income'   
    }                
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description)
        this.type = 'expense'
        this.paid = paid
    }
    getFormattedAmount() { 
        // return `-$(this.amount) €`
        return `-${super.getFormattedAmount()}`// super gets return from parent class
    }
}

// Budget
    class Budget {
        constructor() {  // zero arguments
            this.entries = []  // assign value of empty array
        }
    
        addEntry(entry) {  // add methods to budget class
            this.entries.push(entry)// regardless of entry it will push
        }
    
        getCurrentBalance() {
    
            let balance = 0
    
            this.entries.forEach((entry) => {
                if (entry.type === 'income') {
                    balance += entry.amount
                } else {
                    balance -= entry.amount
                }
            })
    
            return balance
    
        }
        
        getFormattedEntries() {
            
            let theseEntries = []
    
            this.entries.forEach((entry) => {
    
                let returnString = `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
                theseEntries.push(returnString)
            
            })
    
            return theseEntries
    
        }
    }