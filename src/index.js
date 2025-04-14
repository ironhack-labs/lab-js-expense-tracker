// Entry
class Entry {
    constructor(date, amount, description) {
      this.date = date;
      this.amount = amount;
      this.description = description;
    }
  
    // Method to format the amount with the € symbol
    getFormattedAmount() {
      return `${this.amount} €`;
    }
  }
  
  // Income (inherits from Entry)
  class Income extends Entry {
    constructor(date, amount, description) {
      // Pass the arguments to the Entry class using super()
      super(date, amount, description);
      // Set the type property to "income"
      this.type = "income";
    }
  }
  
  // Expense (inherits from Entry)
  class Expense extends Entry {
    constructor(date, amount, description, paid) {
      // Pass the common arguments to the Entry class using super()
      super(date, amount, description);
      // Set the type property to "expense"
      this.type = "expense";
      // Add the new paid property
      this.paid = paid;
    }
  
    // Override the getFormattedAmount() method for Expense
    getFormattedAmount() {
      return `-${this.amount} €`;
    }
  }
  
  // Budget class
  class Budget {
    constructor() {
      // Initialize an empty array to store entries
      this.entries = [];
    }
  
    // Method to add a new entry (Income or Expense) to the entries array
    addEntry(entry) {
      this.entries.push(entry);
    }
  
    // Method to calculate and return the current balance
    getCurrentBalance() {
      // If there are no entries, return 0
      if (this.entries.length === 0) {
        return 0;
      }
  
      // Calculate the balance: total income - total expenses
      let balance = 0;
  
      this.entries.forEach((entry) => {
        if (entry.type === 'income') {
          balance += entry.amount;  // Add income
        } else if (entry.type === 'expense') {
          balance -= entry.amount;  // Subtract expense
        }
      });
  
      return balance;
    }
  
    // Method to get formatted entries as an array of strings
    getFormattedEntries() {
      const formattedEntries = [];
  
      this.entries.forEach((entry) => {
        if (entry.type === 'income') {
          // Format for income: "DATE | DESCRIPTION | +AMOUNT €"
          formattedEntries.push(`${entry.date} | ${entry.description} | +${entry.amount} €`);
        } else if (entry.type === 'expense') {
          // Format for expense: "DATE | DESCRIPTION | -AMOUNT €"
          formattedEntries.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
        }
      });
  
      return formattedEntries;
    }
  }
  
  
