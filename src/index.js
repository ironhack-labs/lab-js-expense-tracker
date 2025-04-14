// Entry
class Entry {
    constructor (date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount () {
        return `${this.amount} €`;
    }
}

// Income
class Income extends Entry {
    constructor (date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense";
    }

    getFormattedAmount () {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry(credit) {
        this.entries.push(credit);
    }

    getCurrentBalance() {
        let totalIncome = 0;
        let totalExpense = 0;
        if (this.entries.length === 0) {
            return 0;
        } else {
            this.entries.forEach((item) => {
                if(item.type === "income") {
                    totalIncome += item.amount;
                } else if (item.type === "expense") {
                    totalExpense += item.amount;
                }
            });
        }

        return totalIncome - totalExpense;
    }

    getFormattedEntries() {
        let formattedArrayEntries = [];
        this.entries.forEach((item) => {
            if(item.type === "income") {
                formattedArrayEntries.push(`${item.date} | ${item.description} | ${item.amount} €`);
            } else if (item.type === "expense") {
                formattedArrayEntries.push(`${item.date} | ${item.description} | -${item.amount} €`);
            }
        });

        return formattedArrayEntries;
    }
}