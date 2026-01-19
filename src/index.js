// Iteration 1 | Entry
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

// Iteration 2 | Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Iteration 3 | Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense";
    }

    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

// Iteration 4 | Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry(newEntry) {
        this.entries.push(newEntry);
    }

    getCurrentBalance() {
        if (this.entries.length === 0) return 0;

        let totalIncome = 0;
        let totalExpense = 0;

        this.entries.forEach((entry) => {
            if (entry.type === "income") {
                totalIncome += entry.amount;
            } else if (entry.type === "expense") {
                totalExpense += entry.amount;
            }
        });

        return totalIncome - totalExpense;
    }

    // Bonus: Iteration 5 | Get Formatted Entries
    getFormattedEntries() {
        const formattedArray = [];

        this.entries.forEach((entry) => {
            const formattedString = `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
            formattedArray.push(formattedString);
        });

        return formattedArray;
    }
}