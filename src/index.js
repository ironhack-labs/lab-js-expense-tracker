// Entry
class Entry {
    constructor (date, amount, description){
        this.date = date; // these are properties. They will be passed to extend
        this.amount = amount; // these are properties. They will be passed to extend
        this.description = description; // these are properties. They will be passed to extend
    }

    getFormattedAmount () {
        return `${this.amount} €`;
    }
}

// Income
class Income extends Entry {
    constructor (date, amount, description) {
        super (date, amount, description);
        this.type = "income"; // This is a new property to every income object.
    }
}

// Expense
class Expense extends Entry { // Inherit from Entry
    constructor (date, amount, description, paid) {
        super (date, amount, description); // to initialize the inherited properties
        this.paid = paid; // add a new property only to expense.
        this.type = "expense"; // this is a new property to every expense object.
    }

    getFormattedAmount () {
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor () {
        this.entries = [];
        addEntry (Entry) {
            this.entries.push(Entry);
        }

        getCurrentBalance () {
            if (this.entries.length === 0) {
                return 0;
            }

            let totalIncome = 0;
            let totalExpenses = 0;

            for (const entry of this.entries) {
                if (entry.type === "income") {
                    totalIncome += entry.amount; // sum all incomes
                    else if (entry.type === "expense") {
                        totalExpenses += entry.amount; // sum all expenses
                    }
                }
                return totalIncome - totalExpenses; // Calculate Balance 
            }
        }
    }
}
