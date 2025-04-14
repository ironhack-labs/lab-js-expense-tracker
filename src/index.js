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
        this.paid = paidValue
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
    getCurrentBalance() {
        if (!this.entries.length) {
            return 0
        }
        let totalIncome = 0
        let totalExpense = 0
        this.entries.forEach(elm => {
            if (elm.type === "income") {
                totalIncome += elm.amount
            }
            if (elm.type === "expense") {
                totalExpense += elm.amount
            }
        })
        return totalIncome - totalExpense
    }
    getFormattedEntries() {

    }

}
