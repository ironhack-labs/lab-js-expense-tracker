// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
        console.log('Formatting the amount..')
        return `${this.amount} €`;
    }
}

const e1 = new Entry(2024, 100, 'expense');
console.log(e1.getFormattedAmount()); // Output: "100 €"
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
        super(date, amount, description);
        this.type = "expense";
        this.paid = paid;
    }
    getFormattedAmount() {
        console.log('Formatting the amount..')
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
        if (this.entries.length === 0) {
            return 0
        }
        let totalExpense = 0;
        let totalIncome = 0;
        this.entries.forEach(function (element) {
            if (element.type === "income") {
                totalIncome += element.amount
            } else if (element.type === "expense") {
                totalExpense += element.amount
            }
        })
        return totalIncome - totalExpense

    }
    getFormattedEntries() {
        let formattedEntries = [];
        this.entries.forEach(entry => {
            if (entry.type === "income") {
                formattedEntries.push(`${entry.date} | ${entry.description} | ${entry.amount} €`);
            } else if (entry.type === "expense") {
                formattedEntries.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
            }
        });

        console.log("........ ");
        console.log(formattedEntries);
        console.log("........ ");
        return formattedEntries
    }
}

