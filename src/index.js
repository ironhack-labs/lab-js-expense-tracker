console.clear()

// Entry
class Entry {
    constructor(date, amount, description){
        this.date= date,
        this.amount= amount,
        this.description = description
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry{
    constructor(date, amount, description){
        super(date, amount, description),
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description),
        this.type = "expense",
        this.paid = paid
    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }
    addEntry(object){
        this.entries.push(object);
        return
    }
    getCurrentBalance(){
        if (this.entries.length === 0){
            return 0
        }  else { // should return the difference between the total income and the total expense of all entries
            return Expense.amount.expense - Income.amount.Income
        }
        
    }

}