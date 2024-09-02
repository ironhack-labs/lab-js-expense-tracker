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
        let balanceAmount= 0;
        let balanceExpence= 0;
        for(let entry of this.entries){
            if(this.type === "income"){
                balanceAmount+= this.amount;
            } else if(this.type === "expense"){
                balanceExpence += this.amount;
            }
        }
        return balanceAmount-balanceExpence;
       

        }
        getFormattedEntries(){
            return
        }
    }
   

