// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date; 
        this.amount = amount;
        this.description = description;
    }


getFormattedAmount() {
return Math.round(this.amount)+ " €";
}
}

class Income extends Entry {
    constructor(date, amount, description) {
        super (date, amount, description);
        this.type = "income"
    };
}

class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.type = "expense";
        this.paid = paid;
    }
    getFormattedAmount() {
        return "-" + Math.round(this.amount)+ " €";

    }
}
class Budget {
    constructor() {
        this.entries = [];
    }
addEntry(newEntry) {
    this.entries.push(newEntry);
}

getCurrentBalance() {
    if(this.entries.length === 0) {
        return 0;
    }
    let totalIncome = 0;
    let totalExpense = 0;
    this.entries.forEach(entry => {
        if(entry instanceof Income) {
            totalIncome += entry.amount;
        } else if (entry instanceof Expense) {
            totalExpense += entry.amount;
        }
    });
return totalIncome - totalExpense;
}



getFormattedEntries() {
    const formattedEntries = [];

    this.entries.forEach(entry => {
        let sign = entry instanceof Income ? '+' : '-';
        formattedEntries.push(`${entry.date} | ${entry.description} | ${sign}${entry.amount.toFixed(2)} €`);
    });

    return formattedEntries;
}
}