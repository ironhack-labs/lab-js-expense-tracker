// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description
    }
    getFormattedAmount() {
        return `${this.amount} €`
    }

}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description)
        this.date = date;
        this.type = 'income';
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description,)
        this.paid = paid
        this.type = 'expense';

    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }
    addEntry(income) {
        this.income = income;
        this.entries.push(income)
    }
    getTotalIncome() {
        let income = 0;
        this.entries.forEach(entry => {
            if (entry.type === 'income') {
                income += entry.amount;
            }
        });
        return income;
    }
    getTotalExpense() {
        let income = 0;
        this.entries.forEach(entry => {
            if (entry.type === 'expense') {
                income += entry.amount;
            }
        });
        return income;
    }
    getCurrentBalance() {
        let income = 0;
        let expense = 0;
        this.entries.forEach((entry) => {
            if (entry.type === 'income') {
              income += entry.amount;
            } else if (entry.type === 'expense') {
              expense += entry.amount;
            }
        });
        return income - expense;  
    }
}
