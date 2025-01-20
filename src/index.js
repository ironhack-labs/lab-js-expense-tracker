// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
        console.log(`${this.amount} €`)
    }
   
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
    
    
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
    super(date, amount, description, paid);
    this.type = "expense"; 
    this.paid = paid;
}
    getFormattedAmount() {
        console.log(`-${this.amount} €`)
}
}
// Budget
class Budget {
    constructor() {
    this.entries = [];
    
}
    addEntry(entry) {
        this.entries.push(entry);
    };

    getCurrentBalance() {
        let totalIncome=0;
        let totalExpense=0;
    if (this.entries.length === 0) {
        console.log(0);
    }
   for (let i=0; i<this.entries.length; i++) {
    if (this.entries[i].type === "income") {
        totalIncome += this.entries[i].amount;
    }
    else if (this.entries[i].type === "expense") {
        totalExpense += this.entries[i].amount;
    }
    }
    console.log(totalIncome);
    return totalIncome - totalExpense;
    
   }

   getFormattedEntries() {
    this.entries.forEach(function() {
        return `${entry.date} | ${entry.description} | ${entry.amount}`
    }
)
   }
} 