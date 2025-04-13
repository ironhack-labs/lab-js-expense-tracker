// Entry
class Entry {
    constructor (date, amount, description) {
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
    constructor (date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super (date, amount, description);
        this. paid = paid;
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

    addEntry(newEntry) {
        this.entries.push(newEntry);
    }

    getCurrentBalance() {
        return this.entries.reduce((balance, entry) => {
            if (entry.type === "income") {
                return balance + entry.amount;
            } else if (entry.type === "expense") {
                return balance - entry.amount;
            }
        }, 0);
    }
}

getFormattedEntries () {
    const formattedEntries = [];

    this.entries.forEach(entry => {
        const formattedEntry = `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
        formattedEntries.push(formattedEntry);
    });

    return formattedEntries;
}
