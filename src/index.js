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
    constructor(date, amount, description, paid) {
        super(date, amount, description);
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

    // ======== ADD ENTRY ========
    addEntry(entry) {
        this.entries.push(entry);
    }

    getTotalIncome() {
        if (this.entries.length === 0) {
            return 0;
        }
    
        let totalIncome = 0;
        this.entries.forEach((entry) => {
            if (entry instanceof Income) {
                totalIncome += entry.amount;
            }
        });
        return totalIncome;
    }
    
    getTotalExpense() {
        if (this.entries.length === 0) {
            return 0;
        }
    
        let totalExpense = 0;
        this.entries.forEach((entry) => {
            if (entry instanceof Expense) {
                totalExpense += entry.amount;
            }
        });
        return totalExpense;
    }
    

    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        }

        const totalIncome = this.getTotalIncome();
        const totalExpense = this.getTotalExpense();
        return totalIncome - totalExpense;
    }
}
