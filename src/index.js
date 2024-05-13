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
class Income extends Entry{
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
        }
}

// Expense
class Expense extends Income {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense";
    }
    getFormattedAmount() {
        return `-${this.amount} €`;
    };
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    };
    addEntry(entry) {
        this.entries.push(entry);
    }
    getCurrentBalance() {
        let balance = 0 ;
        let totalIncome = 0;
        let totalExpenses = 0;
        if (this.entries.length === 0)
            return 0;
        this.entries.forEach(oneEntry => {
           if (oneEntry.type === "income")
            totalIncome += oneEntry.amount;
           if (oneEntry.type === "expense")
             totalExpenses += oneEntry.amount;
        })          
        return totalIncome - totalExpenses;
    
    };
    getFormattedEntries() {
        let arrayString = [];
        let elementString = "";
        this.entries.forEach(oneEntry=> {
            if (oneEntry.type === "income")
                 elementString = `${oneEntry.date} | ${oneEntry.description} | +${oneEntry.amount} €`
            if (oneEntry.type === "expense")
                elementString = `${oneEntry.date} | ${oneEntry.description} | -${oneEntry.amount} €`
            arrayString.push(elementString);
        });
        // console.log(arrayString)
        return arrayString;
    }
}

