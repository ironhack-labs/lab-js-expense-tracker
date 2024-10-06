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
        super(date);
        this.amount = amount;
        this.description = description;
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date);
        this.amount = amount;
        this.description = description;
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
        this.entries.push(entry);
    }
    getCurrentBalance() {
        if(this.entries.length === 0){
            return 0;
        }
        let totalIncome = 0;
        let totalExpense = 0;
        this.entries.forEach(entry => {
            if (entry.type.includes("expense")) {
                totalExpense += entry.amount;
            } else if (entry.type.includes("income")) {
                totalIncome += entry.amount;
            }
            
        });
        return totalIncome - totalExpense;
    }
    getFormattedEntries() {
        let results = [];

        this.entries.forEach(entry => {
            if(entry.type.includes("expense")) {
                results.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);

            } else if  (entry.type.includes("income")) {
                results.push(`${entry.date} | ${entry.description} | ${entry.amount} €`);
            }
        })
        return results;
        
    }
        


}
