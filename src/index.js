// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount(){
        return `AMOUNT: €${this.amount}`;
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description, type){
        super(date, amount, description);
        this.date = date;
        this.amount = amount;
        this.description = description;
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description);
        this.date = date;
        this.amount = amount;
        this.description = description;
        this.paid = paid;
        this.type = "expense";
    }

    getFormattedAmount(){
        return `AMOUNT - €${this.amount}`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }
    
    addEntry(newEntry){
        this.entries = newEntry;
    }

    getCurrentBalance(){
        if(getCurrentBalance[i] === 0){
            return 0;
        } else return ${getFormattedAmount} - ${this.getFormattedAmount}
    }
}
