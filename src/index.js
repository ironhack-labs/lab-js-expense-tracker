// Entry
class Entry {
    constructor(date, amount, description){
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
    constructor (date, amount, description){
        super(date, amount, description)
        this.type = "income"
    }
}

// Expense
class Expense extends Entry{
    constructor (date, amount, description, paid){
        super(date, amount, description)
        this.type = "expense"
        this.paid = paid
    }

    getFormattedAmount(){
        return `-${super.getFormattedAmount()}`
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
        let balance = 0;

        for (let entry of this.entries){
            
            if (entry.type === "income"){
                balance += entry.amount
            }else{
                balance -= entry.amount
            }
        }
        return balance
    }

    getFormattedEntries(){
        let formattedEntries = []
        this.entries.forEach(entry => {
            if(entry.type === "income"){
                formattedEntries.push(`${entry.date} | ${entry.description} | ${entry.amount} €`)
            }else{
                formattedEntries.push(`${entry.date} | ${entry.description} | -${entry.amount} €`)
            }
        })
        return formattedEntries
    }
}
