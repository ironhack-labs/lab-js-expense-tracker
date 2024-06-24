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
        this.type = "income";
    }
}

// Expense
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
        return this.entries.reduce((acc, entry) => {
            if (entry.type === "expense") {
                return acc - entry.amount;
            } else {
                return acc + entry.amount;
            }
        }, 0)
    }

    getFormattedEntries() {
        const emptyArray = [];

        this.entries.forEach(element => {
            const formattedEntries = `${element.date} | ${element.description} | ${element.type === "income" ? "" : "-"}${element.amount} €`;

            emptyArray.push(formattedEntries);
        });

        { return emptyArray; }
    }
}


