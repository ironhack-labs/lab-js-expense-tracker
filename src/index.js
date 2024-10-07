// Entry
class Entry {
    constructor (date,amount,description) {
        this.date = date
        this.amount = amount
        this.description = description
    }

    getFormattedAmount() {
        return `${this.amount.toString()} €`
    }
}

// Income
class Income extends Entry {
    constructor (date,amount,description) {
        super(date,amount,description)
        this.type = 'income'
    }
}

// Expense
class Expense extends Entry {
    constructor (date,amount,description,paid) {
        super(date,amount,description)
        this.type = 'expense'
        this.paid = paid
    }

    getFormattedAmount() {
        return `-${this.amount.toString()} €`
    }
}

// Budget
class Budget {
    constructor (){
        this.entries = []
    }
    
    addEntry (newEntry) {
        this.entries.push(newEntry)
    }
    
    getCurrentBalance () {
        if (this.entries.length === 0) {
            return 0
        }
        let totalIncome = 0; 
        this.entries.forEach (entry => {
            if (entry.type === 'income') {
                totalIncome += entry.amount
            }
            if (entry.type === 'expense') {
                totalIncome -= entry.amount
            }
        })
        
            return totalIncome
        }
        // {
        //     return this.entries.reduce((acc,entry) => acc + entry.amount,0)
        // }
    

    getFormattedEntries () {
        let formatedEntries = []
        this.entries.forEach((entry) => {
            formatedEntries.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`);
        })
       return formatedEntries

    }
}


