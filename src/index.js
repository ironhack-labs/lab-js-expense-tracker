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
    constructor (date, amount, description, paid) {
        super(date, amount, description)
        this.paid = paid;
        this.type = "expense";
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
        this.entry = entry;
        this.entries.push(entry)
    }
    getTotalIncome() {
        this.totalIncome = 0;
        this.entries.forEach((element) => {
            if (element.type === "income") {
            this.totalIncome += element.amount;}
        })
        return this.totalIncome;
    }
    getTotalExpense() {
        this.totalExpense = 0;
        this.entries.forEach((element) => {
            if (element.type === "expense") {
            this.totalExpense += element.amount;}
        })
        return this.totalExpense;
    }
    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0
        } else {
            const allIncome = this.getTotalIncome();
            const allExpenses = this.getTotalExpense();
            return allIncome - allExpenses;
        }
    }
}
