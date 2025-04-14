// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry{
    constructor(date, amount, description){
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid){
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense";
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
        this.entries.push(entry);
    }

    getCurrentBalance(){
        let balance = 0;
        for(let i = 0; i<this.entries.length; i++) {
            if(this.entries[i].type === "income") balance += this.entries[i].amount;
            else balance -= this.entries[i].amount;
        }
        return balance;
    }

    getFormattedEntries(){
        const formattedEntries = []
        this.entries.forEach(entry => {
            formattedEntries.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`);
        });
        return formattedEntries; 
    }
}
