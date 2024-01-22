class Entry {
    constructor(date, amount, description) {
        this.date=date;
        this.amount=amount;
        this.description=description;
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
  }
  // Income
  class Income extends Entry {
    constructor(date,amount,description){
        super(date, amount, description);;
        //this.date=date;
        //this.amount=amount;
        //this.description=description;
        this.type="income";
    }
  }
  // Expense
  class Expense extends Entry{
    constructor(date,amount,description,paid){
        super(date, amount, description);
        this.date=date;
        this.amount=amount;
        this.description=description;
        this.paid=paid;
        this.type="expense"
    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }
  }
  // Budget
  class Budget {
    constructor(){
        this.entries =[];
    }
   addEntry(entry){
    this.entries.push(entry);
   }
   getTotalIncome(){
    let sumIncome=0;
    this.entries.forEach(entry => {
            if (entry.type === 'income') {
              sumIncome += entry.amount;}
    });
    return sumIncome;
   }
   getTotalExpense(){
    let sumExpense=0;
    this.entries.forEach(entry => {
        if (entry.type === 'expense') {
          sumExpense += entry.amount;}
    });
    return sumExpense;
   }
   getCurrentBalance(){
    let balance;
    balance = (this.getTotalIncome() - this.getTotalExpense());
    return balance;
   }
   getTotal(type){
   }
   getFormattedEntries(){
   }
}



    