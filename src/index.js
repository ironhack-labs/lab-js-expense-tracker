// Entry
class Entry {
    constructor(dateValue, amountValue, descriptionValue) {
        this.date = dateValue
        this.amount = amountValue
        this.description = descriptionValue
    }
    getFormattedAmount() {
        return `${this.amount} €`;
    }
}
//const getFormattedAmount = newFormatter(100);
//console.log(formatter.getFormattedAmount());
// .toFixed(2)
// Income
class Income extends Entry {
    constructor(dateValue, amountValue, descriptionValue) {
        super(dateValue, amountValue, descriptionValue)
        this.date = dateValue
        this.amount = amountValue
        this.description = descriptionValue
        this.type = 'income'
    }
}

// Expense
class Expense extends Entry {
    constructor(dateValue, amountValue, descriptionValue, paidValue) {
        super(dateValue, amountValue, descriptionValue)
        this.date = dateValue
        this.amount = amountValue
        this.description = descriptionValue
        this.paid = paidValue
        this.type = 'expense'

    }
    getFormattedAmount() {
        return `-${this.amount} €`;
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
        if (this.entries.length === 0) {
            return 0;
        }

        let totalInCome = 0
        let totalExpense = 0

        this.entries.forEach(newEntry => {
            if (newEntry.type === 'income') {
                totalInCome += newEntry.amount
            } else if (newEntry.type === 'expense') {
                totalExpense += newEntry.amount
            }
        })

        return totalInCome - totalExpense
    }
}