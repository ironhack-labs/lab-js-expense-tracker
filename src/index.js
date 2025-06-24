// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
        return this.amount + " €"
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
        return "-"+ this.amount + " €"
    }
}


// Budget
class Budget {
    constructor() {
        this.entries = [];
    }
    addEntry(newEntry) {
        // without a return statement, it logs undefined, thus invoke directly
        this.entries.push(newEntry);
    }
    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        };

        let currentBalance = 0;

        this.entries.forEach(function(entry) {
            if (entry.type === "income") {
                currentBalance += entry.amount;
            }
            else if (entry.type === "expense") {
                currentBalance -= entry.amount;
            }
        });
        return currentBalance;
    }
    getFormattedEntries() {
        let formattedEntries = [];

        this.entries.forEach(entry => {
            formattedEntries.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`);
        });
        return formattedEntries;
    }
}
