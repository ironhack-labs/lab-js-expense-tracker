// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date
        this.amount = amount
        this.description = description
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
        this.type = "expense";
        this.paid = paid;
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
        return this.entries.reduce((accumulator, entry) => {
            if (entry.type === "income") {
                return accumulator + entry.amount;
            } else if (entry.type === "expense") {
                return accumulator - entry.amount;
            }
        }, 0);
    }

    getFormattedEntries() {
        return this.entries.map(entry => {
            return `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
        });
    }
}