// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry{

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

    getFormattedAmount(){
        return `-${this.amount} €`
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
        return this.entries.reduce((total, entry) => {
            return total + parseInt(entry.getFormattedAmount());
        }, 0);
    }

    getFormattedEntries(){
        return this.entries.map(
            entry =>
               `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
        )
    }
}


