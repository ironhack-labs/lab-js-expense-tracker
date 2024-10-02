// Entry
class Entry {
    constructor (date, amount, description){

        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount(){
        return  `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
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
    constructor(){
        this.entries = [];
    }

    addEntry(newEntry){
        this.entries.push(newEntry);
    }

    getCurrentBalance(){
        if (this.entries.length === 0){
            return 0;
        }

        const balance = this.entries.reduce(function (finalBalance, currentEntry) {
          if (currentEntry.type === "income") {
            finalBalance += currentEntry.amount;
          } else if (currentEntry.type === "expense") {
            finalBalance -= currentEntry.amount;
          } else {
            return "Not a valid type."
          }
          return finalBalance;
        }, 0);
        
        console.log(balance);
        return balance;
    }
}

const budget = new Budget();
const income1 = new Income("today", 10, "Cafe");
const income2 = new Income("today", 5, "Cookie");
const expense1 = new Expense("today", 20, "Water bill", true);
const expense2 = new Expense("today", 100, "Electric bill", true);
budget.addEntry(income1);
budget.addEntry(income2);
budget.addEntry(expense1);
budget.addEntry(expense2);
budget.getCurrentBalance();