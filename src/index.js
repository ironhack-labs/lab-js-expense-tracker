// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description; 
    }
    getFormattedAmount () {
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
    getFormattedAmount () {
        return `-${this.amount} €`; 
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry(NewEntry) {
        this.entries.push(NewEntry);
    }
    getTotalIncome() {
        let totalIncome = 0; 
        this.entries.forEach(entry => {
            if(entry.type === "income") {
                totalIncome += entry.amount;
            }
        })
        return totalIncome;
    }
    getTotalExpense() {
        let totalExpense = 0; 
        this.entries.forEach(entry => {
            if(entry.type === "expense") {
                totalExpense += entry.amount;
            }
        })
        return totalExpense;

    }
    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        } 
        return this.getTotalIncome() - this.getTotalExpense();
    }

    getTotal(type) {
        let totalAmount = 0; 
        this.entries.forEach(entry => {
            if(entry.type === type) {
                totalAmount += entry.amount;
            }
        })
        return totalAmount;
    }
    getFormattedEntries () {
         const formattedlist = [];
         this.entries.forEach(entry => {
            const sign = entry.type === 'income' ? '+' : '-';           
            const formattedEntry = `${entry.date} | ${entry.description} | ${sign}${entry.amount} €`;
            formattedList.push(formattedEntry);
         });
         return formattedList;
    }
}
