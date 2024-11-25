// Entry

let ExpenseTracker = {
    date: `May`,
    amount: 100,
    description: `groceries`
}
class Entry {
    constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;  
    }
getFormattedAmount() {
    return `${this.amount} €` ;
}
}

let entry = new Entry(`June`, 150, `groceries`)
console.log(entry.date)


// Income
class Income extends Entry {
    constructor(date, amount, description){
    super(date, amount, description);
    this.type = "income"
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
    constructor(){
        this.entries = [];

    }
    addEntry(entry){
        this.entries.push(entry)

    }

    getCurrentBalance(){
        if (this.entries.length === 0) {
            return 0;
        }
    }
}
