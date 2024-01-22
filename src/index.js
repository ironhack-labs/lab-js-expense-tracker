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
    constructor(date, amount, description) {
        super(date, amount, description)
        this.type = "income"
    }

}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description)
        this.type = "expense"
        this.paid = paid
    }
    getFormattedAmount() {
        return `${- this.amount} €`
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
        this.entries.forEach(entry => {
            if (entry.type === "income") {
                totalIncome += entry.amount
            }

        })
        return totalIncome
    }

    getTotalExpense() {

        let totalExpense = 0
        this.entries.forEach(entry => {
            if (entry.type === "expense") {
                totalExpense += entry.amount
            }

        })
        return totalExpense
    }

    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0
        }
        else {
            return this.getTotalIncome() - this.getTotalExpense()
        }

    }

}



