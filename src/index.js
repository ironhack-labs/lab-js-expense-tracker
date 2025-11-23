// Entry


class Entry {
    
constructor(date, amount, description){
    this.date = date;
    this.amount= amount;
    this.description= description;
}
getFormattedAmount(){
    return  `${this.amount} €`;
}

}


// Income


class Income  extends Entry{
    constructor( date, amount ,description){
        super(date, amount ,description);
        this.type = "income";

    }
    

}

// Expense



class Expense  extends Entry{
    constructor( date, amount ,description,paid){
        super(date, amount ,description);
        this.paid = paid;
        this.type = "expense";

    }
    getFormattedAmount() {
     return  `-${this.amount} €`;
    }
}

// Budget
// getCurrentBalance() method

// Returns the balance of the budget (total income - total expenses).

// should be defined
// should receive 0 arguments
// should return 0 if there are no entries.
// should calculate and return the balance, which is the total income minus the total expenses



class Budget {
    constructor(){
        this.entries=[ ];
    }



   addEntry(newentry) {
    this.entries.push(newentry);
   
   }



   getCurrentBalance(){
    if(this.entries == 0){
        return 0;
    }
    let balance = 0;
    if(this.entries.type==="income"){
        balance+=this.entries.amount;
    }
    else if (this.entries.type==="expense"){
        
        balance-=this.entries.amount;
    }
    return balance;
        
    }

// For incomes:  "DATE | DESCRIPTION | AMOUNT €"

// For expenses: "DATE | DESCRIPTION | -AMOUNT €"



   
 getFormattedEntries() {
    if(entry.type == income){
        let sign = ' ' ;
        return `${this.date}`| `${this.description}`| `${this.amount}`
    }
    let sign = '-' ;
    if(entry .type == expense){
        return `${this.date}`| `${this.description}`| '${sign}' `${this.amount}`
    }
    


 }



}

// Bonus: Iteration 5 | Get Formatted Entries

// Implement the getFormattedEntries() method, on the Budget class, that returns an array of strings with the formatted entries.
//  The format of the string should be as follows:

// For incomes:  "DATE | DESCRIPTION | AMOUNT €"

// For expenses: "DATE | DESCRIPTION | -AMOUNT €"

// Note: pay special attention to the format (white spaces etc.). Also, notice that, for expenses, there's a minus sign.


// getFormattedEntries() method

// Returns an array of strings with the formatted entries.

// should be a defined
// should take 0 arguments
// should return an array of strings with the formatted entries
// should use the forEach() method to iterate over the entries array
