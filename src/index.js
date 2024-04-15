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

    addEntry(entries) {
        this.entries.push(entries)

    };

    getCurrentBalance() {

        if (this.entries.length === 0) {
            return 0
        }

        let totalIncome = 0
        let totalExpense = 0
        let balance = 0

        this.entries.forEach((eachEntry) => {
            if (eachEntry.type === "income") {
                totalIncome += (eachEntry.amount)
            }
            else if (eachEntry.type === "expense") {
                totalExpense += (eachEntry.amount)
            }

        })

        balance = totalIncome - totalExpense
        return balance

    }

    getFormattedEntries() {

        let budgetEntries = []

        this.entries.forEach((eachEntry) => {
            if (eachEntry.type === "income") {
                budgetEntries.push(`${eachEntry.date} | ${eachEntry.description} | ${eachEntry.amount} €`)
            }
            else if (eachEntry.type === "expense") {
                budgetEntries.push(`${eachEntry.date} | ${eachEntry.description} | -${eachEntry.amount} €`)
            }
        })
        return budgetEntries
    }



}



