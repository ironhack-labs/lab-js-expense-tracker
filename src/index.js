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

    addEntry(newEntry) {
        this.entries.push(newEntry)
    }

    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0
        }

        let balance = 0
        this.entries.forEach((eachObject) => {

            if (eachObject.type === "income") {
                balance += eachObject.amount
            } else if (eachObject.type === "expense") {
                balance -= eachObject.amount
            }
        })
        return balance
    }
    getFormattedEntries() {
        let entriesArray = []

        this.entries.forEach((eachObject) => {
            if (eachObject.type === "income") {
                entriesArray.push(`${eachObject.date} | ${eachObject.description} | ${eachObject.amount} €`)

            } else if (eachObject.type === "expense") {
                entriesArray.push(`${eachObject.date} | ${eachObject.description} | -${eachObject.amount} €`)
            }
        })
        return entriesArray
    }
}
