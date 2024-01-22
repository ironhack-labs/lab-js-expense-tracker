// Iteration 1
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

// Iteration 2
// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Iteration 3
// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.type = "expense";
    this.paid = paid;
    }
    getFormattedAmount()  {
        return `-${this.amount} €`
    }
}

// Iteration 4
// Budget
class Budget {
    constructor() {
        this.entries = [];
    }
    addEntry(newEntry) {
        this.entries.push(newEntry);    
    };
    getTotalIncome() {
        let incomeEntries = 0;
        let totalIncome = 0;

        this.entries.forEach(function(element) {
            if (element.type === 'income') {
                totalIncome += element.amount;
                incomeEntries += 1;
            }
        });
        if (incomeEntries === 0) {
            return 0;
        }
        return totalIncome;
    };
    getTotalExpense() {
        let expenseEntries = 0;
        let totalExpenses = 0;

        this.entries.forEach(function(element) {
            if (element.type === 'expense') {
                totalExpenses += element.amount;
                expenseEntries += 1;
            }
        });
        if (expenseEntries === 0) {
            return 0;
        }
        return totalExpenses;
    };
    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        }
        return this.getTotal("income")-this.getTotal("expense");
    };
    getTotal(type) {
        let typeEntries = 0;
        let typeTotal = 0;

        this.entries.forEach(function(element) {
            if (element.type === type) {
                typeTotal += element.amount;
                typeEntries += 1;
            }
        });
        if (typeEntries === 0) {
            return 0;
        }
        return typeTotal;
    }
    getFormattedEntries() {
        const formattedArray = [];
        this.entries.forEach(function(element) {
            if (element.type === 'income') {
                const formattedEntry = `${element.date} | ${element.description} | +${element.amount} €`;
                formattedArray.push(formattedEntry);
            } else if (element.type === 'expense') {
                const formattedEntry = `${element.date} | ${element.description} | -${element.amount} €`;
                formattedArray.push(formattedEntry)
            }
        });
        return formattedArray;
    }
}

//console.log(new Entry("03/10", 200, "Dinner with friends"))

const myBudget = new Budget();
//const budget1 = new Budget();
const budget2 = new Budget();
const income1 = new Income("2024-06-17", 200, "food");
const income2 = new Income("2024-06-17", 200, "food");
const expense1 = new Expense("2024-06-17", 100, "food", true);
const expense2 = new Expense("2024-06-17", 500, "food", false);

myBudget.addEntry(income1);
myBudget.addEntry(income2);
myBudget.addEntry(expense1);
myBudget.addEntry(expense2);
/*
const myIncome1 = new Income("2024-10-01", 200, "sales");
const myIncome2 = new Income("2024-11-01", 350, "sales");
const myExpense1 = new Expense("2024-11-01", 150, "groceries", true);
myBudget.addEntry(myIncome1);
myBudget.addEntry(myIncome2);
myBudget.addEntry(myExpense1);
*/
/*
console.log(myBudget.entries);
console.log(myBudget.getTotal("income"))
console.log(myBudget.getTotal("expense"))
console.log(myBudget.getCurrentBalance())
*/
console.log(myBudget.getFormattedEntries())