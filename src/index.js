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
        this.paid = paid; //boolean(true or false)
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
        this.entries.push(entry);
    }
    getTotalIncome() {
        let total = 0;
        this.entries.forEach((entry) => {
            if (entry.type === "income") {
                total += entry.amount;
            } 
        });
        return total;   
    }
    getTotalExpense() {
        let total = 0;
        this.entries.forEach((entry) => {
            if (entry.type === "expense") {
                total += entry.amount;
            }
        });
        return total;
    }
    getCurrentBalance() {
        return this.getTotalIncome() - this.getTotalExpense();
    }

    //Bonus: Iteration 5 | Get total by type

    getTotal(entryType) {
        let total = 0;
        this.entries.forEach((entryType) => {
            if (entry.type === "entryType") {
                total += entry.amount; 
            } 
        });
        return total;
    } 

    //Bonus: Iteration 6 | Get Formatted Entries

    getFormattedEntries() {
        let formattedEntries = [];
        this.entries.forEach((entry) => {
            formattedEntries.push(`${entry.type} | ${entry.description} | ${entry.getFormattedAmount()}`);
        });
        return formattedEntries;
    }

}
