// Entry
class Entry {}
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
class Income {}
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description)
            this.type = "income"
    }
}

// Expense
class Expense {}
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description, paid)
            this.paid = paid
            this.type = "expense"
    }

    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {}
class Budget {
    constructor() {
        this.entries = []
    }

    addEntry(entry) {
        this.entries.push(entry)
    }

    getTotal(type) {
        let totalAmount = 0
        this.entries.forEach(entry => {
            if (entry.type === type) {
                totalAmount += entry.amount
            }
        })
        return totalAmount
    }

    getTotalIncome() {
        return this.getTotal('income')
    }



  
