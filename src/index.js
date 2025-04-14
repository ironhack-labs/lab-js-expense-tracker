// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
        return this.amount + " €";
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
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description, paid);
        this.paid = paid;
        this.type = "expense";
    }
    getFormattedAmount() {
        return "-" + this.amount + " €";
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }
    addEntry (newEntry) {
        this.entries.push (newEntry);
    }
    getCurrentBalance() {
        let balance = 0;
        for (const entry of this.entries) {
            if (entry.type === "income") {
                balance += entry.amount;
            } else if (entry.type === "expense") {
                balance -= entry.amount; 
            }
        }
        return balance;
        }

    getFormattedEntries() {
        let formattedEntries = [];
        this.entries.forEach(entry => {
            const formattedAmount = entry.getFormattedAmount();
            const formattedEntry = `${entry.date} | ${entry.description} | ${formattedAmount}`;

            formattedEntries.push(formattedEntry);
        });
        return formattedEntries;

    }
    }

