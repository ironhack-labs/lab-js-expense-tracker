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

    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
        
    }

}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid) {
        super (date, amount, description);
        this.type = "expense";
        this.paid = paid;
    }
    getFormattedAmount() {
        if (this.amount >0) {
            return `-${this.amount} €`;
        }
        else {
            return `${this.amount} €`;
        }
}
}


// Budget
class Budget {
    constructor() {
        this.entries = [];
    }
    addEntry(entry) {
        this.entries.push(entry);

    }
    getCurrentBalance() {
        if (this.entries.length === 0){
            return 0;
        }

        let balance = 0;
        for (let i=0; i <this.entries.length; i++) {
            let entry = this.entries[i];

            if (entry.type === "income") {
                balance += entry.amount;

            }
            else if (entry.type === "expense") {
                balance -= entry.amount;
            }
        }

        return balance;

    }

    getFormattedEntries() {
        const formattedEntries = [];

        this.entries.forEach(entry => {
        
            if (entry.type === "income") {
                formattedEntries.push(`${entry.date} | ${entry.description} | +${entry.amount} €`);
            } else if (entry.type === "expense") {
                formattedEntries.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
            }
        });

        return formattedEntries;
    }
}

