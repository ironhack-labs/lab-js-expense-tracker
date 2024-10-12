// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattesAmount() {
        return `${this.amount} €`;
    }
}

// Income
class Income {
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
    
      addEntry(entry) {
        this.entries.push(entry);
      }
    
      getCurrentBalance() {
        if (this.entries.length === 0) return 0;
        return this.entries.reduce((balance, entry) => {
          return entry instanceof Income ? balance + entry.amount : balance - entry.amount;
        }, 0);
      }
    
      getFormattedEntries() {
        return this.entries.map(entry => {
            const sign = entry instanceof Income ? "" : "-";
            return `${entry.date} | ${entry.description} | ${sign}${entry.amount} €`;
          });
      }
}
