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

// const newEntry = new Entry(1, 100, "des");
// newEntry.getFormattedAmount();

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        //super(date, amount, description);

        super();
        this.date = date;
        this.amount = amount;
        this.description = description;
        this.type = "income";

    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super();
        this.date = date;
        this.amount = amount;
        this.description = description;
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
        this.entries = [];
    }
    addEntry(newEntry) {
        this.entries.push(newEntry);
    }
    getCurrentBalance() {

        let totalIncome = 0;
        let totalExpenses = 0;

        if (this.entries.length === 0) {
            return 0
        }
        this.entries.forEach(function (newEntry) {
            if (newEntry.type === "income") {
                totalIncome += newEntry.amount;
            } else if (newEntry.type === "expense") {
                totalExpenses += newEntry.amount;
            }
        })
        return totalIncome - totalExpenses;
    }
    getFormattedEntries() {
        let formattedEntries = [];

        this.entries.forEach(function (newEntry) {
            if (newEntry.type === "income") {
                formattedEntries.push(`${newEntry.date} | ${newEntry.description} | ${newEntry.amount} €`);
            } else if (newEntry.type === "expense") {
                formattedEntries.push(`${newEntry.date} | ${newEntry.description} | ${newEntry.amount} €`);
            }
        })
        return formattedEntries;
    }

}
