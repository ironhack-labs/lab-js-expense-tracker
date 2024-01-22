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

const type = new Income();

// Expense
class Expense extends Income {
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

    getTotalIncome() {
        let sum = 0;
        this.entries.forEach(function(element) {
            if (this.type === "income") {
                sum += element;
            }
        })
        return sum;
    }

    getTotalExpense() {
        if (this.entries.length === 0) {
            return 0;
        }
    }

    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        }
    }
}
