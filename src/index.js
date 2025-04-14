// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date,
        this.amount = amount,
        this.description = description
    }
    getFormattedAmount(){
        return `${this.amount} €`;
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description);
        this.date = date,
        this.amount = amount,
        this.description,
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, true);
        this.date = date,
        this.amount = amount,
        this.description = description,
        this.paid = paid,
        this.type = "expense"
    }
    getFormattedAmount(){
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = []
    }
    addEntry(Expense){
        this.entries.push(Expense);
    }
    getCurrentBalance(){
        let currentBalance = 0;
        for(const entry of this.entries){
            if(entry.type === "expense"){
                currentBalance -= entry.amount;
            }else{
                currentBalance += entry.amount;
            }
        }
        return currentBalance;

    }
}


const budget = new Budget();
const expense1 = new Expense('12/04/2024', 200, '');
budget.addEntry(expense1);
console.log(budget.entries);