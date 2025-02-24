// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount () {
        return `${this.amount} €`;
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {

        super(date, amount, description);
       
        //adding a new property `type`
        this.type = "income";
    }
}  

// Expense
class Expense extends Entry {
    constructor(date, amount, description, category) {

        super(date, amount, description);
       
        this.paid = true;
        this.type = "expense";
    }

    getFormattedAmount () {
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry(entry) {
        this.entries.push(entry);
    }
    getCurrentBalance() {
        //if no entries (= this.entries.length === 0) 
        if (this.entries.length === 0) {
            return 0;
        }
        let totalIncome = 0;
        let totalExpense = 0;
        // loop through all entries
         for (let i =0; i <this.entries.length; i++) {
            // if the entry is an income, add the amount to totalIncome
            if (this.entries[i].type === "income") {
                totalIncome += this.entries[i].amount;
                // if the entry is an expense, add the amount to totalExpense
            } else if (this.entries[i].type === "expense") {
                totalExpense += this.entries[i].amount;
            }
         }

        return totalIncome - totalExpense;
    };

    getFormattedEntries () {
        this.entries.forEach(element => {
            
        });
    };
};
