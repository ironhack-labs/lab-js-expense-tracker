// Entry
class Entry {
    constructor (date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry{
    constructor (date, amount, description,){
        super (date, amount, description)
        this.type = "income"
    }
}

// Expense
class Expense extends Entry{
    constructor (date, amount, description, paid){
        super (date, amount, description)
        this.type = "expense"
        this.paid = paid
    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = []//array buit
    }
    addEntry(entry){ //té un argument
        this.entries.push(entry) //afegir l'argument entry a l'array entries
    }

    getCurrentBalance(){
        if (this.entries.length === 0){ //recorda que el this és perq no hi hagi problemes a l'hora de substituir els atributs
            return 0
        }

        let totalIncome = 0
        let totalExpenses = 0

        for (let i = 0; i<this.entries.length; i++){
            let entry =this.entries [i]
            if (entry.type === "income"){
                totalIncome += entry.amount;
            }else if (entry.type === "expense"){
                totalExpenses += entry.amount
            }
        }
    return totalIncome-totalExpenses
    }
}
