// Entry
class Entry {
    constructor (date, amount, description) {
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
    constructor (date, amount, description) {
        super(date)
        this.amount = amount;
        this.description = description;
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super(date)
        this.amount = amount;
        this.description = description;
        this.paid = paid;
        this.type = "expense"
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
    addEntry(entryToAdd) {
        this.entries.push(entryToAdd);
    }
    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0
        }

        let totalIncome = 0;
        let totalExpense = 0;

        this.entries.forEach(entry => {
            if (entry.type === "income") {
                totalIncome += entry.amount;
            } else if (entry.type === "expense") {
                totalExpense += entry.amount;
            }
        })

        return totalIncome - totalExpense;
            
    }

    getFormattedEntries() {
        let formattedEntries= [];

        this.entries.forEach(entry => {
            if (entry.type === "income") {
                formattedEntries.push(`${entry.date} | ${entry.description} | +${entry.amount} €`);
            } else if (entry.type === "expense") {
                formattedEntries.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
            }
        });
        return formattedEntries;
    }
    
}


//testing
const myBudget = new Budget();

const income1 = new Income("2024-10-21", 1000, "Salary");
const expense1 = new Expense("2024-10-22", 200, "Groceries", true);

// Add entries to the budget
myBudget.addEntry(income1);
myBudget.addEntry(expense1);

// Check the formatted entries
console.log(myBudget.getFormattedEntries()); // Should print formatted entries

// Check the balance
console.log(myBudget.getCurrentBalance()); // Should print the balance
