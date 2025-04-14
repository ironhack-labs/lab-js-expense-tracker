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
        if (this.entries.length === 0) {
            return 0;
        }

        let totalIncome = 0;
        let totalExpense = 0;
        this.entries.forEach(entry => {
            if (entry.type === "income") {
                totalIncome += entry.amount;
            }
            else {
                totalExpense += entry.amount;
            }
        });
        return totalIncome - totalExpense;
    }

    getFormattedEntries() {
        if (this.entries.length === 0) {
            return 0;
        }

        const formattedEntries = [];

        this.entries.forEach(entry => {
            if (entry.type === "income") {
                formattedEntries.push(`${entry.date} | ${entry.description} | ${entry.amount} €`);
            }
            else {
                formattedEntries.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
            }
        });
        return formattedEntries;
    }
}
