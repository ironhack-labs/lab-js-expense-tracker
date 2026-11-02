// Entry
class Entry {
    constructor (date, amount, description){
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
    constructor (date, amount, description){
        super (date, amount, description);
        this.type="income";
    }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description,paid){
        super (date, amount, description);
        this.paid = paid;
        this.type = "expense";
    }
    getFormattedAmount(){
        return  `-${this.amount} €`;
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
        if (this.entries.length === 0){
            return 0;
        }
        return this.entries.reduce((accumulator, currentValue) => {
            return currentValue.type === "income" //we have two types: one is an expense, the other is income
            ? accumulator + currentValue.amount//question, we do accumulator + amount
            : accumulator - currentValue.amount; //answer
        }, 0); //0 is the starting value
    }
    getFormattedEntries(){
        const formattedEntries = [];
        return this.entries.map(entry => entry.getFormattedAmount()); //this goes through every entry in my array, it calls the getFormattedAmount method from class Expense and returns a new array with all the formatted entries
    }
}
