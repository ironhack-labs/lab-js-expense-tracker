// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return this.amount + " €";
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
class Expense extends Entry{
    constructor(date, amount, description, paid) {
        super(date, amount, description)
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

    addEntry(expense) {
        this.entries.push(expense);
    }

    getCurrentBalance() {
        return this.entries.reduce((total, entry) => {
            if(entry.type === "income") {
                return total + entry.amount;
            }
            return total - entry.amount;}, 0);
    }
}
