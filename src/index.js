// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date,
            this.amount = amount,
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
    constructor(date, amount, description, paid) {
        super(date, amount, description),
            this.paid = paid,
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
    addEntry(newEntries) {
        this.entries.push(newEntries)
    }
    getCurrentBalance() {
        if (this.entries.length == 0) {
            return 0
        } else {
            let total = 0
            this.entries.forEach(element => {
                if (element.type == "income") {
                    total += element.amount
                } else {
                    total -= element.amount
                }
            });

            return total
        }
    }
    getFormattedEntries() {
        let solution = []
        this.entries.forEach(element => {

            if (element.type == "income") {
                solution.push(`${element.date} | ${element.description} | ${element.amount} €`)
            } else if (element.type = "expense") {
                solution.push(`${element.date} | ${element.description} | -${element.amount} €`)
            }

        });
        return solution
    }
}
