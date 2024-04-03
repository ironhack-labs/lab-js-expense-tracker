
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
  
// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description, paid);
        this.paid = paid;
        this.type = "expense";
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

    addEntry(obj) {
        this.entries.push(obj);
    }

    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0
        } else {
            let total = 0

            this.entries.forEach((e) => {
                if (e.type === "income") {
                    total += e.amount
                } else if (e.type === "expense") {
                    total -= e.amount
                }
            })
            return total
        }
    }
    getFormattedEntries() {
        // For expenses: "DATE | DESCRIPTION | -AMOUNT €"
        // For incomes: "DATE | DESCRIPTION | +AMOUNT €"

        let totalIncome = 0
        let totalExpenses = 0
        let arr = []

        this.entries.forEach((e) => {
            if (e.type === "income") {
                totalIncome += e.amount
                let phrase = `${e.date} | ${e.description} | ${totalIncome} €`
                arr.push(phrase)
            } if (e.type === "expense") {
                totalExpenses -= e.amount
                let phrase = `${e.date} | ${e.description} | ${totalExpenses} €`
                arr.push(phrase)
            }

            return arr
        })
    }
}
