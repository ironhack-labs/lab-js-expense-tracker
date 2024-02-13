// Entry
class Entry {
    constructor(date, amount, description){
        this.date=date;
        this.amount=amount;
        this.description=description;
    }

    getFormattedAmount(){
        return this.amount+" €"
    }


}

// Income
class Income extends Entry {
    constructor(date,amount, description){
        super(date,amount, description)
        this.type="income";
    }
}

// Expense
class Expense extends Entry{
    constructor(date,amount,description,paid){
        super(date,amount,description)
        this.paid=paid;
        this.type="expense";
    }
    getFormattedAmount(){
        return `-${super.getFormattedAmount()}`
    }

}

// Budget
class Budget{
    constructor(){
        this.entries=[]
    }

    addEntry(entry){
        this.entries.push(entry)
    }

    getTotalIncome(){
        let totalIncome =0;
        this.entries.forEach((entry) =>{
            entry.type==="income" ? totalIncome+=entry.amount : null

        })
        return totalIncome
    }

    getTotalExpense(){
        let totalExpense =0;
        this.entries.forEach((entry) =>{
            entry.type==="expense" ? totalExpense+=entry.amount : null

        })
        return totalExpense
    }

    getCurrentBalance(){
        
        return this.getTotalIncome() - this.getTotalExpense()
    }


}


// getCurrentBalance
// should be defined
// should take no arguments
// should return 0 if there are no entries
// should return the difference between the total income and the total expense of all entries
// getTotalExpense
// should be defined
// should take no arguments
// should return 0 if there are no entries
// should return the total expense of all "expense" entries
// should use the 'forEach()' method to iterate over the entries array

// getTotalIncome
// should be defined
// should take no arguments
// should return 0 if there are no entries
// should return the total income of all "income" entries
// should use the 'forEach()' method to iterate over the entries array