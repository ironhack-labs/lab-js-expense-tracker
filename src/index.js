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
        this.type = "expense"
    }
    getFormattedAmount() {
        return `-${this.amount} €`
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
        if (this.entries.length === 0) {
            return 0;
        }

        const totalIncomes = this.entries
            .filter((entry) => entry.type === "income")
            .reduce((sum, income) => sum + income.amount, 0);

        const totalExpenses = this.entries
            .filter((entry) => entry.type === "expense")
            .reduce((sum, expense) => sum + expense.amount, 0);

        return totalIncomes - totalExpenses;
    }
    getFormattedEntries() {
        return this.entries.map(entry => {
            const sign = entry.type != "income" ? "-" : "";
            return `${entry.date} | ${entry.description} | ${sign}${entry.amount} €`;
          });
    }
    
}
