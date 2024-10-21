// Entry
class Entry {
    constructor(dateValue, amountValue, descriptionValue) {
        this.date = dateValue
        this.amount = amountValue
        this.description = descriptionValue
    }
    getFormattedAmount() {
        let amountString = `${this.amount} €`
        return amountString
    }
}

// Income
class Income extends Entry {
    constructor(dateValue, amountValue, descriptionValue) {
        super(dateValue, amountValue, descriptionValue)
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor(dateValue, amountValue, descriptionValue, paidValue) {
        super(dateValue, amountValue, descriptionValue)
        this.paid = paidValue
        this.type = "expense"
    }
    getFormattedAmount() {
        let amountString = `-${this.amount} €`
        return amountString
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

        } else {

            let totalIncome = 0
            let totalExpense = 0

            this.entries.forEach(eachEntry => {

                if (eachEntry.type === "income") {
                    totalIncome += eachEntry.amount
                } else if (eachEntry.type === "expense") {
                    totalExpense += eachEntry.amount
                }

            })

            return totalIncome - totalExpense
        }
    }
    getFormattedEntries() {

        let formattedEntries = []

        this.entries.forEach(eachEntry => {

            if (eachEntry.type === "income") {
                formattedEntries.push(`${eachEntry.date} | ${eachEntry.description} | ${eachEntry.amount} €`)
            } else if (eachEntry.type === "expense") {
                formattedEntries.push(`${eachEntry.date} | ${eachEntry.description} | -${eachEntry.amount} €`)
            }

        })

        return formattedEntries
    }
}
