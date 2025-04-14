// Entry
class Entry {
    constructor(date, amount,description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    //methods:
    getFormattedAmount() {
        return `${this.amount} €`;
    }
}

// Income
class Income extends Entry {
    constructor(date, amount,description) {
        super(date, amount,description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super(date, amount, description)
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
    getTotalIncome() {
        let sum = 0;
        this.entries.forEach((entry) => { 
            if (entry.type === "income") {
                sum += entry.amount; 
            }
        });
        return sum;
    }
    getTotalExpense() {
        let sum = 0;
        this.entries.forEach((entry) => {
            if (entry.type === "expense") {
                sum += entry.amount;
            }
        });
        return sum;
    }

    getCurrentBalance() {
        if (this.entries.length === 0) {
                return 0;
        }
        return this.getTotalIncome() - this.getTotalExpense();
    }
}
