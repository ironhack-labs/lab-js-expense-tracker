// Entry
class Entry {
    constructor (date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
     getFormattedAmount () {
            return `${this.amount} €`;
}
}
// Income
class Income extends Entry {
    constructor (date, amount, description) {
        super (date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super (date, amount, description);
        this.paid = paid;
        this.type = "expense";
    }
    getFormattedAmount () {
        return `-${this.amount} €`
    }
}

// Budget
class Budget extends Entry {
    constructor () {
        super();
        this.entries = [];
    }
    addEntry (Entry) {
        this.entries.push(Entry);
    } 
    getTotalIncome () {
        let total = 0;

      this.entries.forEach((entry) => {
        if (entry.type === "income") {
            total += entry.amount;
        }
      })
        return total
    }
    getTotalExpense () {
        let total = 0;

      this.entries.forEach((entry) => {
        if (entry.type === "expense") {
            total += entry.amount;
        }
      })
        return total
    }
    getCurrentBalance () {
        let total = 0;
        
        return this.getTotalIncome() - this.getTotalExpense ();
    }
}













