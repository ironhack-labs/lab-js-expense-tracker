// Entry
class Entry {
    constructor (date,amount,description) {
        this.date = date,
        this.amount = amount,
        this.description = description
    }
    getFormattedAmount() {
        return this.amount + " €"
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super (date,amount, description);
        this.type = "income"
    }
}

// Expense
class Expense extends Entry{
    constructor (date, amount, description, category) {
        super (date,amount, description);
        this.paid = category;
        this.type = "expense"
    }
    getFormattedAmount() {
        return "-" + this.amount + " €"
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = []
    }
    addEntry(newEntry) {
        this.entries.push(newEntry)
    }
    getCurrentBalance(){
        if (this.entries.length === 0) {
            return 0
        }
        let balance = 0;
        this.entries.forEach(element => 
            element.type === "income"? balance += element.amount : balance -= element.amount     
        )
        return balance
    }
    getFormattedEntries() {
        let result= [];
        this.entries.forEach(entrie => {
          entrie.type === "income"?
          result.push(`${entrie.date} | ${entrie.description} | ${entrie.amount} €`)
          :
          result.push(`${entrie.date} | ${entrie.description} | -${entrie.amount} €`)
        })
        return result
    }
}