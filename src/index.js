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
    constructor(date, amount, description){
        super(date, amount, description)
        this.type = 'income'
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description)
        this.paid = paid
        this.type = 'expense'
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
      let balance = 0

      this.entries.forEach(entry =>{
        if(entry.type === 'income'){
            balance += entry.amount
        }
        else{
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
