// Entry
class Entry {
    constructor(dateValue, amountValue, descriptionValue) {
        this.date = dateValue
        this.amount = amountValue
        this.description = descriptionValue
    }
    getFormattedAmount() {
        return `${this.amount} €`
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
    constructor(dateValue, amountValue, descriptionValue, paid) {
        super(dateValue, amountValue, descriptionValue, paid)
        this.type = "expense"
        this.paid = paid
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

    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0
        }

        let finalBalance = 0
        this.entries.forEach((eachEntry) => {
            if (eachEntry.type === "income") {
                finalBalance += eachEntry.amount
            } else if (eachEntry.type === "expense") {
                finalBalance -= eachEntry.amount
            }
        })
        return finalBalance
    }



    getFormattedEntries() {

    }
}



