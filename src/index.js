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
    constructor(date, amount, description, type = "income"){
        super(date, amount, description)
        this.type = type
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid, type = "expense"){
        super(date, amount, description)
        this.type = type
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
    addEntry(newEntry){
        this.entries.push(newEntry)
    }
    getCurrentBalance(){
        let totalBalance = 0
        this.entries.forEach(function (entry){
            if (entry.type === 'income'){
                totalBalance += entry.amount
            } else {
                totalBalance -= entry.amount
            }
        })
        return totalBalance
    }
    getFormattedEntries(){
        const allEntries = []
        this.entries.forEach(function (entry){
            //return entry.type === 'income' ? `${entry.date} | ${entry.description} | ${getFormattedAmount()}` :
            allEntries.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`)
        })
        return allEntries
    }
}



