// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return this.amount + " €"
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description)
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description)
        this.type = "expense"
        this.paid = paid
    }
    getFormattedAmount(){
        return "-" + this.amount + " €"
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
    getTotalIncome(){
        let totalIncome = 0;
        this.entries.forEach(function(element) {
            if (element.type === "income") {
                totalIncome += element.amount;
            }
        });
        return totalIncome
    }
    getTotalExpense(){
        let totalExpense = 0;
        this.entries.forEach(function (element) {
            if (element.type === "expense") {
                totalExpense += element.amount;      
            }
        })
        return totalExpense;
    }
    getCurrentBalance(){
        let totalIncome = this.getTotalIncome();
        let totalExpense = this.getTotalExpense()
        return totalIncome - totalExpense
    } 
}
