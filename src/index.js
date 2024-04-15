// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount(){
        return this.amount + " €"
    }

    getFormattedEntry() {
        return `${this.date} | ${this.description} | ${this.getFormattedAmount()}`;
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income"
    }

    getBalanceDifference() {
        return this.amount;
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description, paid);
        this.paid = paid;
        this.type = "expense"
    }

    getFormattedAmount () {
        return "-" + this.amount + " €"
    }

    getBalanceDifference() {
        return -this.amount;
    }
}
 

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }

    addEntry(income){
        this.entries.push(income)
    }

    getCurrentBalance() {
        let balance = 0;

        if(this.entries.length === 0) {
            return 0;         
        }
        
        for (let i = 0; i < this.entries.length; i++) {
            balance += this.entries[i].getBalanceDifference();             
        }

        return balance;
    }

    getFormattedEntries() {
        return this.entries.map(entry => entry.getFormattedEntry());
    }
} 
    

