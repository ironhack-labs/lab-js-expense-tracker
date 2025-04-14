// Entry
//Iteration 0: First test
//Iteration 1: Entry:
class Entry {
    constructor (date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return `${this.amount} €`;
    }
}

// Income
//Iteration 2: Income
class Income extends Entry {
    constructor (date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
//Iteration 3: Expense
class Expense extends Entry{
    constructor (date, amount, description, paid) {
        super(date, amount, description);
        this.type = "expense";
        this.paid = paid;
    }

    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

// Budget
//Iteration 4: Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry(newEntry) {
        this.entries.push(newEntry);
    }

    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        }
        let totalIncomes = 0;
        let totalExpenses = 0;
        this.entries.forEach((entry) => entry instanceof Income ? totalIncomes+= entry.amount : totalExpenses+= entry.amount);
        return totalIncomes - totalExpenses;
    }

    //Bonus - Iteration 5: Get formatted Entries
    getFormattedEntries() {
        const newArray = [];
        this.entries.forEach((entry) => 
            newArray.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`)
        )
        return newArray;
    }
}



