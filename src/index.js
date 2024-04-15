// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date,
        this.amount = amount,
        this.description = description
    }
    getFormattedAmount(){
        return `${this.amount} €`;
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description);
        this.date = date,
        this.amount = amount,
        this.description,
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, true);
        this.date = date,
        this.amount = amount,
        this.description = description,
        this.paid = paid,
        this.type = "expense"
    }
    getFormattedAmount(){
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = []
    }
    addEntry(Expense){
        this.entry = this.entries.push(Expense);
    }
    getCurrentBalance(){
        if(!this.entry){
            return 0;
        }else{
            return this.entries.Income - this.entries.Expense;
        }

    }
}
