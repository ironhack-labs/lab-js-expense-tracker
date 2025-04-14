// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date
    this.amount = amount
    this.description = description
  }
  getFormattedAmount () {
    return `${this.amount} €`
  }
}

// Income
class Income extends Entry {
    constructor (date, amount, description) {
        super (date, amount, description)
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super (date, amount, description)
        this.paid = paid
        this.type = "expense"
    }
    getFormattedAmount () {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor (){
        this.entries = []
    }
    addEntry (newExpense){
        this.entries.push(newExpense)
    }
    getCurrentBalance (){
        
        if (this.entries.length === 0){
            return 0
        } 

        let newIncome = 0
        let newExpense = 0
        let totalBalance = 0
        
        for (let i = 0; i <this.entries.length; i++) {

            if (this.entries[i].type === 'income'){
                newIncome += this.entries[i].amount;
            } else if (this.entries[i].type === 'expense'){
                newExpense += this.entries[i].amount;
            }
        }

        totalBalance = newIncome - newExpense
        return totalBalance
                // income es sumando y expense es restar
        
    }
}