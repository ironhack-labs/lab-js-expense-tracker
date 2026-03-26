// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
    
        return 'Entry: ${this.amount} "€" ';
    }

    

}

// Income
class Income extends Entry { 
    constructor(date, amount, description){
    super(date, amount, description);
    
    this.type = Income;

}

}


// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description);

        this.type = Expense;
        this.paid = paid;
    }

    getFormattedAmount() {
        return 'Expense: - ${this.amount} €'

    }
    
}

// Budget
class Budget {
    constructor(entries){
    this.entries = [];
}
addEntry() {
    
    return `Entry: ${entries}`
}
    
}
