// Entry
class Entry {
    constructor(date, amount, description) {
      this.date = date;
      this.amount = amount;
      this.description = description;
    }
    
    getFormattedAmount() {
      return `THIS AMOUNT ${this.amount} €`;
    }
  } 
  
  // Income
  class Income extends Entry {
    constructor(date, amount, description, type = 'income') {
      super(date, amount, description);
      this.type = type; 
    }
  }
  
  // Expense
  class Expense extends Entry {
    constructor(date, amount, description, paid, type = 'expense') {
      super(date, amount, description);
      this.paid = paid;
      this.type = type; 
    }  
    
    getFormattedAmount() {
      return `THIS AMOUNT ${-this.amount} €`;
    }
  }
  
  // Budget 
  class Budget {
    constructor(entries = []) {
      this.entries = entries; 
    }
    
    addEntry(entry) {
      this.entries.push(entry); 
    }
    
    getCurrentBalance() {
      return this.entries.reduce((balance, entry) => balance + entry.amount, 0);
    }
    
    getFormattedEntries(formattedEntries = []) {
        this.formattedEntries = formattedEntries;
    
        this.entries.forEach(entry => {
          this.formattedEntries.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`);
        });
    
        return this.formattedEntries;
      }
  }