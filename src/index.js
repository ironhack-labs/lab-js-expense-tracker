// Entry
class Entry {
    constructor (date, amount, description) {
        this.date = date
        this.amount = amount
        this.description = description
    }
    
    getFormattedAmount() {
        return `${this.amount} €`;
    }    
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super (date, amount, description);
        this.type = "income"
    }
  }
  

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
      super(date); // Pass date to the parent class constructor
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
  
    addEntry(entry) {
      this.entries.push(entry);
    }
  
    getCurrentBalance() {
      if (this.entries.length === 0) return 0;
  
      let income = 0;
      let expense = 0;
  
      for (const entry of this.entries) {
        if (entry.type === 'income') {
          income += entry.amount;
        } else if (entry.type === 'expense') {
          expense += entry.amount;
        }
      }
  
      return income - expense;
    }
  
    getFormattedEntries() {
      return this.entries.map(entry => {
        const sign = entry.type === 'income' ? '+' : '-';
        return `${sign}$${entry.amount} ${entry.description}`;
      });
    }}
  
  