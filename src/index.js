// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount(){
        return  this.amount + " €";
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super()
        this.date = date;
        this.amount = amount;
        this.description = description;
        this.type = "income"
    }
    
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description,paid){
        super()
        this.date = date;
        this.amount = amount;
        this.description = description;
        this.paid = paid;
        this.type = "expense"
    }

    getFormattedAmount(){
        return  `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }
    addEntry(Income){
        this.entries.push(Income)
    }

    getCurrentBalance(){
        if(this.entries.length === 0){
            return 0;
        }
        else{
            /*
            getCurrentBalance(){
       if(this.entries.length === 0 || !this.entries){
             return 0
       }
        const tempIncome = []
        const tempExpense = []
        for (const val of this.entries){
            if (val.type === "income"){
                tempIncome.push(val.amount)
            }
            if (val.type === "expense") {
                tempExpense.push(val.amount)
            }
        }

       
       let sumIncom = 0
       let sumExpense = 0
       for (const val of tempIncome){
            sumIncom += val
       }
       for (const val of tempExpense){
              sumExpense += val
       }
       const balance = sumIncom - sumExpense
       return balance
    }
            */
        }
    }

    getFormattedEntries(){
        return this.entries.map(entry => {
            return `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
        })
    }
}
