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
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }


}

// Expense
class Expense extends Entry {
    constructor(date, amount, description,paid) {
        super(date, amount, description);
        this.type = "expense";
        this.paid = paid;

    }
    getFormattedAmount() {
        return `-${this.amount} €`;
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
        return this.entries.reduce((acc, entry) => {
            if (entry.type === "income") {
                return acc + entry.amount;
            } else {
                return acc - entry.amount;
            }
        }, 0);
    }

    getFormattedEntries() {
        let formattedEntries = [];
        this.entries.forEach(entry => {
            if (entry.type === "income") {
                formattedEntries.push(`${entry.date} | ${entry.description} | +${entry.amount} €`);
            } else {
                formattedEntries.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
            }
        });
        return formattedEntries;
    }

}
