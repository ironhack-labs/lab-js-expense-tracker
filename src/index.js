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
class Income extends Entry{
    constructor(date,amount,description){
        super(date,amount,description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry{
    constructor(date,amount,description, paid){
        super(date,amount,description);
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
    addEntry(Entry){
        this.entries.push(Entry);
    }

    getCurrentBalance(){
        if(this.entries.length === 0)
            return 0;
        let Balance = 0;
        for(let i = 0; i< this.entries.length; i++){
            if(this.entries[i].type === "expense"){
                Balance -= this.entries[i].amount;
            }else{
                Balance += this.entries[i].amount;

            }
        }
        return Balance;
    }
    getFormattedEntries(){
        let formattedEntries = [];
        this.entries.forEach((entry)=>{
            formattedEntries.push(entry.date + " | "+entry.description + " | "+entry.getFormattedAmount());
        })
        return formattedEntries;
    }
}

