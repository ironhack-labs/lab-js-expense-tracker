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
class Income extends Entry{
    constructor(date, amount, description){
        super(date,amount,description);
        this.type = "income";
    }   
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid) {
        super(date, amount, description);
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
    addEntry(entry) {
        this.entries.push(entry)
    }
    getCurrentBalance() {
        let totalIncome = 0;
        let totalExpenses = 0;

        this.entries.forEach(entry => {
            if (entry.type === 'income') {               
                totalIncome += entry.amount
            } else if (entry.type === 'expense') {
                totalExpenses += entry.amount
            }
        });
                
        let currentBalance =  totalIncome - totalExpenses;
        return currentBalance
    }
    getFormattedEntries() {
        let formattedEntries = [];
        
        this.entries.forEach(entry => {
            let formattedAmount = entry.getFormattedAmount();
            formattedEntries.push(`${entry.date} | ${entry.description} | ${formattedAmount}`);
        });
    
        return formattedEntries;
    }
    
}
const myBudget = new Budget();
myBudget.addEntry(new Income('2024-10-05', 500, 'Salary'));
console.log(myBudget.getFormattedEntries()); 

myBudget.addEntry(new Expense('2024-10-12', 200, 'Groceries'));
console.log(myBudget.getFormattedEntries()); 

myBudget.addEntry(new Income('2024-10-21', 300, 'Lottery'));
console.log(myBudget.getFormattedEntries()); 

console.log( myBudget.getCurrentBalance()); 
