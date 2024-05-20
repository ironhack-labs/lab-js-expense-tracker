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
    #getTotal(type) {
        let total = 0;
        this.entries.forEach((entry) => (entry.type === type ? (total += entry.amount) : null));
        return total;
    }
    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        }
        return this.#getTotal("income") - this.#getTotal("expense");
    }
    getFormattedEntries() {
        const entriesString = [];
        this.entries.forEach((entry) => {
            if (entry.type === "income") {
                entriesString.push(`${entry.date} | ${entry.description} | ${entry.amount} €`);
            } else if (entry.type === "expense" && entry.paid) {
                entriesString.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
            }
        });
        console.log(entriesString);
        return entriesString;
    }
}
