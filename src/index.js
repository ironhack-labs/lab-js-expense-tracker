// Entry
class Entry {
    constructor (date, amount, description){
        this.date = date
        this.amount = amount
        this.description = description
    }

    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry{
    constructor (date, amount, description){
        super (date, amount,description)
        this.type = "income"
    }
}

// Expense
class Expense extends Entry{
    constructor (date, amount, description,paid){
        super (date, amount,description)
        this.paid = paid
        this.type = "expense"
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

    getTotalIncome(){
        if (this.entries.length === 0){
            return 0
        } 
        
        let totalIncomes = 0
        for (let i = 0; i < this.entries.length; i++){
        totalIncomes += this.entries[i]
        return totalIncomes
    }
        
    }
  
    getTotalExpense(){
        if (this.entries.length === 0){
            return 0
        } 

        let totalExpenses = 0
        for (let i = 0; i < this.entries.length; i++){
        totalExpenses += this.entries[i]
        return totalIncomes
    }
    }
    getCurrentBalance(){
        if (this.entries.length === 0){
            return 0
        } else {
            return totalIncomes - totalExpenses
        }
    }
}
