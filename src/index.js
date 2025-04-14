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
    addEntry(newEntry) {
        this.entries.push(newEntry);
    }
    getCurrentBalance() {
        let balance = 0;
        this.entries.forEach(entry => {
            switch (entry.type) {
                case "income":
                    console.log(entry.amount);
                    balance += entry.amount;
                    break;
                case "expense":
                    console.log(entry.amount);
                    balance -= entry.amount
                    break;
            }
        });
        return balance;
    }
    getFormattedEntries() {
        let array = [];
        this.entries.forEach(entry => {
            let string = `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
            array.push(string);
        });
        return array;
    }
}
