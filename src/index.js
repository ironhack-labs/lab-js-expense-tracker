// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date
        this.amount = amount
        this.description = description
    }
    getFormattedAmount(){
        return `${this.amount} €`;
    }
}
const newEntry = new Entry('2026-10-31', 100, 'One hundred euros')

console.log("newEntry", newEntry)
console.log(newEntry.getFormattedAmount())


// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description)
        this.type = "income";
    }
}
 const newIncome = new Income('2026-10-31', 100, 'gift')
 console.log(newIncome)

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description)
        this.type = "expense";
        this.paid = paid;
    }
getFormattedAmount(){
    return `-${this.amount} €`
}
}
const newExpense = new Expense('2026-10-31', 99, 'two hundred euros', "paid")
console.log(newExpense)
console.log(newExpense.getFormattedAmount())

// Budget
class Budget {
    constructor(name = '', entries = []) {
        this.name = name;
        this.entries = entries;
    }

    addEntry(entry) {
        this.entries.push(entry);
    }

    getCurrentBalance() {
        return this.entries.reduce((total, entry) => {
            if (entry.type === 'income') {
                return total + entry.amount;
            }
            return total - entry.amount;
        }, 0);
    }
    getFormattedEntries() {
         const formatted = [];

         this.entries.forEach((entry) => {
            formatted.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`)
         });
         return formatted;
    }
}
const budget = new Budget('new budget amount');
//creating new budget object which becomes this.name and entries using it's default value
budget.addEntry(new Income('2026-10-30', 500, 'Salary'));
budget.addEntry(new Expense('2026-10-31', 99, 'Groceries'));
//creating income/exepnse entry and push it to budget.entries
//use of foreach() to get one string per entry

console.log(budget.getFormattedEntries())