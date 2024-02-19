// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
       
      return `${this.amount} €`

    }
}


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
        super(date, amount, description)
        this.paid = paid;
        this.type = "expense";
    }

    getFormattedAmount() {
        
            return `-${this.amount} €`;
        
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = []
    }

    addEntry(entry) {

         this.entries.push(entry)
    }

    getTotalIncome() {

        let totalIncome = 0
        this.entries.forEach(entry => {   
            if(entry.type === "income" ) {
                totalIncome += entry.amount
            }
        })

        return totalIncome
    }

    getTotalExpense() {
        
        let totalExpense = 0;

        this.entries.forEach(entry => {
            if(entry.type === "expense") {
                totalExpense += entry.amount;
            }
        })
        return totalExpense
    }

    getCurrentBalance() {
        let totalIncome = this.getTotalIncome()
        let totalExpense = this.getTotalExpense()

        let totalBalance = totalIncome - totalExpense;
        return totalBalance
                
    }

    getTotal(type) {

        let totalAmount = 0

        this.entries.forEach(entry => {

            totalAmount += entry.amount
        })

        return totalAmount;

    }

    getFormattedEntries() {

        let arrIncome = [];
        let arrExpense = [];

        this.entries.forEach(entry => {
            if(entry.type === "income") {

                arrIncome.push(this.formatEntry(entry.date, entry.description, entry.amount, "+"));
            }
            else {
                arrExpense.push(this.formatEntry(entry.date, entry.description, entry.amount, "-"));
            }
        })
    }
}



    

