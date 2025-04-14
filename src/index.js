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
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }   
}
// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
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
    addEntry(entry){
        this.entries.push(entry);
    }
    getCurrentBalance(){
        return this.entries.reduce((acc, entry) => {
            if(entry.type === "income"){
                return acc + entry.amount;
            } else {
                return acc - entry.amount;
            }
        }, 0);

}
getFormattedEntries() {
    return this.entries.map(entry => {
        return `${entry.date}: ${entry.description} - ${entry.getFormattedAmount()}`;
    });
}
}

const budget = new Budget();
budget.addEntry(new Income("2024-10-21", 1000, "Salary"));
budget.addEntry(new Expense("2024-10-22", 200, "Groceries", true));

console.log(budget.getCurrentBalance()); // Output: 800
console.log(budget.getFormattedEntries()); 