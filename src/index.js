// Entry
class Entry {
    constructor(date, amount,description){
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
  constructor(date, amount,description){
    super(date,amount,description);
        
      this.type = "income";

}
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description, paid);

        this.type = "expense";
        this.paid = true;

         /* getFormattedAmount(){
            return "-" + this.amount +"€" ;

          } */
            
        }
    }


// Budget
class Budget {
    constructor(){
        this.entries = [];
    }

    addEntry(income){
        this.entries.push(income);

    }
/*
    getTotalIncome(){
        this.sum = 0;
        this.entries.forEach(element){
          this.sum += element;
     }
        return this.sum;
    }

    getTotalExpense(){

    }

    getCurrentBalance(){
        if(this.entries.length === 0){
            return 0;
        }

        else{

            return this.sum - 
        }

    }

*/

}
