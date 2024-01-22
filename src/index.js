// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor (date, amount, description) {
        super(date,amount,description);
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor(date,amount,description,paid) {
        super(date,amount,description);
        this.type = "expense";
        this.paid = paid;
    }
    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry (newEntry) {
        this.entries.push(newEntry)
    }

    getTotalIncome() {
        let sumIncomes = 0;
        
        this.entries.forEach((entry)=>{
            if (entry.type == "income") {
                sumIncomes += entry.amount
            }
        })

        if (this.entries.length === 0) {
            return 0
        }
        
        return sumIncomes
    }

    getTotalExpense() {
        let sumExpenses = 0;
        
        this.entries.forEach((entry)=>{
            if (entry.type == "expense") {
                sumExpenses += entry.amount
            }
        })

        if (this.entries.length === 0) {
            return 0
        }
        
        return sumExpenses
    }

    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0
        }

        return (this.getTotalIncome() - this.getTotalExpense())
    }

    getTotal(type) {
        
        let total = 0
                
        this.entries.forEach((entry)=>{
            if (entry.type === type) {
                total += entry.amount
            }
        })

        return total

    }

    getFormattedEntries() {
        let formattedEntries = []
        
        this.entries.forEach((entry)=>{
            formattedEntries.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`)
        })

        return formattedEntries
    }
}
