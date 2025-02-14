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
    constructor(date,amount,description){
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
    addEntry(newEntry){
        this.entries.push(newEntry)
    }

    getTotalIncome(){
        let total = 0;
        this.entries.forEach((entry) => {
            if(entry.type === "income"){
                total += entry.amount
            }
        });
        return total
    }

    getTotalExpense(){
        let total = 0;
        this.entries.forEach((entry) => {
            if(entry.type === "expense"){
                total += entry.amount
            }
        });
        return total;
    }

    getCurrentBalance(){
        if(this.entries.length === 0){
            return 0
        } else{
          return this.getTotalIncome() - this.getTotalExpense()  
        }
       
    }

    getFormattedEntries(){
        const formattedEntries = [];
        this.entries.forEach((entry) => {
            if(entry.type === "income"){
                formattedEntries.push(`${entry.date} | ${entry.description} | ${entry.amount} €`) 
            }
            else if(entry.type === "expense"){
                formattedEntries.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`) 
            }
        });
        console.log(formattedEntries)
        return formattedEntries;
    }
}
