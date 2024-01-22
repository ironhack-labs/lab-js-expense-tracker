// Entry
class Entry {
    constructor(dateValue, amountValue, descriptionValue){
        this.date = dateValue
        this.amount = amountValue
        this.description = descriptionValue
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry{
    constructor(dateValue, amountValue, descriptionValue){
    super(dateValue, amountValue, descriptionValue)

this.type = "income"
    }
}

// Expense
class Expense extends Entry{
    constructor(dateValue, amountValue, descriptionValue, paidValue){
    super(dateValue, amountValue, descriptionValue)
    this.paid = paidValue

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
    addEntry(entries){
        this.entries.push(entries)
    }
    getTotalIncome(){
        let sum = 0
        this.entries.forEach(eachEntry => {
            if (eachEntry.type === "income"){
        sum += eachEntry.amount}
    })
        return sum 
    }
    getTotalExpense(){
        let tot = 0
        this.entries.forEach(eachEntry =>{
            if(eachEntry.type === "expense"){
        tot += eachEntry.amount
            }
        })
        return tot
    }
    getCurrentBalance(){
        this.totalExpense =  this.getTotalExpense() 
        this.totalIncome = this.getTotalIncome()
        return this.totalIncome - this.totalExpense
    }

}
