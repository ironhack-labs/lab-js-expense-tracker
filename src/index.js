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
        return `-${this.amount} €`; // ==> -99 €
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
        let balance = 0;

        for (const entry of this.entries) {
            if (entry.type === "income") {
                balance += entry.amount;
            } else if (entry.type === "expense") {
                balance -= entry.amount;
            }
        }
        return balance;
    }
    getFormattedEntries() {
        const result = []

        this.entries.forEach(function(element, i, arr){
            if(element.type === "income"){
                result.push(`${element.date} | ${element.description} | ${element.amount} €`)
            } else {
                result.push(`${element.date} | ${element.description} | -${element.amount} €`)
            }
        })

        return result
    }
}
