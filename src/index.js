// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
        const AmountFormatted = `${this.amount} €`
        return AmountFormatted
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
        const AmountFormatted = `-${this.amount} €`
        return AmountFormatted
    }

}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry(entryObject) {
        this.entries.push(entryObject)
    }

    getCurrentBalance() {

        let totalAmountIncome = 0
        let totalAmountExpense = 0

        this.entries.forEach((eachEntries) => {
            if (eachEntries.type === "income") {
                totalAmountIncome += eachEntries.amount
            } else if (eachEntries.type === "expense") {
                totalAmountExpense += eachEntries.amount
            }
        })
        return totalAmountIncome - totalAmountExpense
    }
}
