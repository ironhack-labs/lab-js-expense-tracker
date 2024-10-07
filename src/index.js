// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description =  description;
    };
    getFormattedAmount() {
        return `${this.amount} €`;
    }
}

// Income

class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.date = date;
        this.amount = amount;
        this.description =  description;
        this.type = "income";
    };
    getFormattedAmount() {
        return `${this.amount} €`;
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.date = date;
        this.amount = amount;
        this.description =  description;
        this.type = "expense";
        this.paid = paid;
    };
    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {}
