// Entry
class Entry {
    constructor(date, amount,description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        console.log(`${this.amount} €`);
        return `${this.amount} €`
    }
  

}

// Income
class Income extends Entry {
    constructor(date, amount,description){
        super(date, amount,description)  
        this.type ="income"

    }
   

}


// Expense
class Expense extends Entry {
    
    constructor(date, amount, description, paid){
        super(date, amount, description)
        this.paid= paid
        this.type="expense"
    }
      getFormattedAmount(){
        console.log(`${-this.amount} €`);
        return `${-this.amount} €`
    }


}



// Budget
class Budget {
    constructor(){
        this.entries=[]
        this.Income
        
    }
    
   

    addEntry(Income){
        this.entries.push(Income)
    

    }
    getCurrentBalance(){
    let balance = 0;
    for(let entry of this.entries){
        if(entry.type === "income"){
            balance += entry.amount;
        } else if(entry.type === "expense"){
            balance -= entry.amount;
        }
    }
    return balance;
}
}

