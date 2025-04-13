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
class Income extends Entry {
    constructor (date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
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
    constructor () {
        this.entries = []
    }
    addEntry(entry1) {
        this.entries.push(entry1)
    }
    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        } else {
            let sumOfAll = 0;
            for (let i = 0; i < this.entries.length; i++) {
                let currentEntry = this.entries[i]; 
                if (currentEntry.type())
                sumOfAll += this.entries[i].amount
            }
    }

}
}

 const budget = new Budget();
 const income1 = new Income("19 Sep 2024", 49.99, "Dinner");

 budget.addEntry(income1);
 
 console.log (budget);
 console.log (income1);

