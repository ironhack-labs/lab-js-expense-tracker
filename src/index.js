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

const entry1 = new Entry(30, 500, "Pay Bill");

console.log(entry1.getFormattedAmount());

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
}
}

const incomeNew = new Income(60, 300, "Pay Bill")

console.log(incomeNew);



// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense";
    }

    getFormattedAmount(){
        return `-${this.amount} €`;
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
    getCurrentBalance(){
        if (this.entries.length === 0) {
            return 0;
        }
        let totalIncome = 0;
        let totalExpenses = 0;

        this.entries.forEach(entry => {
            if (entry.type === "income") {
                totalIncome += entry.amount;
            } else if (entry.type === "expense") {
                totalExpenses += entry.amount;
            }
        });

        // Calculate balance (total income - total expenses)
        return totalIncome - totalExpenses;
 
    
    }
    getFormattedEntries(){
        const formattedEntries = [];  
    }
}