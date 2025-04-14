// Entry
class Entry {
    constructor(date,amount,description){
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
    constructor(date,amount,description){
        super(date,amount,description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry{
    constructor(date,amount,description,category){
        super(date,amount,description);
        this.type = "expense";
        this.paid = category
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
        this.entries.push(entry);
    }

    getCurrentBalance(){
        
        let balance = 0;
        for(let i = 0; i < this.entries.length; i++){
            if(this.entries[i].type === "income"){
                balance += this.entries[i].amount;
            } else {
                balance -= this.entries[i].amount;
            }
        }
        if(this.entries.length === 0){
            return 0;
        } else {
            return balance;
        }
    }

    getFormattedEntries(){
        
        const newArr = [];
        this.entries.forEach(element => {
            
            newArr.push(`${element.date} | ${element.description} | ${element.getFormattedAmount()}`);
     
        });
        return newArr;
    }
}


