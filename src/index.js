// Entry
class Entry {

    constructor(dateValue, amountValue, descriptionValue) {
        this.date = dateValue;
        this.amount = amountValue;
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
        this.totalExpense = 0;
        this.totalIncome = 0;
    }

    addEntry(entry) {
        this.entries.push(entry)
    }

    getTotalIncome() {

        this.totalIncome = 0;

        this.entries.forEach(entry => {

            if (entry.type === "income") {
                this.totalIncome += entry.amount
            }
        })

        return this.totalIncome
    }

    getTotalExpense() {
        this.totalExpense = 0;

        this.entries.forEach(entry => {
            if (entry.type === "expense") {
                this.totalExpense += entry.amount
            }
        })

        return this.totalExpense
    }

    getCurrentBalance() {

        this.totalIncome = this.getTotalIncome()
        this.totalExpense = this.getTotalExpense()

        return this.totalIncome - this.totalExpense

    }
}
