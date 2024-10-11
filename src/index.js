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
    constructor () {
        this.entries = [];
    }
    addEntry (newEntry) {
        this.entries.push(newEntry);
    }
    getCurrentBalance () {
        if (this.entries.length === 0) {
            return 0;
        }
        return this.entries.reduce((result, entry) => {        
            if (entry.type === "income" ) {
                result += entry.amount;
            } else {
                result -= entry.amount;
            }
            return result;
        },0);
    }
    getFormattedEntries () {
        const formattedStrings = [];
        this.entries.forEach(entry => {
            if (entry.type === "income") {
                formattedStrings.push(`${entry.date} | ${entry.description} | ${entry.amount} €`);
            } else {
                formattedStrings.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
            }
        });
        return formattedStrings;
    }
}