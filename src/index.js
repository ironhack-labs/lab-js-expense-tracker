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



    getTotalExpense() {
        return this.getTotal('expense')
    }


    getCurrentBalance() {
        let totalIncome = this.getTotalIncome()
        let totalExpenses = this.getTotalExpense()
        return totalIncome - totalExpenses
    }

    getFormattedEntries() {
        let formatedArr = []
        let formatedText;
        this.entries.forEach(entry => {
            if(entry.type === "income") {
                formatedText = `"${entry.date} | ${entry.description} | +${entry.amount}€"`
                formatedArr.push(formatedText)
            } else if (entry.type === "expense") {
                formatedText = `"${entry.date} | ${entry.description} | -${entry.amount}€"`
                formatedArr.push(formatedText)
            }
        })
        return formatedArr
    }


}

let budget1 = new Budget()

budget1.entries.push(new Income(new Date().toLocaleTimeString(), 22, 'interest'))
budget1.entries.push(new Expense(new Date().toLocaleTimeString(), 33, 'lunch', false))
budget1.entries.push(new Income(new Date().toLocaleTimeString(), 44, 'paycheck'))

// console.log(budget1.entries)
console.log(budget1.getFormattedEntries())
