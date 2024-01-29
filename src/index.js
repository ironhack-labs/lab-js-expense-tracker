// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;

    }

        //metodo
        getFormattedAmount() {
            return `${this.amount} €`
        }
}



// Income
class Income extends Entry {

    constructor(date, amount, description) {
        super(date, amount, description);
        this.income = income;
    }

    

}

// Expense
class Expense extends Entry {

    constructor (date, amount, description, paid) {
        super(date, amount, description);
        this.paid = paid;

    }
    getFormattedAmount() {
        return `- ${this.amount} €`
    }

}

// Budget
class Budget {

    constructor () {
        this.entries = [];
    }


    addEntry(income) {
        this.entries.push(income);
    }
    
    getTotalIncome() {}
    getTotalExpense() {

    }
    getCurrentBalance() {}






}
