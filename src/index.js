// Entry 
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
}

Entry.prototype.getFormattedAmount = function() {
    return `${this.amount} €`;
};


// Income

class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense

class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense";
    }
}
Expense.prototype.getFormattedAmount = function() {
    return `-${this.amount} €`;
};



// Budget
class Budget {
    constructor() {
        this.entries = [];
    }
    addEntry(entry) {
        this.entries.push(entry);
    }
    getCurrentBalance() {
        let totalIncome = 0;
        let totalExpenses = 0;

        for (const entry of this.entries) {
            if (entry.type === "income") {
                totalIncome += entry.amount;
            } else if (entry.type === "expense") {
                totalExpenses += entry.amount;
            }
        }

        return totalIncome -   totalExpenses;
    }
}

// BONUS Get Formatted Entries

Budget.prototype.getFormattedEntries = function() {
    const formattedEntries = [];
    this.entries.forEach(entry => {
        formattedEntries.push(
            `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
        );
    });
    return formattedEntries;
}