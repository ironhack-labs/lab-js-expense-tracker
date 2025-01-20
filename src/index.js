// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;

    }
    getFormattedAmount() {
        let stringRetour = `${this.amount} €`;
        return stringRetour;
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);

    }
    type = 'income';

}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.paid = paid;
    }
    type = 'expense';
    getFormattedAmount() {
        let stringRetourExpense = `-${this.amount} €`;
        return stringRetourExpense;
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
        let totalIncome = 0;
        let totalExpenses = 0;
        
        for (let i = 0; i < this.entries.length; i++) {
            let entry = this.entries[i];
            if (entry instanceof Income) {
                totalIncome += entry.amount;
            } else if (entry instanceof Expense) {
                totalExpenses += entry.amount;
            }
        }

        return totalIncome - totalExpenses;
    }
}
const money = new Entry(1991, 250, TigerShark);
console.log(money.getFormattedAmount());