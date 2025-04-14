// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
        return `${this.amount} €`;  // stuck ?
    }
}
// Income
class Income extends Entry {
    constructor(date, amount, description,) {
        super(date, amount, description);
        this.type = "income";       // stuck initial value income?
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

    getTotalIncome() {
        let sum = 0;
        this.entries.forEach(function (total) {
            if (total.type === 'income') {
                sum += total.amount;
            }
        })
        return sum;
    }

    getTotalExpense() {
        let sum = 0;
        this.entries.forEach(function (total) {
            if (total.type === 'expense') {
                sum += total.amount;
            }
        })
        return sum;
    }

    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        }
        else {
            return this.getTotalIncome() - this.getTotalExpense();
        }
    }
}