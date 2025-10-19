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
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry (entry) {
        return this.entries.push(entry);
    }

    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        }

        let totalIncome = 0;
        let totalExpense = 0;

        for (let i = 0; i < this.entries.length; i++) {
            const transaction = this.entries[i];
            if (transaction.type === "income") {
                totalIncome += transaction.amount;
            } else if ( transaction.type === "expense") {
                totalExpense += transaction.amount;
            }
        }
        return totalIncome - totalExpense;
    }

    getFormattedEntries () {
        
        let newArray = [];
        this.entries.forEach(entry => {
            if (entry.type === "income") {
                newArray.push(`${entry.date} | ${entry.description} | ${entry.amount} €`)
            } else if (entry.type === "expense") {
                newArray.push(`${entry.date} | ${entry.description} | -${entry.amount} €`)
            }
        })
        return newArray;
    }
}
