// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
        return `${this.amount} €`;
    };
}

// Income
// Concept: Inheritance
class Income extends Entry{
    constructor (date, amount, description) {
        
        // Call the parent class constructor
        super(date, amount, description);

         // Add a new property, assign it a default value of "income"
        this.type = 'income';   
    }



}

// Expense
// Concept: Inheritance
class Expense extends Entry{
    constructor (date, amount, description, paid) {

        // Call the parent class constructor, order of passing arguments is important
        super(date, amount, description)

        // assign 4th argument to the property paid 
        this.paid = paid; 

        // Add a new property 'type' with an intial value "expense"
        this.type = 'expense'; 
    }

    //  re-implement getFormattedAmount method for Expense (Concept: polymorphism)
    getFormattedAmount() {
        return `-${this.amount} €`;

    }



}

// Budget

class Budget {

    // in Budget there should be no income or expenses. Therefore, the constructor should receive no arguments.
    constructor() {
        this.entries = [];

    }

 // add new entry that can be either an Income or an Expense object to entries array
    addEntry(newEntry) {
        this.entries.push(newEntry);

    }

// returns the balance of the budget (total income - total expenses
    getCurrentBalance() {
        if (this.entries.length ===0) {
            return 0;
        }

        let totalIncome =0;
        let totalExpense = 0;

        this.entries.forEach(function(entry){
            if (entry.type === "income") {
                totalIncome += entry.amount;
            }
            
            else if (entry.type === "expense") {
                totalExpense += entry.amount;
            }        

        });

        return totalIncome - totalExpense;



    }

    // Bonus 
    getFormattedEntries () {
        let formatedEntries = [];

        this.entries.forEach(function(entry) {
            const formatedString = `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
            formatedEntries.push(formatedString);


        });


        return formatedEntries;


    }
}

