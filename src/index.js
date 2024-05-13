// Entry
class Entry {
    constructor (date, amount, description) {
        this.date = date
        this.amount = amount
        this.description = description
    }

    getFormattedAmount() {
        return `${this.amount} €`

    }
}

// Income
class Income extends Entry{
    constructor (date, amount, description){
        super (date, amount, description)
        this.type = "income";
    }
}

// Expense
class Expense extends Entry{
    constructor (date, amount, description, paid){
        super (date, amount, description)        
        this.paid = paid;
        this.type = "expense";
    }
    getFormattedAmount() {
        return `-${this.amount} €`

    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [ ];
    }

    addEntry(entry){
        this.entries.push(entry);
    }

    getCurrentBalance(){

        if(this.entries.length===0){
            return 0;
        }

        let totalIncome = 0;
        let totalExpense = 0;
        
        this.entries.forEach(entry => {
            if(entry.type==="income"){
                totalIncome += entry.amount;
            }else if(entry.type==="expense"){
                totalExpense += entry.amount;
            }                       
        });
        //console.log(totalIncome-totalExpense)
        return totalIncome-totalExpense;

    }

    getFormattedEntries() {

        let finalFormattedEntries = [ ];

        this.entries.forEach(entry => {
            let dataString = `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
           finalFormattedEntries.push(dataString);         
                              
        });
        return finalFormattedEntries;
    }

}

/*Outra tentativa que não estava a funcionar:
getFormattedEntries() {
    let finalFormattedEntries = [ ];

    this.entries.forEach(entry => {
        if(entry.type==="income"){
            finalFormattedEntries.push(`${entry.date} | ${entry.description} | + ${entry.amount} €`)
        } else if (entry.type==="expense"){
            finalFormattedEntries.push(`${entry.date} | ${entry.description} | - ${entry.amount} €`)
        }                     
    });

    return finalFormattedEntries;
}*/

/*Bonus: Iteration 5 | Get Formatted Entries
Implement the getFormattedEntries() method, on the Budget class, that returns an array of strings with the formatted entries. The format of the string should be as follows:

For incomes: "DATE | DESCRIPTION | +AMOUNT €"

For expenses: "DATE | DESCRIPTION | -AMOUNT €"


getFormattedEntries() method
Returns an array of strings with the formatted entries.

should be a defined
should take 0 arguments
should return an array of strings with the formatted entries
should use the forEach() method to iterate over the entries array*/
