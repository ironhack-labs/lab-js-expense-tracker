// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description =  description;
    };
    getFormattedAmount() {
        return `${this.amount} €`;
    }
}

// Income

class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.date = date;
        this.amount = amount;
        this.description =  description;
        this.type = "income";
    };
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.date = date;
        this.amount = amount;
        this.description =  description;
        this.type = "expense";
        this.paid = paid;
    };
    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }
    addEntry(newEntry) {
        this.entries.push(newEntry);
    }
    
    getCurrentBalance() {
        let totalIncome = 0;
        let totalExpense = 0;

        if(this.entries.length === 0) {
            return 0
        }

        this.entries.forEach(function(entry) {
            if(entry.type === "income") {
            totalIncome += entry.amount;
            } else if(entry.type === "expense") {
            totalExpense += entry.amount;
            }
            });
        const balance = totalIncome - totalExpense;
        return balance;  
    }
    getFormattedEntries() {
        let balanceArr = [];

        this.entries.forEach(function(entry) {
            if(entry.type === "income") {
                balanceArr.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`);
            } else if(entry.type === "expense") {
                balanceArr.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`);
            }
        })
        return balanceArr;
    }
}
