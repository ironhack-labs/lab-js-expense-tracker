// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return `${this.amount} €`;
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
    constructor(date, amount, description, category){
        super(date,amount,description);
        this.paid = category;
        this.type = "expense";
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
    addEntry(newEntry){
        this.entries.push(newEntry);
    }
    getCurrentBalance(){
        if(this.entries.length===0){
            return 0;
        }
        else{
            let totalIncome = 0;
            let totalExpense = 0;
            this.entries.forEach(element => {
                if(element.type==="income"){
                    totalIncome += element.amount
                }
                else if(element.type === "expense"  ){
                    totalExpense += element.amount
                }
            });
            return totalIncome - totalExpense;
        }
    }
    getFormattedEntries(){
        let formattedEntries = [];
        this.entries.forEach(element=>{
           formattedEntries.push(`${element.date} | ${element.description} | ${element.getFormattedAmount()}`)
        })
        return formattedEntries;
    }
}

// Create an instance of Budget
const budget = new Budget();

// Create few income and expense entries for the budget
const income1 = new Income("2024-06-17", 10, "other");
const income2 = new Income("2024-06-17", 3456, "salary");
const expense1 = new Expense("2024-06-17", 100, "food", true);
const expense2 = new Expense("2024-06-17", 99, "food", true);

// Add the entries to the budget
budget.addEntry(income1);
budget.addEntry(income2);
budget.addEntry(expense1);
budget.addEntry(expense2);

console.log(budget.getFormattedEntries());