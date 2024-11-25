// Entry
let expenseTracker = {
  date: "May",
  amount: 200,
  description: "Hobby",
};
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
let myEntry = new Entry("June", 150, "Travel");
console.log(myEntry.date);

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description), (this.type = "income");
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description), (this.paid = paid);
    this.type = "expense";
  }
  getFormattedAmount() {
    return `${-this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }
  addEntry(OnlyOne) {
    this.entries.push(OnlyOne)
  }
    
    getCurrentBalance(){
        if (this.entries.length === 0){
            return 0;
        }
        const totalIncome = this.entries
        .filter((entry) => entry.type === 'income')
        .reduce((sum, entry) => sum + entry.amount, 0)

        const totalExpense = this.entries
        .filter((entry) => entry.type === "expense") 
        .reduce((sum, entry) => sum + entry.amount, 0);
        return totalIncome - totalExpense;
    }   
}


