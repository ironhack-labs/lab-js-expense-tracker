// Entry
class Entry {
    constructor(date,amount,description){
        this.date = date;
        this.amount = amount;
        this.description = description
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry{
    constructor(date,amount,description){
        super(date,amount,description)
        this.type = "income"
    }
}

// Expense
class Expense extends Entry{
    constructor(date,amount,description,paid){
        super(date,amount,description)
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
        this.entries = []
    }
    addEntry(newEntry){
        this.entries.push(newEntry)
    }
    getCurrentBalance(){
        if(this.entries.length === 0){
            return 0
        }
        //totals
        let result = 0
        let expenses = 0
        let income = 0

        //loop through entries and classify by adding to totals
        for (let i = 0;i<this.entries.length;i++){
            if(this.entries[i].type === "income"){
                income += this.entries[i].amount
            }else{
                expenses += this.entries[i].amount
            }
        }

        //calculate total and return
        result = income - expenses
        return result
    }
    getFormattedEntries(){
        //itinerate through entries and log data depending on type
        let result = []
        
       for (let i = 0;i<this.entries.length;i++){
        
        if(this.entries[i].type === "expense"){
            result.push(( `${this.entries[i].date} | ${this.entries[i].description} | -${this.entries[i].amount} €`))
        }else{
            result.push((`${this.entries[i].date} | ${this.entries[i].description} | ${this.entries[i].amount} €`))
        }
       }
       return result
    }
 
}


