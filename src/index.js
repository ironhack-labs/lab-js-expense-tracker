// Entry
class Entry {
    constructor (date, amount, description){
        this.date = date
        this.amount = amount
        this.description = description
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    // Call the parent class constructor with the provided arguments
    super(date, amount, description);
    // Set the type property to "income"
    this.type = "income";
  }
}

// Example usage:
const income = new Income('2025-01-20', 500, 'Salary');
console.log(income.date);        // Output: '2025-01-20'
console.log(income.amount);      // Output: 500
console.log(income.description); // Output: 'Salary'
console.log(income.type);        // Output: 'income'
console.log(income.getFormattedAmount()); // Output: '500 €'


// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    // Call the parent class constructor with the first three arguments
    super(date, amount, description);
    // Set the additional properties
    this.paid = paid; // Assign the paid argument to the paid property
    this.type = "expense"; // Set the type property to "expense"
  }

  // Override the getFormattedAmount method
  getFormattedAmount() {
    return `-${this.amount} €`; // Add a minus sign to the formatted amount
  }
}

// Example usage:
const expense = new Expense('2025-01-20', 200, 'Groceries', true);
console.log(expense.date);        // Output: '2025-01-20'
console.log(expense.amount);      // Output: 200
console.log(expense.description); // Output: 'Groceries'
console.log(expense.paid);        // Output: true
console.log(expense.type);        // Output: 'expense'
console.log(expense.getFormattedAmount()); // Output: '-200 €'





// Budget
class Budget {
  constructor() {
    // Initialize the entries array as an empty array
    this.entries = [];
  }

  // Method to add a new entry (income or expense) to the entries array
  addEntry(entry) {
    this.entries.push(entry); // Add the received entry to the entries array
  }

  // Method to calculate the current balance
  getCurrentBalance() {
    return this.entries.reduce((balance, entry) => {
      // Add income amounts and subtract expense amounts
      if (entry.type === "income") {
        return balance + entry.amount;
      } else if (entry.type === "expense") {
        return balance - entry.amount;
      }
      return balance;
    }, 0); // Start with an initial balance of 0
  }
}

// Example usage:
// Create a new budget
const myBudget = new Budget();

// Add some incomes and expenses
const income1 = new Income('2025-01-15', 1000, 'Salary');
const expense1 = new Expense('2025-01-17', 200, 'Groceries', true);
const expense2 = new Expense('2025-01-18', 50, 'Transport', false);

myBudget.addEntry(income1);
myBudget.addEntry(expense1);
myBudget.addEntry(expense2);

// Check the current balance
console.log(myBudget.getCurrentBalance()); // Output: 750

