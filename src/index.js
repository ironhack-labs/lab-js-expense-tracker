// Entry
class Entry {
    constructor (date, amount, description) {
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
    constructor (date, amount, description) {
        super (date, amount, description);
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super (date, amount, description);
        this.paid = paid,
        this.type = "expense"
    }
    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor () {
        this.entries = []
    }

    addEntry (entry) {
        this.entries.push(entry);
    }
    getCurrentBalance(){
        if (this.entries.length === 0) {
            return 0;
        }
        let total = 0;
        this.entries.forEach ((entry) => {
            if (entry instanceof Income) {
                total += entry.amount;
            } else if (entry instanceof Expense) {
                total -= entry.amount;
            }
        });
        return total;
    }
    getFormattedEntries() {
        let arrStrings = [];
        this.entries.forEach((entry) => {
            let amount;
            if (entry instanceof Income) {
                amount = `${entry.amount} €`;
            } else if (entry instanceof Expense) {
                amount = `-${entry.amount} €`;
            }
            arrStrings.push(`${entry.date} | ${entry.description} | ${amount}`);
        });
        return arrStrings;
    }
}
