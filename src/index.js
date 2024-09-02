// Entry
class Entry {
    constructor(date, amount, description){
        this.date= date;
        this.amount= amount;
        this.description= description;
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry{
    constructor(date, amount, description){
        super(date, amount, description)
        this.type= "income";
    }

}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid){
        super(date, amount, description)
        this.paid= paid; 
        this.type= "expense";
    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }

}

// Budget
class Budget {
    constructor(){
        this.entries= [];
    }
    addEntry(entry){
        this.entries.push(entry);
        return 
    }
    getCurrentBalance(){
        if(this.entries.length === 0){
            return 0;
        }
        let totalIncome= 0;
        let totalExpenses= 0;
        for(let entry of this.entries){
            if(this.type === "income"){
                totalIncome+= this.amount;
            } else if(this.type === "expense"){
                totalExpenses += this.amount;
            }
        }
        return totalIncome-totalExpenses;
       

        }
        getFormattedEntries(){
            return `${this.date} | ${this.description} | `
        }
    }
   

