// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "Income"
    } 
}
// Expense
class Expense extends Income {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.paid = paid
        this.type = "Expense"
    }  
}

// Budget
class Budget {}



