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
    constructor(dateValue, amountValue, descriptionValue, paidValue) {
        super(dateValue, amountValue, descriptionValue)
        this.type = "expense"
        this.paid = paidValue
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
        if (this.entries.length === 0) return 0
        else {
            let totalBalance = 0
            this.entries.forEach((entry) => {
                if (entry.type === "income") totalBalance += entry.amount
                else totalBalance -= entry.amount
            })
            return totalBalance
        }
    }

    getFormattedEntries() {
        const formattedArray = []
        this.entries.forEach((entry) => {
            let formattedString
            if (entry.type === "income") { formattedString = `${entry.date} | ${entry.description} | ${entry.amount} €` }
            else { formattedString = `${entry.date} | ${entry.description} | -${entry.amount} €` }
            formattedArray.push(formattedString)
        })
        return formattedArray
    }
}
