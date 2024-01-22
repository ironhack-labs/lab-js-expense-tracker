// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date
        this.amount = amount
        this.description = description
    }
    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description)
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description)
        this.paid = paid
        this.type = "expense"
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
    addEntry(entry) {
        this.entries.push(entry)

    }
    getTotalIncome() {
        let totalIncome = 0
        this.entries.forEach((eachEntry) => {

            if (eachEntry.type === "income") {
                totalIncome += this.eachEntry.amount
            }
        })
        return totalIncome
    }
    getTotalExpense() {
        let totalExpense = 0
        this.entries.forEach((eachEntry) => {
            if (eachEntry.type === "expense") {
                totalExpense += eachEntry.amount
            }
        })
        return totalExpense
    }
    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0
        } else {
            let difference = this.totalIncome - this.totalExpense
            return difference
        }


    }
}
