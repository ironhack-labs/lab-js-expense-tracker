// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date; //property of class Entry
        this.amount = amount; //property of class Entry
        this.description = description;//property of class Entry

    }
    getFormattedAmount() {

        return `${this.amount} €`;
    }
}

const myEntry = new Entry('2024', 89999, 'some description');


// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description)
        this.type = "income";
    }

}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.paid = paid; // take as 4th argument and set it to paid property 
        this.type = "expense" //create a type property with the initial value expense. should be a string not a reference to the class itself? 

    }
    getFormattedAmount() {
        return `-${this.amount} €`;
    }

}

// Budget
class Budget {

    constructor() {

        this.entries = []; //let is not accessible outside a constructor. To make it a property of the class use this
        this.totalIncome = 0;
        this.totalExpenses = 0;
    }

    addEntry(entry) {

        this.entries.push(entry); //should add the entry argument to the entries array 

    }

    // should return 0 if there are no entries
    // should return the total income of all "income" entries
    // should use the 'forEach()' method to iterate over the entries array

    getTotalIncome() {
        this.totalIncome = 0;


        if (this.entries.length === 0) {   // should return 0 if there are no entries 
            return this.totalIncome;
        }

        //this.entries is the empty array in Budget. should return the total income of all "income" entries
        this.entries.forEach((entry) => {
            if (entry.type === 'income') {
                this.totalIncome = this.totalIncome + entry.amount;
            }
        });

        return this.totalIncome;
    }


    getTotalExpense() {
        this.totalExpense = 0;

        if (this.entries.length === 0) { //should return 0 if there are no entries 
            return this.totalExpense;
        }

        this.entries.forEach((entry) => {
            if (entry.type === 'expense') {
                this.totalExpense = this.totalExpense + entry.amount;
            }

        });

        return this.totalExpense; 
    }


    //     getCurrentBalance() {
    //         if (this.entries.length === 0) {
    //             return 0;
    //         }
    //         return this.totalIncome - this.totalExpense;
    //     }
    // }





//     const expense1 = new Expense('2024', 900, 'expense 1 desc', false)
//     const expense2 = new Expense('2023', 800, 'expense 2 desc', true)
//     const income1 = new Income('2024', 1000, 'income 1 desc')
//     const income2 = new Income('2022', 1200, 'income 2 desc')

//     const budget = new Budget();

// budget.addEntry(expense1)
// budget.addEntry(expense2)
// budget.addEntry(income1)
// budget.addEntry(income2)

}