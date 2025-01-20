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
        this.paid = paid;
        this.type = "expense";
    }

    getFormattedAmount() {
        return `-${this.amount} €`;
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

        if (!this.entries) {
            return 0;
        }
        let amountIncome = 0
        let amountExpense = 0
        this.entries.forEach(element => {
            if (element.type === "income") {
                amountIncome += element.amount
            } else {
                amountExpense += Math.abs(element.amount)
            }
        });

        return amountIncome - amountExpense
    }

    getFormattedEntries() {
        let arrayResul = []
        this.entries.forEach(element => {
            if (element.type === "income") {
                arrayResul.push(`${element.date} | ${element.description} | ${element.getFormattedAmount()}`)
            } else {
               arrayResul.push(`${element.date} | ${element.description} | ${element.getFormattedAmount()}`)
            }
        });
        
        return arrayResul
    }
}
