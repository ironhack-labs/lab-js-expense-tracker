// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date
        this.amount = amount
        this.description = description
    }

    getFormattedAmount() {
        return `${this.amount} €`;
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description)
        this.type = 'income'
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description)
        this.date = date
        this.amount = amount
        this.description = description
        this.paid = paid
        this.type = 'expense'
    }

    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = []
    }

    addEntry(newEntry) {
        this.entries.push(newEntry)
    }

    getCurrentBalance() {
        if (!this.entries.length) {
            return 0
        }
        
        let totalIncome =  0
        let totalExpenses = 0

        for (const entry of this.entries) {
            if (entry.type === 'income') {
                totalIncome += entry.amount
            } else if (entry.type === 'expense') {
                totalExpenses += entry.amount
            }
        }

        return totalIncome - totalExpenses
    }

    getFormattedEntries() {
        let result = []
        
        for (const entry of this.entries) {
            if (entry.type === 'income') {
                result.push(`${entry.date} | ${entry.description} | ${entry.amount} €`)
            } else if (entry.type === 'expense') {
                result.push(`${entry.date} | ${entry.description} | -${entry.amount} €`)
            }
        }
        return result
    }
}
