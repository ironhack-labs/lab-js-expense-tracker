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
    constructor(date, amount, description){
        super(date, amount, description);
    }
    type = "income";
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid){
        super(date, amount, description,);
        this.paid = paid;
    }
    type = "expense";
 
    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor(){ }
    entries = [];
    
    addEntry(entry){
        this.entries.push(entry);
    }

    getCurrentBalance(){
        return this.entries.reduce((sum, entry) => entry.type === "income" ? sum + entry.amount : sum - entry.amount 
        , 0)
    }

 

     getFormattedEntries(){
        return this.entries.map(entry => `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}` )
     }


}
