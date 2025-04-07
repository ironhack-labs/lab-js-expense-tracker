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

    addEntry (entry) {
        this.entries.push(entry);
    }

    getCurrentBalance () {
        if (this.entries.length === 0) {
            return 0;
        }

        let totalIncome = this.entries
            .filter(entry => entry.type === 'income')
            .reduce((total, entry) => total + entry.amount, 0);

        let totalExpense = this.entries
            .filter(entry => entry.type === 'expense')
            .reduce((total, entry) => total + entry.amount, 0);

        let balance = totalIncome - totalExpense;

        return balance;
    }

    getFormattedEntries () {
        const formattedEntries = [];
        this.entries.forEach(entry => {
            const amount = entry.type === 'expense' ? `-${entry.amount} €` : `${entry.amount} €`;
            const formattedEntry = `${entry.date} | ${entry.description} | ${amount}`;
            formattedEntries.push(formattedEntry);
        });
        return formattedEntries;
    }
}
