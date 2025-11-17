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
const money1 = new Entry("2025-02-01", 100, "Ingreso mensual");

money1.getFormattedAmount();

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
        this.type = "expense";
        this.paid = paid;
    }
}
const expense1 = new Expense("2025-02-01", -99, "Gasto", true);
console.log(expense1.getFormattedAmount());
console.log(expense1.type);
                


// Budget
class Budget {
    constructor () {
        this.entries = [];
        addEntry(entry) 
    this.entries.push(entry);
        }
    
    getCurrentBalance() {
    let balance = 0;
    this.entries.forEach(entry => {
      if (entry.type === "income") {
        balance += entry.amount;
      } else if (entry.type === "expense") {
        balance -= entry.amount;
      }
    });
    return balance;
  }}