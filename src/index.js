
class Entry {
    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this. description = description;
    }
    getFormattedAmount(){
        return `${this.amount} €`;
    }
};

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description)
        

     }
      
};

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date,amount, description)
        this.paid = true;
        
        let expense = `${this.amount}-${this.paid}`;
    }
    getFormatedAmount(){
        return `-${this.expense} €`;
    }



}

// Budget
class Budget {
    constructor(){
        this.entries =[];
    }
    addEntry(){
        
    }

}
