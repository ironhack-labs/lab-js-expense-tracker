// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date
        this.amount = amount
        this.description = description
        this.active = true
    }
    getFormattedAmount(){
        return `${this.amount} €`   
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
class Expense extends Entry{
    constructor (date, amount, description, paid){
        super(date, amount, description)
        this.paid = paid
        this.type = 'expense'
    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = []
        this.totalExpense = 0
        this.totalIncome = 0
    }
    
    addEntry(entry){
        this.entries.push(entry)
    }


    getTotalIncome(){
        this.totalIncome=0
        if (this.entries.length === 0){
            return 0
        }
        this.entries.forEach(function(entry){
            if (entry.type === 'income') {
                this.totalIncome += entry.amount;
            }
        }, this);
        return this.totalIncome
    }
    
    getTotalExpense(){
        this.totalExpense=0
        if (this.entries.length === 0){
            return 0
        }
        this.entries.forEach(function(entry){
            if (entry.type === 'expense') {
                this.totalExpense += entry.amount;
            }
        }, this);
        return this.totalExpense
    }

    getCurrentBalance(){
        this.totalIncome = this.getTotalIncome()
        this.totalExpense = this.getTotalExpense()
        return (this.totalIncome - this.totalExpense)
    }

}
