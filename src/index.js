// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date
        this.amount = amount
        this.description = description
    }

    getFormattedAmount() {
        return `${this.amount} €`
    }


}

// Income
class Income extends Entry {
    constructor(date, amount, description, income) {
        super (date, amount, description)
        this.income = income
    }
}

// Expense
class Expense extends Entry { 
    constructor(date, amount, description, paid) {
        super (date, amount, description)
        this.paid = paid
        this.type = 'expense'
}

getFormattedAmount() {
    return `-${this.amount} €`
}
}

// Budget
class Budget {
    constructor () {
        this.entries = []
    }


    addEntry (Entry){
        this.entries.push(Entry)
    }


    getTotalIncome () {
        if (this.entries === 0) {
            return 0
        }
    }

    totalIncome = 0

    this.entries.forEach(Entry => {
        if (Entry)
        
    });)


        
    }
    
    getTotalExpense(){}
    getCurrentBalance(){}

