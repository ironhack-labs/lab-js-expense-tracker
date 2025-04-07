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
    constructor (date, amount, description){
        super (date, amount, description); 
        this.type = "income";           
    }
}
const salary = new Income("2025-04-07", 100, "Monthly salary");
console.log(salary.getFormattedAmount());
// Expense
class Expense extends Entry {
    constructor (date, amount, description, category){
        super (date, amount, description);
        this.paid = "expense"
    }
    getFormattedAmount(){
        return `-${this.amount} €`;
    }
}
const paid = new Expense("2025-04-01", 99, "April rent", "Housing");
console.log(paid.getFormattedAmount()); 

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
      } else {
        let totalIncome = 0;
        let totalExpense = 0;
  
        for (let i = 0; i < this.entries.length; i++) {
          if (this.entries[i].type === "income") {
            totalIncome += this.entries[i].amount;
          } else {
            totalExpense += this.entries[i].amount;
          }
        }
  
        return totalIncome - totalExpense;
      }
    }
  }
