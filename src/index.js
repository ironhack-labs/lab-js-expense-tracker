// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }


  getFormattedAmount(){
    return `${this.amount} €`;
  }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description)
        this.date = date;
        this.amount = amount;
        this.description = description;
        this.type = "income";

    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description, paid)
        this.date = date;
        this.amount = amount;
        this.description = description;
        this.paid = paid;
        this.type = "expense";
    }

    getFormattedAmount(){
    return `-${this.amount} €`;
  }
}

// Budget
class Budget  {
   constructor(){
    this.entries = [];
   }

   addEntry (entry){
     this.entries.push(entry)
   }


//    should return 0 if there are no entries.
// should calculate and return the balance, which is the total income minus the total expenses

   getCurrentBalance(){
     if(this.entries.length === 0)
        return 0;
     
      let balance = 0;

    //   for (let i = 0; i < this.entries.length; i++){
    //     const entry = this.entries[i];

    //     if (entry.type === "income"){
    //         balance += entry.amount;
    //      } else if (entry.type === "expense"){
    //         balance -= entry.amount;
    //      }
    // }


    this.entries.forEach((entry) =>{
      if(entry.type === "income"){
        balance += entry.amount;
      }else if (entry.type === "expense"){
        balance -= entry.amount;
      }
    })
   
   return balance;
}
}