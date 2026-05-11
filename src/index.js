// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description)
        this.type = 'income';
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description)
        this.paid = paid;
        this.type = 'expense'
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
    addEntry(obj) {
        this.entries.push(obj)
    }
    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        }
        let sum = 0;
        this.entries.forEach(function (element) {
            if (element.type === 'income') {
                sum += element.amount;
            } else if (element.type === 'expense') {
                sum -= element.amount;
            }
        })
        return sum;
    }

    getFormattedEntries() {
        const format = [];
        if (this.entries.length === 0) {
            return 0
        }
        this.entries.forEach(function (element) {
            if (element.type === 'income') {
                format.push(`${element.date} | ${element.description} | ${element.amount} €`)
            } else if (element.type === 'expense') {
                format.push(`${element.date} | ${element.description} | -${element.amount} €`)
            }
        })
        return format
    }
}

//€

const income1 = new Income(new Date(), 30, 'money coming in')
const expense1 = new Expense(new Date(), 33, 'money going out')
const income2 = new Income(new Date(), 50, 'more money in')
const budget1 = new Budget()

budget1.addEntry(income1);
budget1.addEntry(expense1);
budget1.addEntry(income2)

console.log(budget1.getCurrentBalance())
console.log(budget1.getFormattedEntries())
console.log(new Date())