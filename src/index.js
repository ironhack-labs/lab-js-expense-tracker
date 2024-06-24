// Entry
class Entry {
    constructor(date, amount, description){
        this.date=date
        this.amount=amount
        this.description=description
    }
    
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description)
        this.type="income"
    }
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid){
        super(date, amount, description, paid)
        this.type="expense"
        this.paid=paid
    }

    getFormattedAmount(){
        return `${this.amount*Math.sign(-1)} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries= []
    }

    addEntry(counterExpenses){
        this.entries.push(counterExpenses)
        return 
    }

    getCurrentBalance(){
        
        if (this.entries.length === 0){
            return 0
        }

        let counterIncome = 0
        let counterExpenses= 0
        let balanceTotal = 0

        for (let i=0; i < this.entries.length; i++) {
           if(this.entries[i].type === "income"){
            counterIncome += this.entries[i].amount;
           } else if (this.entries[i].type === "expense"){
            counterExpenses+= this.entries[i].amount;
            }
        }
        balanceTotal = counterIncome - counterExpenses
        return balanceTotal
        
    }
}
  