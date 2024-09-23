// Entry
class Entry {
    constructor(date,amount,description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return(`${this.amount} €`);
    }
}

// Income
class Income extends Entry{
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
        this.type = "expense";
    }
    getFormattedAmount(){
        return(`-${this.amount} €`)
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
        let sum = 0;
        
        this.entries.forEach((entry)=>{
            if(entry.type === "income")sum+= entry.amount;
            if(entry.type === "expense")sum-= entry.amount;
        })
        return sum;
    }
    getFormattedEntries(){
        let arr=[];
        this.entries.forEach((entry)=>{
            if(entry.type === "income")arr.push(`${entry.date} | ${entry.description} | ${entry.amount} €`)
            if(entry.type === "expense")arr.push(`${entry.date} | ${entry.description} | -${entry.amount} €`)
        })
        // console.log(arr);
        return arr;
    }
}
