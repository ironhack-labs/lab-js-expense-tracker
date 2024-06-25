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
            // (!this.entries.length === 0) means the budget is empty 
            return 0;
        }
        return this.entries.reduce((acc, entry) => {
            if (entry.type === "expense") {
                return acc - entry.amount;
            } else {
                return acc + entry.amount;
            }
        }, 0) // by passing this 0 as the initial value, the reduce function starts with 0 and checks if the current entry is an expense or a number (income)
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


