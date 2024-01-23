// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
        return (`${this.amount} €`);
    }
}

// Income
class Income extends Entry {

    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.type = "expense";
        this.date = date;
        this.amount = amount;
        this.description = description;
        this.paid = paid;
    }
    getFormattedAmount() {
        return (`-${this.amount} €`)
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
    getTotalIncome() {
        let sum = 0;
        this.entries.forEach((entry) => {
            console.log(entry);
            if (entry.type === "income")
                sum += entry.amount;
            else
                sum = sum;
        })
        return sum;
    }
    getTotalExpense() {
        let sum = 0;
        this.entries.forEach((entry) => {
            console.log(entry);
            if (entry.type === "expense")
                sum += entry.amount;
            else
                sum = sum;
        })
        return sum;
    }
    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        }
        else {
            let balance = this.getTotalIncome() - this.getTotalExpense();
            return balance;
        }
    }

    getTotal(type) {
        let total = 0;
        this.entries.forEach((entry) => {
            if (entry.type === type) {
                total += entry.amount;
            }
            else {
                total = total;
            }
        })
        console.log(total);
        return total;
    }

    getFormattedEntries() {
        let array = [];
        this.entries.forEach((entry) => {
            if (entry.type === "income") {
                array.push(`${entry.date} | ${entry.description} | +${entry.amount}€`)
            }
            else {
                array.push(`${entry.date} | ${entry.description} | -${entry.amount}€`)
            }
        })
        console.log(array);
        return array;
    }
}
