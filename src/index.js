// Entry
class Entry {
    constructor(date,amount ,description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return `${this.amount} €`;
    }
}

// Income
class Income extends Entry {
    constructor(date,amount,description){
        super(date,amount,description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(date,amount,description,paid){
        super(date,amount,description);
        this.paid = paid;
        this.type = 'expense'
    }
    getFormattedAmount(){
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }
    addEntry(entry){
        this.entries.push(entry);
    }
    getCurrentBalance(){
        if(this.entries.length === 0) return 0;

        let totalIncome = 0;
        let totalExpense = 0;
        for(let entry of this.entries){
            // We can also use the type property instead
            if(entry instanceof Income)
                totalIncome += entry.amount;
            else
                totalExpense += entry.amount;
            }
        return totalIncome - totalExpense;
    }
    getFormattedEntries(){
        let formattedEntries = [];
        for(let entry of this.entries)
            formattedEntries.push(
        `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
    );
        return formattedEntries;
    }
}
const budget1 = new Budget()

const income1 = new Income("2024-06-17", 200, "food");
const income2 = new Income("2024-06-17", 200, "food");
const expense1 = new Expense("2024-06-17", 100, "food", true);
const expense2 = new Expense("2024-06-17", 500, "food", false);

budget1.addEntry(income1);
budget1.addEntry(income2);
budget1.addEntry(expense1);
budget1.addEntry(expense2);

console.log(budget1.getCurrentBalance())