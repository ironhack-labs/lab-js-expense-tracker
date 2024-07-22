// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date
        this.amount = amount
        this.description = description
    }

    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description, type = "income"){
        super(date, amount, description)
        this.type = type
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description)
        this.type = "expense"
        this.paid = paid

    }

    getFormattedAmount(){
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = []
    }

    addEntry(entry){
        this.entries.push(entry)
    }

    getCurrentBalance(){
        return this.entries.reduce((balance, entry) => {
            if (entry.type === 'income') {
                return balance + entry.amount
            } else if (entry.type === 'expense') {
                return balance - entry.amount
            }
            return balance
        }, 0)
    }

    getFormattedEntries(){
        return this.entries.map((entry) => `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`)
    }
}
