// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
    return `${this.amount} €`
}

}

const entry = new Entry("1990-03-07", 100, "salary")

console.log(entry.date)
console.log(entry.description)
console.log(entry.amount)
console.log(entry.getFormattedAmount())

// Income
class Income extends Entry {
        constructor(date, amount, description){ 
        super(date, amount, description)
        this.type = "income"
    }
}

const salary1 = new Income("1991-05-08", 1000, "Salary")

console.log(salary1)

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid) {
        super(date, amount, description)
        this.paid = paid
        this.type = "expense"
    }

    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

const salary2 = new Income("1992-05-09", 2000, "Salary")
console.log(salary2.getFormattedAmount())
// Budget
class Budget {
    constructor(){
        this.entries = []
    }

    addEntry(entry) {
        this.entries.push(entry)
    }

    getCurrentBalance() {
        let balance = 0;

        this.entries.forEach((entry) => {
            if (entry.type === "income") {
                balance += entry.amount
            } else if (entry.type === "expense") {
                balance -= entry.amount
            }
        })

        return balance
    }

    getFormattedEntries() {
        const money = []

        this.entries.forEach((entry) => {
            money.push(
                `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
            )
        })
        return money;
    }
}

const budget = new Budget()
console.log( budget.getCurrentBalance())

budget.addEntry(new Income("1994-02-29", 2000, "Salary"))
budget.addEntry(new Expense("1994-03-03", 1000, "rent", true))
console.log(budget.getFormattedEntries())