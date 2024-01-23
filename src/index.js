class Entry {
    constructor(date, amount, description) {
      this.date = date;
      this.amount = amount;
      this.description = description;
    }
  }
  
  class Income extends Entry {
    constructor(date, amount, description) {
      super(date, amount, description);
      this.type = "income";
    }
  
    getFormattedAmount() {
      return `${this.amount} €`;
    }
  }
  
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
  
  class Budget {
    constructor() {
      this.entries = [];
    }
  
    addEntry(entry) {
      this.entries.push(entry);
    }
  
    getTotalIncome() {
      let totalIncome = 0;
      this.entries.forEach((entry) => {
        if (entry instanceof Income) {
          totalIncome += entry.amount;
        }
      });
      return totalIncome;
    }
  
    getTotalExpense() {
      let totalExpense = 0;
      this.entries.forEach((entry) => {
        if (entry instanceof Expense) {
          totalExpense += entry.amount;
        }
      });
      return totalExpense;
    }
  
    getCurrentBalance() {
      return this.getTotalIncome() - this.getTotalExpense();
    }
  }
  
