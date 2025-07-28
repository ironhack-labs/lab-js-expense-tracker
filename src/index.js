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
class Income extends Entry{
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, category) {
        super(date, amount, description);
        this.paid = category;
        this.type = "expense";
    }

    getFormattedAmount() {
        return `-${this.amount} €`;        
    }
}

// Budget
class Budget{
    constructor() {
        this.entries = [];
    }

    addEntry(entry) {
        this.entries.push(entry);
    }

    getCurrentBalance() {
        let sum = 0;
        for(let entry of this.entries){
        // for (let i = 0; i < this.entries.length; i++) {
        //     let entry = this.entries[i];
            if ( entry instanceof Income) {
                sum += entry.amount;
            } else if (entry instanceof Expense) {
                sum -= entry.amount;
            }
        }
        return sum;
    }

    getFormattedEntries() {
        let entriesString = [];
        this.entries.forEach(element => { entriesString.push(`${element.date} | ${element.description} | ${element.getFormattedAmount()}`) });
        return entriesString;
    }
}
