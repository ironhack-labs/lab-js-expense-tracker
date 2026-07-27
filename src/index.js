// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    type = "income"
    constructor(date, amount, description){
        super(date, amount, description)
        
    }
}

// Expense
class Expense extends Entry{
    type = "expense"
    constructor(date, amount, description, paid){
        super(date, amount, description)
        this.paid = paid;
    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    entries = [];
    addEntry(object){
        this.entries.push(object)
    }
    getCurrentBalance(){
        let totalEntry = 0;
        let totalExpense = 0;
        if(this.entries.length === 0){
            return 0;
        }else{
         this.entries.forEach(function(entry) {
            if(entry.type === "income"){
                totalEntry += entry.amount
            }else if(entry.type === "expense"){
                totalExpense += entry.amount;
            }
         });  
        }
       return totalEntry - totalExpense ;
    }
}
