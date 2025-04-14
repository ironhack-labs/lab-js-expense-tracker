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
                totalIncome += eachEntry.amount
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
        let balance = 0
        if (this.entries.length === 0) {
            return 0
        } else {
            this.totalIncome - this.totalExpense

        }
    }
    getTotal(type) {
        let totalType = 0
        this.entries.forEach((eachEntry) => {
            if (eachEntry.type === type) {
                totalType++
            }
        })
        return totalType
    }
    getFormattedEntries() {
        let entriesFormatted = []
        this.entries.forEach((eachEntry) => {
            if (eachEntry.type === "income") {
                entriesFormatted.push([(eachEntry.date).toUpperCase(), (eachEntry.description).toUpperCase(), `+${eachEntry.amount} €`])
            } else if (eachEntry.type === "expense") {
                entriesFormatted.push([(eachEntry.date).toUpperCase(), (eachEntry.description).toUpperCase(), `-${eachEntry.amount} €`])
            }
            return entriesFormatted
        })

    }
}
