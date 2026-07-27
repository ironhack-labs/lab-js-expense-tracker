// Entry
class Entry {
    constructor (date, amount, description) {
        this.date = date
        this.amount = amount
        this.description = description
    }

    getFormattedAmount = () => {
       let formattedAmount = this.amount.toString() + " €"
       return formattedAmount
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description)
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
     constructor(date, amount, description, paid) {
        super(date, amount, description)
        this.paid = paid
        this.type = "expense"
    }
    getFormattedAmount = () => {
       let formattedAmount = "-" + this.amount.toString() + " €"
       return formattedAmount
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = []
    }

    addEntry = (entry) => {
        return this.entries.push(entry)
    }

    getCurrentBalance = () => {
        if(this.entries.length > 0) {
            let balance = 0
            this.entries.forEach((entry) =>{
                if(entry.type === "income"){
                    balance += entry.amount
                }
                else if(entry.type === "expense"){
                    balance -= entry.amount
                }
            })
            return balance
        }
        else {
            return 0
        }
    }
}
