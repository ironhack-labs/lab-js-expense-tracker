// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount (){
        return `${this.amount} €`;
    }
}

// Income
class Income extends Entry {
    constructor (date, amount, description){
        super(date, amount, description);
        this.type= "income";
    }

}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid){
        super(date, amount, description);
        this.type= "expense";
        this.paid=paid;    
    }
    getFormattedAmount (){
        return `-${this.amount} €`;
}
}

// Budget
class Budget {
    constructor (){
        this.entries=[];
    }

    addEntry(newEntry){
this.entries.push(newEntry);
    };

    getCurrentBalance() {
        let total = 0;
        

        this.entries.forEach((oneEntry)=> {
            if (oneEntry.type === "income"){
                total += oneEntry.amount;
            } else if (oneEntry.type === "expense") {
                total -= oneEntry.amount;
            }
        });

        return total;
    }
}
