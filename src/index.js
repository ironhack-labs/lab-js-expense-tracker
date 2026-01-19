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
class Income extends Entry{
    constructor(date, amount, description){
        super(date, amount, description,)
        this.type = "income"
        
    }
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid){
        super(date, amount, description)
        this.type = "expense"
        this.paid = paid
    }
    getFormattedAmount(){
        return`-${this.amount} €`
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
        if(this.entries.length === 0){
            return 0
        }
        let incomeMoney = 0
        let expenceMoney = 0
        for(let i = 0; i < this.entries.length; i++ ){
            
            if(this.entries[i].type === "income"){
                incomeMoney += this.entries[i].amount;
            }
            if(this.entries[i].type === "expense"){
                expenceMoney += this.entries[i].amount;
            }
        }
        return incomeMoney - expenceMoney
    }

    getFormattedEntries(){
        let calc = []
        for(let i = 0; i < this.entries.length; i++ ){
            if(this.entries[i].type === "income"){
                calc.push(`${this.entries[i].date} | ${this.entries[i].description} | ${this.entries[i].amount} €`)
            }
            if(this.entries[i].type === "expense"){
                calc.push(`${this.entries[i].date} | ${this.entries[i].description} | -${this.entries[i].amount} €`)
            }
        }
        return calc
    }
}
