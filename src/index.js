// Entry
class Entry {

    constructor(date, amount, description){

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
        this.type = `income`;
        this.amount = amount;
    }
}

// Expense
class Expense extends Entry {

    constructor(date, amount, description, paid) {

        super(date, amount, description);
        this.type = `expense`;
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
        this.formattedEntries = [];
    }

    addEntry(entry) {

        this.entries.push(entry);
    }

    getTotalIncome() {

        let sum = 0;
        this.entries.forEach((entry) => {
            if (entry.type === `income`) {
                sum += entry.amount;
            }
        });
        return sum;
    }

    getTotalExpense() {

        let sum = 0;
        this.entries.forEach((entry) => {
            if (entry.type === `expense`) {
                sum += entry.amount;
            }
        })
        return sum;
    }

    getTotal(type) {

        let sum = 0;
        this.entries.forEach((entry) => {
            if (entry.type === type) {
                sum += entry.amount;
            }
        })
        return sum;
    }

    getCurrentBalance() {

        let sum = 0;
        sum = this.getTotalIncome() - this.getTotalExpense();
        return sum;
    }

    getFormattedEntries() {

        this.entries.forEach((entry) => {
            this.formattedEntries.push(`${entry.date} | ${entry.description} | ${(entry.type === 'income' ? '+' : '-') + entry.amount} €`);
        })
        return this.formattedEntries;
    }
}
