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
    constructor(date, amount, description, paidValue) {
        super(date, amount, description)
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

    }
}

class AddEntry extends Budget {
    constructor() {

    }
}
