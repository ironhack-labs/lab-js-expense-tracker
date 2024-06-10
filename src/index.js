// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
        return `${this.amount} €`;
    }
    }



// Income
class Income extends Entry {
constructor(date, amount, description){
    super(date, amount, description)
    this.type = "income";
}
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid){
        super(date, amount, description)
        this.type = "expense";
        this.paid = paid;
    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }

}

// Budget
class Budget {

    constructor (){
        this.entries = [];
    }

    addEntry(entry){
        this.entries.push(entry);
    }
    getCurrentBalance(){

        let totalIncome = 0;
        let totalExpenses = 0;

    this.entries.forEach(entry => {
      if (entry.type === "income") {
        totalIncome += entry.amount;
      } else if (entry.type === "expense") {
        totalExpenses += entry.amount;
      }
    });

    return totalIncome - totalExpenses;
        }

        getFormattedEntries(){

let formattedEntries = [];

           

            this.entries.forEach(function(entry){
                const formatedString = `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
                formattedEntries.push(formatedString);
            })
            return formattedEntries;
        }
    }






/*/ 
Bonus: Iteration 5 | Get Formatted Entries
Implement the getFormattedEntries() method, on the Budget class, that returns an array of strings with the formatted entries. The format of the string should be as follows:

For incomes: "DATE | DESCRIPTION | +AMOUNT €"

For expenses: "DATE | DESCRIPTION | -AMOUNT €"


getFormattedEntries() method
Returns an array of strings with the formatted entries.

should be a defined
should take 0 arguments
should return an array of strings with the formatted entries
should use the forEach() method to iterate over the entries array


 /*/