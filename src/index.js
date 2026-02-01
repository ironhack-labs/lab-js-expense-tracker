// Entry
class Entry {
    constructor (date, amount, description) {
        this.date = date;
        this.amount =amount;
        this.description = description;
    }
     getFormattedAmount() {
        return `${this.amount} €`;
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
        super(date, amount, description, paid);
        this.type = "expense";
        this.paid = paid;
    }
     getFormattedAmount() {
        return "-${this.paid} €"
}
}
// Budget
class Budget {
    constructor () {
        this.entries = [];
    }
    addEntry(entry) {
        this.entries.push(entry);
    }
    getCurrentBalance() {
        return this.entries
            .filter(entry => entry.type === "income")
            .reduce((total, entry) => total + entry.amount, 0) -
            this.entries
                .filter(entry => entry.type === "expense")
                .reduce((total, entry) => total + entry.amount, 0);
    }
/*************  ✨ Windsurf Command ⭐  *************/
    /**
     * Returns the total expenses of the budget.
     * @returns {number} The total expenses of the budget.
     */
/*******  24cc8154-4b82-44a1-863d-9a506df48259  *******/
    getTotalExpenses() {
        return this.entries
            .filter(entry => entry.type === "expense")
            .reduce((total, entry) => total + entry.amount, 0);
    }
    getFormattedBalance() {
        let balance = 0;
        for (const entry of this.entries) {
            if (entry.type === "income") {
                balance += entry.amount;
            } else if (entry.type === "expense") {
                balance -= entry.amount;
            }
        }
        return `${this.getCurrentBalance()} €`;
    }
}
