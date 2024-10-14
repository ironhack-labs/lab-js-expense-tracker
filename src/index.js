// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return `${this.amount} €`;
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
class Expense extends Entry {
    constructor(date, amount, description, paid) {   
        super(date, amount, description); 
        this.type = 'expense';
        this.paid = paid;
    }

    getFormattedAmount() {
        return `-${super.getFormattedAmount()}`;   // Se podría hacer tb como `-${this.amount} €` 
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry(newEntry) {
        this.entries.push(newEntry);
    }

    getCurrentBalance() {
        let balance = 0;
        this.entries.forEach((entry) => {
            if (entry.type === 'income') {
                balance += entry.amount;
            } else {
                balance -= entry.amount;
            }
        })
        return balance;
    }
}
