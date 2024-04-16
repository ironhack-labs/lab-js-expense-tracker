// Entry
class Entry {
    constructor (date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return `${this.amount } €`
    }
}

// Income
class Income extends Entry {
    constructor (date, amount, description) {
        super(date, amount, description);
         this.type ="income"
    }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense"
    }
    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = []
    }
    addEntry(entry){
        this.entry = entry;
        this.entries.push(entry)
    }
    getCurrentBalance() {

        let totalIncome = 0;
        let totalExpenses = 0;

        if (this.entries.length === 0){
            return 0
        }
        for (let i = 0; i < this.entries.length; i++) {
            const entry = this.entries[i]
            if (this.entries[i].type === "income") {
                totalIncome += entry.amount;
            }
            else if (this.entries[i].type === "expense") {
                totalExpenses += entry.amount;
            }
        }
    return totalIncome - totalExpenses    
    }
    getFormattedEntries() {
        let formattedEntries = [];
        for (let i = 0; i < this.entries.length; i++) {
            const entry = this.entries[i];
            let formattedEntry = `${this.entries[i].date} | ${this.entries[i].description} | ${entry.getFormattedAmount()}`;
            formattedEntries.push(formattedEntry);
        }
        return formattedEntries;
    }
}  

