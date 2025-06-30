// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return `${this.amount.toFixed(0)} €`;
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
        super(date, amount, description );
        this.paid = paid; // Default value for expense
        this.type = "expense";
    }

    getFormattedAmount() {
        return `-${super.getFormattedAmount()}`;
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry(entry) {
        if (entry instanceof Entry) {
            this.entries.push(entry);
        } else {
            throw new Error("Invalid entry type");
        }

    }

    getCurrentBalance() {
        return this.entries.reduce((total, entry) => {
            if (entry instanceof Income) {
                return total + entry.amount;
            } else if (entry instanceof Expense) {
                return total - entry.amount;
            }
            return total;
        }, 0);
    }

    getFormattedEntries() {
        return this.entries.map(entry => {
            if (entry instanceof Income) {
                return `${entry.date} | ${entry.description} | ${entry.amount.toFixed(0)} €`;
            } else if (entry instanceof Expense) {
                return `${entry.date} | ${entry.description} | -${entry.amount.toFixed(0)} €`;
            }
            return '';
        });
    }
}
