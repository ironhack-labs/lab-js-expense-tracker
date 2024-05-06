// Entry
class Entry {
    constructor(date, amount, description) {
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
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = 'income';
    }
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.type = 'expense';
        this.paid = paid;
    }
    getFormattedAmount () {
        return `-${super.getFormattedAmount()}`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }

    addEntry(entry) {
        this.entries.push(entry);
    }
    getCurrentBalance() {
        let balance = 0;
        this.entries.forEach(entry => {
            entry.type === 'income' ? balance += entry.amount : balance -= entry.amount;
        });
        return balance;
    }
    getFormattedEntries() {
        const formattedEnries = [];
        this.entries.forEach(entry => {
            formattedEnries.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`);
        })
        return formattedEnries;
    }
}
