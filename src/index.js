// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return`${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor (date, amount, description){
        super(date, amount, description)
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description)
        this.type ="expense";
        this.paid = paid;
    } 

    getFormattedAmount(){
        return`-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    getTotalIncome() {
        // Filter entries for income, then sum up the amounts
        return this.entries
            .filter(entry => entry.type === "income")
            .reduce((total, entry) => total + entry.amount, 0); // Start sum from 0
    }

    getTotalExpense() {
        // Filter entries for expense, then sum up the amounts
        return this.entries
            .filter(entry => entry.type === "expense")
            .reduce((total, entry) => total + entry.amount, 0); // Start sum from 0
    }

    getCurrentBalance() {
        return this.getTotalIncome() - this.getTotalExpense();
    }

    addEntry(entry) {
        if (entry.type === "income" || entry.type === "expense") {
            this.entries.push(entry);
        }
    }

    getFormattedEntries() {
        return this.entries.map(entry => `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`);
    }
}

