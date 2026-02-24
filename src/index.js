// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;

    }

    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description)
        this.type = "expense"
        this.paid = paid
    }

    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor() {

        this.entries = []
    }

    addEntry(entry) {
        return this.entries.push(entry)
    }

    getCurrentBalance() {
        let incomeTotal = 0;
        let expenseTotal = 0;

        this.entries.forEach(entry => {
            if (entry instanceof Income) {
                incomeTotal += entry.amount;
            }

            if (entry instanceof Expense) {
                expenseTotal += entry.amount;
            }
        });

        return incomeTotal - expenseTotal;
    }

    getFormattedEntries() {
    const formatted = [];

    this.entries.forEach(entry => {
        formatted.push(
            `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
        );
    });

    return formatted;
}
}
