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
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense";
    }
    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }
    addEntry(entry) {
        this.entries.push(entry);
    }
    getCurrentBalance() {
        let balance = 0;
        if (this.entries.length === 0) {
            return balance;
        }
        for (let entry of this.entries) {
            if (entry.type === 'income') {
                balance += entry.amount;  
            } else if (entry.type === 'expense') {
                balance -= entry.amount;  
            }
        }
    
        return balance;
    }
}