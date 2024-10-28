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
    constructor (date, amount, description) {
        super(date, amount, description)
        this.type = "income";
    }  
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super(date, amount, description)
        this.paid = paid;
        this.type= "expense";
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

    addEntry(newEntry) {
        this.entries.push(newEntry)
    }

    getCurrentBalance() {
        if (this.entries.length === 0) return 0;

        let expense = 0;
        let income = 0;

        this.entries.forEach( entry => {          
            
            if (entry.type === "expense") {
                expense += entry.amount;
            } else {
                income += entry.amount;
            }
        } )
        
    return income - expense;
    }

    getFormattedEntries () {

        const variabel = this.entries.reduce((entries, entry) => {

            entries.push( `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}` )

            return entries;
        }, [] )       

        return variabel;
       
    }
}

