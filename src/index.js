// Entry
class Entry {
    constructor(date, amount, description){
       this.date = date; 
       this.amount = amount
       this.description = description;
        
    }

    getFormattedAmount(){
        return `${this.amount} €`;
    }
}



// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super()
        this.date = date;
        this.amount = amount
        this.description = description;
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super()
        this.date = date; 
        this.amount = amount
        this.description = description;
        this.paid = paid
        this.type = "expense"
    }
    getFormattedAmount() {
        return `${-Math.abs(this.amount)} €`
    }
}

// Budget
class Budget {
    constructor () {
        this.entries = []
    }
    addEntry(newEntry) {
        this.entries.push(newEntry)
    }
    getTotalIncome(){
        let totalIncome = 0
        
        this.entries.forEach(newEntry => {
            if (newEntry.type === "income") {
                totalIncome += newEntry.amount;
            }
        })
        return totalIncome;
    }
    getTotalExpense() {
        let totalExpenses = 0

        this.entries.forEach(newEntry => {
            if (newEntry.type === 'expense') {
                totalExpenses += newEntry.amount
            }
        })
        return totalExpenses;
    }
    getCurrentBalance() {
        let balance = 0

        this.entries.forEach(newEntry => {
            if (newEntry.type === 'income') {
                balance += newEntry.amount
            } else if (newEntry.type === 'expense'){
                balance -= newEntry.amount
            }
        })
        return balance
    }
}
