// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    };

    getFormattedAmount() {
        return `${this.amount} €`;
    };
};

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    };
};

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense";
    };

    getFormattedAmount() {
        return `-${this.amount} €`;
    };
};

// Budget
class Budget {
    constructor() {
        this.entries = [];
    };

    addEntry(entryObject) {
        this.entries.push(entryObject);
    };

    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        };
        let sum = 0;
        this.entries.forEach(element => {
            if (element.type === "expense") {
                sum -= element.amount;
            } else {
                sum += element.amount;
            };
        });
        return sum
    };

    getFormattedEntries() {
        const arrayFormatted = [];
        this.entries.forEach(element => {
            arrayFormatted.push(`${element.date} | ${element.description} | ${element.getFormattedAmount()}`)
        });
        return arrayFormatted;
    };
};
