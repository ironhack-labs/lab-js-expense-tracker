// Entry
class Entry {
    constructor(date, amount, description) {
        this.date=date;
        this.amount=amount;
        this.description=description;
    }
    getFormattedAmount(){
        return this.amount + " €";
    }

}

// Income
class Income extends Entry{
    constructor(date, amount, description) {
        super(date,amount,description);
        this.type="income"
    }
    
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description,paid) {
        super(date,amount,description);
        this.type="expense"
        this.paid=paid
    }
    getFormattedAmount(){
    /*    if (this.amount<0){
            return "-"+this.amount+"€"; 
            
        }
        else {
            return this.amount + " €";
        }
        */
       return "-" + this.amount + " €";
    }
}

// Budget
class Budget {
   constructor(){
    this.entries=[]
   }
   addEntry(entry){
    this.entries.push(entry)
   }
   getTotalIncome(){
    let totalIncome = 0
    this.entries.forEach((entry)=>{
        if(entry.type === "income"){
            totalIncome += entry.amount;
        } 

   })
   return totalIncome;
}
getTotalExpense(){
    let totalExpense = 0
    this.entries.forEach((entry)=>{
        if(entry.type === "expense"){
            totalExpense += entry.amount;
        } 

   })
   return totalExpense;
}

getCurrentBalance(){
    let balance=0;
    return (this.getTotalIncome(Entry) - this.getTotalExpense(Entry))
}
}


