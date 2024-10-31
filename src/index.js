// Entry
class Entry {
    constructor(date,amount,description){
        this.date=date;
        this.amount=amount;
        this.description=description;
    }
    getFormattedAmount(){
        return `${this.amount} €`; //should return a string with the amount and the € symbol like: "100 €"
    }
}

// Income
class Income extends Entry {
    constructor(date,amount,description){
        super(date,amount,description);
        this.type= "income";
    }
}

// Expense
class Expense extends Entry {
constructor(date,amount,description,paid){
    super(date,amount,description);
    this.paid=paid;
    this.type="expense";
}

    getFormattedAmount() {
        return `-${this.amount} €`;
      }

}

// Budget
class Budget {
    constructor(){
        this.entries=[];
    }
    addEntry(entry){
        return this.entries.push(entry)
    }
    getCurrentBalance(){
        if(this.entries.length === 0){
            return 0;
        }
        let amount = this.entries.reduce((acc, entry, index) => {
            if(entry.type==="income"){
                acc += entry.amount;
            }else if(entry.type==="expense"){
                acc -= entry.amount;
            }
            console.log(acc, index);
            return acc;
        }, 0);
        return amount;
    }
}

let income1= new Income ("25 December", 2000, "salary");
//const entry1= addEntry(income1);
console.log(income1);
console.log(income1.getFormattedAmount);

let expense1= new Expense ("25 December", 500, "Presents");
console.log(expense1);
console.log(expense1.getFormattedAmount);

let budget= new Budget();
budget.addEntry(income1);
budget.addEntry(expense1);
console.log(budget.getCurrentBalance)
