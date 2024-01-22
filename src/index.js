// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount(){
        return `${this.amount} €`;
    }

}

// Income
class Income extends Entry{
    constructor (date, amount, description){
        super(date, amount, description );
        this.type = "income";
    }
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid){
        super (date, amount, description, );
        this.paid = paid;
        this.type = "expense";
    }
    getFormattedAmount(){
        return "-" + `${this.amount}`+ " " + "€" ;
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }
    addEntry(entry){
        this.entries.push(entry);
    }
    getTotalIncome(){
let totalEntries = 0;
        this.entries.forEach((entry) => {
            if (entry.type === "income"){
                totalEntries += entry.amount;
            }
        } )
        return totalEntries;
    }
    
    getTotalExpense(){
        let totalExpense = 0;
        this.entries.forEach((entry) => {
            if (entry.type === "expense"){
                totalExpense += entry.amount;
            }
        } )
        return totalExpense;

    }

    getCurrentBalance (){
       
        return this.getTotalIncome(Entry) - this.getTotalExpense(Entry);
    }

}





/* 



Iteration 4 | Budget
We are almost there! We are going to create a Budget class that will help us store our incomes and expenses and that way keep track of our budget. The Budget class should have the following properties and methods:

Add the following 4 methods to the Budget class:

addEntry()
getTotalIncome()
getTotalExpense()
getCurrentBalance()

constructor
When we first create a Budget, there should be no income or expenses. Therefore, the constructor should receive no arguments. Here is how the constructor should look like:

should receive 0 arguments
should create an entries property and assign it an empty array as the initial value

addEntry() method
Adds 1 entry (income or expense) to the entries array. Here are the requirements for this method:

should be defined
should receive 1 argument (new entry that can be either an Income or an Expense object)
should add the received entry to the entries array
shouldn't return anything

getTotalIncome() method
Returns the total amount (number) of all incomes (entries with type of "income").

should be a defined
should take 0 arguments
should return the sum (number) of all incomes
should use the forEach() method to iterate over the entries array

getTotalExpense() method
Returns the total amount (number) of all expenses (entries with type of "expense").

should be a defined
should take 0 arguments
should return the sum (number) of all expenses
should use the forEach() method to iterate over the entries array

getCurrentBalance() method
Returns the balance of the budget (total income - total expenses).

should be defined
should receive 0 arguments
should return 0 if there are no entries.
should calculate and return the balance, which is the total income minus the total expenses
 */