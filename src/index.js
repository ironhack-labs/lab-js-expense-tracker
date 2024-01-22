// Entry
class Entry {
    constructor(dateValue, amountValue, descriptionValue) {
        this.date = dateValue
        this.amount = amountValue
        this.description = descriptionValue
    }
    getFormattedAmount() {
        return this.amount + " €"
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
    constructor(date, amount, description, paidValue) {
        super(date, amount, description)
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
    addEntry(newEntry) {
        this.entries.push(newEntry)

    }

    getTotalIncome() {
        let totalIncome = 0
        this.entries.forEach(entry => {
            if (entry instanceof Income)
                totalIncome += entry.amount
        })
        return totalIncome

    }

    getTotalExpense() {
        let TotalExpense = 0
        this.entries.forEach(entry => {
            if (entry instanceof Expense)
                TotalExpense += entry.amount
        })
        return TotalExpense

    }

    getCurrentBalance() {
        const totalIncome = this.getTotalIncome()
        const TotalExpense = this.getTotalExpense()
        return totalIncome - TotalExpense

    }
}
