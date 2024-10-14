// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {   // Aunque extienda la clase hace falta pasar los anteriores argumentos
        super(date, amount, description); 
        this.type = 'income';
    }
}

// Expense
class Expense {}

// Budget
class Budget {}
