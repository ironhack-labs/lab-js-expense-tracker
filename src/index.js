
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        console.log(`${this.amount} €`);
    }
}

class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }

    getFormattedAmount() {
        super.getFormattedAmount();
        console.log(`+ ${this.amount} €`);
    }
}

class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense";
    }

    getFormattedAmount() {
        super.getFormattedAmount();
        console.log(`- ${this.amount} €`);
    }
}

class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry(entry) {
        this.entries.push(entry);
    }

    getTotalIncome() {
        let totalIncome = 0;

        this.entries.forEach((entry) => {
            if (entry.type === "income") {
                totalIncome += entry.amount;
            }
        });

        return totalIncome;
    }

    getTotalExpense() {
        let totalExpenses = 0;

        this.entries.forEach((entry) => {
            if (entry.type === "expense") {
                totalExpenses += entry.amount;
            }
        });

        return totalExpenses;
    }

    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        }

        const totalIncome = this.getTotalIncome();
        const totalExpenses = this.getTotalExpense();

        return totalIncome - totalExpenses;
    }
}