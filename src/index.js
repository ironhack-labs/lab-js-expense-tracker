// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount(){
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
        this.type = "expense";
        this.paid = paid;
    }

    getFormattedAmount () {
        return `-${this.amount} €`
    }

}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry(newEntry){
        this.entries.push(newEntry);
    }

    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        }

        let  totalIncomes = 0;
        let  totalExpenses = 0; 

        for (let entry of this.entries) {
            if (entry instanceof Income) {
                totalIncomes += entry.amount;
            } else if (entry instanceof Expense) {
                totalExpenses += entry.amount;
            }
        }
    
        return totalIncomes - totalExpenses;
    }
}
