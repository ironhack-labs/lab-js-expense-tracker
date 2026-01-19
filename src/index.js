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
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.type = "expense";
    this.paid = paid;
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
        let totalExpense = 0;
        this.entries.forEach(entry => {
            if (entry.type === "income") {
                totalIncome += entry.amount;
            } else {
                totalExpense += entry.amount;
            }
        });
        return totalIncome - totalExpense;
    }

    getFormattedEntries() {
        const formattedEntries = [];
        this.entries.forEach(entry => {
            if (entry.type === "income") {
                formattedEntries.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount}`);
            } else {
                formattedEntries.push(`${entry.date} | ${entry.description}  |  ${entry.getFormattedAmount} `);
            }
        });
        return formattedEntries;
        
    }

}
