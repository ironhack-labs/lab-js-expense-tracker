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
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor () {
        this.entries = [];
    }

    addEntry (newEntry) {
        this.entries.push(newEntry);
    }

    getCurrentBalance () {
        if (this.entries.length === 0) {
            return 0;
        }

        // Calculate total income and expenses
        let totalIncome = 0;
        let totalExpenses = 0;

        this.entries.forEach(function (element) {
            if (element.type === "income") {
                totalIncome += element.amount;
            } else if (element.type === "expense") {
                totalExpenses += element.amount;
            }
        });

        return totalIncome - totalExpenses;
    }

    getFormattedEntries () {
        let formattedEntries = [];

        this.entries.forEach(function (element, index, arr) {
            if (element.type === "income") {
                formattedEntries.push(`${element.date} | ${element.description} | ${element.amount} €`);
            } else if (element.type === "expense") {
                formattedEntries.push(`${element.date} | ${element.description} | -${element.amount} €`);
            }
        });

        return formattedEntries;
    }
}
