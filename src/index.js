// Entry
class Entry {
    constructor (date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}
const newEntry = new Entry();


// Income
class Income extends Entry{
    constructor (date, amount, description){
        super(date, amount, description);
        this.type = "income";
    }
}
const newIncome = new Income();



// Expense
class Expense extends Entry{
    constructor (date, amount, description, paid){
        super(date, amount, description);
        this.type = "expense";
        this. paid = paid;
    }
    getFormattedAmount(){
       return(`-${this.amount} €`) 
    }
}
const newExpense = new Expense();


// Budget
class Budget {
    constructor(){
        this.entries = [];
    }

    addEntry(newEntry){
        this.entries.push(newEntry)
    }

    getTotalIncome(){
       // let sum = 0;
        this.sumIncome = 0;
        this.entries.forEach(newEntry => {
            console.log(newEntry)
            if (newEntry.type === "income"){
                this.sumIncome += newEntry.amount;
            }
        } )
        return this.sumIncome; 
    }

    getTotalExpense(){
       // let sum = 0;
        this.sumExpense = 0;
        this.entries.forEach(newEntry => {
            if (newEntry.type === "expense"){
                this.sumExpense += newEntry.amount;
            }
        } )
        return this.sumExpense; 

    }
    getCurrentBalance(){
        if (this.entries.length === 0){
            return 0
        }else{
            return this.getTotalIncome() - this.getTotalExpense()
        }
    }
}
const newBudget = new Budget();
//newBudget.addEntry(new Income("2024-01-22", 10, "Hi"))
//newBudget.addEntry(new Expense("2024-01-22", 7, "Hi"))
//console.log(newBudget.getCurrentBalance())

