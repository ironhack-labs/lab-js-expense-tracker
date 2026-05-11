// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return `${this.amount} €`;
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
        super(date, amount, description);
        this.type = "expense";
        this.paid = paid;
    }

    getFormattedAmount() {
        return `-${this.amount} €`
    }
}


// Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry(newEntry) {
        this.entries.push(newEntry);
    }

    getCurrentBalance() {
        if (!this.entries.length) {
            return 0;
        }
        let balance = 0;
        this.entries.forEach(function (entry) {
            if (entry.type === "expense") {
                balance -= entry.amount
            } else {
                balance += entry.amount
            }
        })
        return balance;
    }

    getFormattedEntries() {
        const formattedEntries = [];
        this.entries.forEach(function (entry) {
            if (entry.type === "expense") {
                formattedEntries.push(`${entry.date} | ${entry.description} | -${entry.amount} €`)
            } else {
                formattedEntries.push(`${entry.date} | ${entry.description} | ${entry.amount} €`)
            }
        });
        return formattedEntries;
    }
}


// const newBudget = new Budget()
// const newIncome1 = new Income("2026-05-11", 100, "refund")
// const newIncome2 = new Income("2026-05-11", 50, "paid")
// const newIncome3 = new Income("2026-05-11", 500, "salary")
// const newExpense1 = new Expense("2026-05-11", 45, "shopping")
// const newExpense2 = new Expense("2026-05-11", 20, "fuel")


// newBudget.addEntry(newIncome1)
// newBudget.addEntry(newIncome2)
// newBudget.addEntry(newExpense1)
// newBudget.addEntry(newIncome3)
// newBudget.addEntry(newExpense2)

// console.log(newBudget.getFormattedEntries())

// console.log(newBudget.getCurrentBalance())