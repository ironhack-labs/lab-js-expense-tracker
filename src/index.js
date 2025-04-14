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
        super(date, amount, description, paid);
        this.type = "expense";
        this.paid = true;
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry(Entry) {
        this.entries.push(Entry);
    }
    getCurrentBalance() {
        if (this.entries === 0) {
            return 0;
        }
    }

}
