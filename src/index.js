// Entry
class Entry {
    constructor (date, amount, description) {
        this.date = date,
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return `${this.amount} €`;
    }
}

// Income
class Income extends Entry {
    constructor (date, amount, description) {
        super (date, amount, description),
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super (date, amount, description);
        this.type = "expense";
        this.paid = paid;
    }

    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor () {
        this.entries = [];
    }

    addEntry(entry) {
        this.entries.push(entry);
    }

    getCurrentBalance () {
        if ( this.entries.length === 0) {
            return 0;
        }

        return this.entries.reduce((total, entry) => {
            if (entry.type === "expense") {
                return total - entry.amount;
            } else {
                return total + entry.amount;
            }
        }, 0);
    }

    getFormattedEntries() {
        const newFormatted = []; 
    
        this.entries.forEach(entry => { 
            if (entry.type === "income") {
                newFormatted.push(`${entry.date} | ${entry.description} | +${entry.amount} €`);
            } else {
                newFormatted.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
            }
        });
    
        return newFormatted; 
    }
}
