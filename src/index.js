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
    constructor(date, amount, description, category) {
        super(date, amount, description)
        this.paid = category
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

    addEntry(incomeOrExpense) {
        this.entries.push(incomeOrExpense)

    }


    getCurrentBalance() {
        let balance = 0

        this.entries.forEach(function (eachEntry) {
            if (eachEntry.type === "income") {
                balance += eachEntry.amount
            } else if (eachEntry.type === "expense") {
                balance -= eachEntry.amount
            }
        })
        return balance
    }

}
