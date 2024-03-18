// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    };

    getFormattedAmount(){
        return `${this.amount} €`
    };
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description, "Income");
        this.type = "income"; 
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description, "Expense");
        this.paid = paid;
        this.type = "expense"
    }

    getFormattedAmount() {
        return `-${this.amount} €`
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
        let total = 0;

        for (let entry of this.entries) {
            if (entry.type === "income") {
                total += entry.amount;
            } else if (entry.type === "expense") {
                total -= entry.amount;
            }
        }

        return total
    }
}
