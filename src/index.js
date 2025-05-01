// Entry
class Entry {
    constructor (date, amount, description) {
      this.date = date;
      this.amount = amount;
      this.description = description;
    }
    
    getFormattedAmount() {
      return `${this.amount} €`;
    }
  }

  
// Income
class Income extends Entry{
    constructor(date, amount, description){
        super(date, amount, description);
        this.type = "income";
    }
}

const income1 = new Income("tuesday", 10, "details");


// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
      super(date, amount, description);
      this.type = "expense";
      this.paid = paid;
    }
    
    getFormattedAmount() {
      return `-${this.amount} €`
    }
  }
  
  const expense1 = new Expense("monday", 20, "xxxx", true);
  


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
      
      for(let i = 0; i < this.entries.length; i++) {
        let entry = this.entries[i];
        
        if(entry.type === "income") {
          balance += entry.amount;
        } else {
          balance -= entry.amount;
        }
      }
      return balance;
    }
    
    getFormattedEntries() {

        let entries = [];
        for(let i = 0; i < this.entries.length; i++) {
            let entry = this.entries[i];
            let formatted;
            
            if(entry.type === "income") {
                formatted =  `${entry.date} | ${entry.description} | ${entry.amount} €`;
            } else {
                formatted = `${entry.date} | ${entry.description} | -${entry.amount} €`;
            }

            entries.push(formatted);
        }
        return entries;
    }
  }
  

  const income2 = new Income("monday", 90, "descriptionproduct");
  
  
  
  const expense2 = new Expense("monday", 20, "detailsproduct", false);
  
  const budget = new Budget();
  
  budget.addEntry(income1);
  
  budget.addEntry(income2);
  
  budget.addEntry(expense1);
  budget.addEntry(expense2);
  
  
  budget.getFormattedEntries();
  