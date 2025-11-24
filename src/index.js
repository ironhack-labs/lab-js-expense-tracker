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
        super(date, amount, description);
        this.type = type;
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid, type = "expense") {
        super(date, amount, description);
        this.paid = paid;
        this.type = type;
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
        return this.entries.reduce((balance, entry) => {
            return entry.type === "income"
                ? balance + entry.amount
                : balance - entry.amount;
        }, 0);
        // let balance = 0;
        // for (const entry of this.entries) {
        //     if (entry.type === "income") {
        //         balance += entry.amount;
        //     } else if (entry.type === "expense") {
        //         balance -= entry.amount;
        //     }
        // }
        // return balance;
    }

    getFormattedEntries() {
        // return this.entries.map(entry => `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`);
        const formattedEntries = [];
        this.entries.forEach(entry =>
            formattedEntries.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`));
        return formattedEntries;
    }
}