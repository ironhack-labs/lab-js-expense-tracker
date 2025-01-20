// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
        return this.amount + ' €';
    }
}
const entry1 = new Entry()

// Income
class Income extends Entry {
    constructor(date, amount, description,) {
        super(date, amount, description);
        this.type = 'income';
    }
}
// Expense
class Expense extends Income {
    constructor(date, amount, description, paid) {
        super(date, amount, description, paid);
        this.type = 'expense';
        this.paid = paid;
    }
    getFormattedAmount() {
        return -this.amount + ' €';
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }
    addEntry(Income) {
        this.entries.push(Income);
    }
    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        }
        let totalIncome = 0;
        let totalExpenses = 0;
        this.entries.forEach(function (entry) {
            if (entry.type === "income") {
                totalIncome += entry.amount;
            } else if (entry.type === "expense") {
                totalExpenses += entry.amount;
            }
        });
        return totalIncome - totalExpenses;
    }
    getFormattedEntries() {
    }
}

