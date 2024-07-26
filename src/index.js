// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;        
    }

getFormattedAmount() {
    return `$("this.amount") €`;
}
}

let myEntry = new Entry("25-07-2024", 100, "New Item");

console.log(myEntry.getFormattedAmount());


// Income

class Income extends Entry {
    constructor(date, amount, description) {

        super(date);
        this.amount = amount;
        this.description = description;
        this.type = "income";
        }

    }
        

// Expense
class Expense extends Entry {

        constructor(date, amount, description, paid) {

            super(date);
            this.amount = amount;
            this.description = description;
            this.paid = paid;
            this.type = "expense";    
        }
    
    getFormattedAmount() {
        return `-$("this.amount") €`;
    }
    }

const myExpense = new Expense("25-07-2024", 100, "New item", true);


// Budget
class Budget {

}

    