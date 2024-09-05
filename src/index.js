// Entry
class Entry {
    constructor(date, amount, description) {
  this.date = date;
  this.amount = amount;
  this.description= description;
    }

  getFormattedAmount() {
 return `${this.amount} €`
    } 
}
  // Income
  class Income extends Entry{
    constructor(date, amount, description) {
        super(date, amount, description);
        
        this.type = "income";
    }
    getFormattedAmount() {
        return `+${this.amount} €`;
    }
  }
  
  // Expense
  class Expense extends Entry{
    constructor(date, amount, description,paid) {
    super(date, amount, description);
    this.type = "expense";
    this.paid = paid;
}
getFormattedAmount() {
    return `-${this.amount} €`
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
        return 0;
      }
  
      let balance = 0;
      this.entries.forEach(entry => {
        if (entry.type === "income") {
          balance += entry.amount;
        } else if (entry.type === "expense") {
          balance -= entry.amount;
        }
      });
      return balance;
    }
    getFormattedEntries() {



        const formattedEntries = [];
        this.entries.forEach(entry => {
          let formattedAmount = entry.type === "income" ? `+${entry.amount} €` : `-${entry.amount} €`;
          formattedEntries.push(`${entry.date} | ${entry.description} | ${formattedAmount}`);
        });
        return formattedEntries;
    }
  }