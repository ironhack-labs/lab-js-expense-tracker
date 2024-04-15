// Entry
class Entry {
    constructor(date, amount, description){
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
        // I receive the three from parent function 3 required parameters and pass them on
        super(date, amount, description);
        // I add another property called type, set by default to income.
        this.type = "income";
    }
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid){
        super(date, amount, description);
        this.type="expense";
        this.paid = paid;
    }
    // I overwrite the getFormattedAmount method
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
       let totalIncome = 0;
       let totalExpenses = 0;
       this.entries.forEach(element => {
            if(element.type === "income") totalIncome += element.amount;
            if(element.type === "expense") totalExpenses += element.amount;
       }) 
       let balance = totalIncome-totalExpenses;
       return balance;
    }
    getFormattedEntries(){
        let formattedEntries = [];
        this.entries.forEach(element => {
            formattedEntries.push(`${element.date} | ${element.description} | ${element.getFormattedAmount()}`)
        })
        return formattedEntries;
    }
}
