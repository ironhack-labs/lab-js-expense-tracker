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
    constructor(date, amount, description, type = "income") {
        super(date, amount, description)
        this.type = type;
    }
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid, type = "expense") {
        super(date, amount, description)
        this.paid = paid;
        this.type = type;
    }

    getFormattedAmount() {
        return `-${this.amount} €`
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
        for (const entry of this.entries) {
            if(entry.type === "income") {
                balance += entry.amount;
            } else if(entry.type === "expense") {
                balance -= entry.amount;
            }
        }
        return balance;
    }

    getFormattedEntries() {
        const result = this.entries.map(entry => {
            return `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
        })
        return result
    }
}
