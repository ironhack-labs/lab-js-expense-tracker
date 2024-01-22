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
        super(date, amount, description, paid);
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
        this.entries.forEach((element) => {
            if (element.type === 'income') {
                sum += element.amount;
            }
        });
        return sum;
    }

    getTotalExpense() {
        let sum = 0;
        this.entries.forEach((element) => {
            if (element.type === 'expense') {
                sum += element.amount;
            }
        });
        return sum;
    }

    getCurrentBalance() {
        return this.getTotalIncome() - this.getTotalExpense();
    }

    getTotal(type) {
        let sum = 0;
        this.entries.forEach((element) => {
            if (element.type === type) {
                sum += element.amount;
            }
        });
        return sum;
    }

    getFormattedEntries() {
        let formattedEntries = [];

        this.entries.forEach(function (element) {
            if (this.type === 'income') {
                formattedEntries.push(`${element.date} | ${element.description} | +${element.amount} €`);
            }
            else if (this.type === 'expense') {
                formattedEntries.push(`${element.date} | ${element.description} | -${element.amount} €`);
            }
        })
        return formattedEntries;
    }
}