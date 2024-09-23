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
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, category) {
        super(date, amount, description);
        this.type = "expense";
        this.paid = category;
    }

    getFormattedAmount () {
        return `${-this.amount} €`;
    }
}

// Budget
class Budget {
    constructor() {
        this.entries =[];
    }

    addEntry (entry) {
        this.entries.push(entry);    
    }

    getCurrentBalance() {
        let balance = 0;
        this.entries.forEach((element) => (element.type === "expense") ? balance -= element.amount : balance +=element.amount);
        return balance;
    }

    getFormattedEntries() {
        let formattedStringArray = [];
        this.entries.forEach((element) => formattedStringArray.push(`${element.date} | ${element.description} | ${(element.type === "expense")? -element.amount:element.amount} €`));
        return formattedStringArray;
    }
}


