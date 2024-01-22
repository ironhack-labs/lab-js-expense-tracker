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
};

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
};

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
};

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }
    addEntry(entry) {
        this.entries.push(entry);
    }
    getTotalIncome () {
        let total = 0

         this.entries.forEach((sum) => {
            if(sum.type === "income") {
                total += sum.amount;
            }
            
         });
         return total;
    }
    getTotalExpense() {
        let total = 0
        
         this.entries.forEach((sum) => {
            if(sum.type === "expense") {
                total += sum.amount;
            }
            
         });
         return total;
    }
    getCurrentBalance() {
        let balance = 0;

        return (this.getTotalIncome(Entry) - this.getTotalExpense(Entry));
    }
};
