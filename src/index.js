// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super (date, amount, description);
        this.type = "income";
    }
    getFormattedAmount(){
        return ` -${this.amount} €`
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description);
        this.type = "expense";
        this.paid = paid;
    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];

    }
    addEntry(entry){
        return this.entries.push(entry)
    };

    getTotalIncome(){
        let totalIncome = 0;
        this.entries.forEach((entry) =>{
            if(entry.type === "income"){
            totalIncome += entry.amount;
        }})
        return totalIncome
        }

    getTotalExpense(){
        let totalExpenses = 0;
        this.entries.forEach((entry) =>{
            if(entry.type === "expense"){
            totalExpenses += entry.amount;
        }})
        return totalExpenses
        }
    getCurrentBalance(){
        let CurrentBalance = 0;
            return (this.getTotalIncome(Entry) - this.getTotalExpense(Entry))
        }
    }
