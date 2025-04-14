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
    constructor(date, amount, description, paid) {
        super(date, amount, description)
        this.type = "expense"
        this.paid = paid
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

    addEntry(Entry) {
        this.entries.push(Entry)


    }
    getCurrentBalance() {
        let balance = 0;
        this.entries.forEach(element => {

            if (element.type == "income") {
                balance += element.amount

            } else if (element.type == "expense") {
                balance -= element.amount
            }

        });
        return balance
    }

    getFormattedEntries() {
        let string = ""
        this.entries.forEach(element => {

            if (element.type == "income") {
                string = `"${element.date} | ${element.description} | +${element.amount} €"`
                console.log(string)
                return string

            } else if (element.type == "expense") {
                string = `"${element.date} | ${element.description} | -${element.amount} €"`
                console.log.apply(string)
                return string
            }

        });

    }

}

