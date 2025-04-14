// Entry
class Entry {
    constructor(date, amount, description){
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
    this.type = "income";}


}


// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";}
    getFormattedAmount() {
        return `-${this.amount} €`;
    }
    
}
 Budget
class Budget {
    constructor() {
    this.entries = [];

    }
    addEntry(entry) {
        this.entries.push(entry);
    }
    getFormattedbalance() {
        lets totalBudget = 0;;

        for (let i = 0; i < this.entries.length; i++) {
            totalBudget += this.entries[i].amount;
        }
        return totalBudget;
    }
}
const income = new Income("2024-06-17", 10, "other");
const income2 = new Income("2024-06-17", 3256, "salary");
const expense = new Expense("2024-06-17", 100, "food", true);
const expense2 = new Expense("2024-06-17", 99, "food", true);

const budget = new Budget();
budget.addEntry(income);
budget.addEntry(expense1);
budget.addEntry(income2);
budget.addEntry(expense2);

console.log("This is what my budget entreies looks like: " + budget.entries);
console.log("This is what my budget entreies looks like:" + budget.entries[0]);
console.log("This is what my budget entreies looks like:" + budget.entries[0].amount);





