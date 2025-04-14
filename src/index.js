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
    constructor(date, amount, description){
        super(date, amount, description)
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description)
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

 addEntry(Income){
   this.entries.push(Income)
 }

 getCurrentBalance(){
    let total = 0
    if (this.entries.length === 0){
    return 0
 } else {
for (let i = 0; i < this.entries.length; i++){
    if (this.entries[i].type === "income"){
        total += this.entries[i].amount
    } else {
        total -= this.entries[i].amount
    }
}
 }
return total 
 }
}
