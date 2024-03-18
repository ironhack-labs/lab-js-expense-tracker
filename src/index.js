// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return`${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor (date, amount, description){
        super(date, amount, description)
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description)
        this.type ="expense";
        this.paid = paid;
    } 

    getFormattedAmount(){
        return`-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor (){
        this.entries = [];
    }
    getCurrentBalance(){
        let balance = 0; 
        for (const entry of this.entries) {
            // Check the type of each entry to determine if you should add or subtract the amount
            if (entry.type === "income") {
                balance += entry.amount; // Add income
            } else if (entry.type === "expense") {
                balance -= entry.amount; // Subtract expenses
            }
        }
        return balance; 
    }


    addEntry(entry){
        if (entry.type === "income" || entry.type === "expense") {
            this.entries.push(entry);
        }
    }

    getFormattedEntries(){
        const formattedEntries = [];
        this.entries.forEach(entry => {
            
            if (entry.type === "income") {
                formattedEntries.push(`${entry.date} | ${entry.description} | ${entry.amount} €`); 
            } else if (entry.type === "expense") {
                formattedEntries.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
            }

            });
        return formattedEntries;
}
}
