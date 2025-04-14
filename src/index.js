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
const Entry1 = new Entry ("12", "25 €", "Telephone");

// Income
class Income extends Entry {
    constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
}
getTypeEntry() {
    return `${this.type} "income"`;
}
}
const income1 = new Income("12", 1000, "Salary");
// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";
}
}
const expense1 = new Expense("12", 150, "Groceries", false);

// Budget
class Budget {
    constructor() {
    this.entries = [];
}
addEntry(entry) {
    this.entries.push(entry);
}
    getCurrentBAlance() {
        if (this.entries.length === 0) {
            return 0;
}
  let totalIncome = 0;
  let totalExpenses = 0;

    for (const entry of this.entries) {
        if (entry instanceof Income) {
        totalIncome += entry.amount; 
} else if (entry instanceof Expense) {
        totalExpenses += entry.amount; 
        }
    }
    return totalIncome - totalExpenses;
    } 
}

