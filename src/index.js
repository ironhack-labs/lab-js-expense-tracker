// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
}
getFormattedAmount(){
    return `${this.amount}€`;
}
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super (date, amount, description);
this.type = "income";
    }
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid){
        super (date, amount, description, paid)
        this.paid = paid;
        this.type = "expense";
 
    }
    getFormattedAmount(){
       return `${this.amount}€ - ${paid}`;
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
        if (this.entries.length === 0){
            return 0;
        }
        let totalIncome = 0;
        let totalExpense = 0;
        for (let i = 0; i < this.entries.length; i++) {
            let entry = this.entries[i];
            if (entry.type === "income"){
                totalIncome = totalIncome + entry.amount;
            }
            if (entry.type === "expense") {
                totalExpense = totalExpense + entry.amount;
            }
        }
        return totalIncome - totalExpense;
    }
}