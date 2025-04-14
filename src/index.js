// Entry
class Entry {
    constructor(date, amount, description) {
      this.date = date;         // Assign the first argument to a property 'date'
      this.amount = amount;     // Assign the second argument to a property 'amount'
      this.description = description; // Assign the third argument to a property 'description'
    }
    getFormattedAmount() {
        return `${this.amount} €`; // Return a string combining 'amount' and '€' symbol in the required format
      }
  }
// Income
class Income extends Entry {
    constructor(date, amount, description) {
      // Call the constructor of the parent class (Entry) using super()
      super(date, amount, description);
      
      // Add the 'type' property and set it to "income"
      this.type = "income";
    }
  }
// Expense
class Expense extends Entry {
    constructor(date, amount, description,paid) {
        // Call the constructor of the parent class (Entry) using super()
        super(date, amount, description);
        this.paid = paid; // Add the 'paid' property and set it to "paid"
        this.type = "expense";// Add the 'type' property and set it to "income"
      }
      getFormattedAmount(){
        return `-${this.amount} €`; // Return a string combining 'amount' and '€' symbol in the required format
      }

}
// Budget
// Budget
class Budget {
    constructor() {
      // Initialize an empty array to store income and expense entries
      this.entries = [];
    }
  
    // Method to add an entry (either Income or Expense) to the budget
    addEntry(entry) {
      this.entries.push(entry);
    }
  
    // Method to calculate the current balance (total income - total expenses)
    getCurrentBalance() {
      if (this.entries.length === 0) return 0;
  
      let totalIncome = 0;
      let totalExpenses = 0;
  
      this.entries.forEach(entry => {
        if (entry instanceof Income) {
          totalIncome += entry.amount;
        } else if (entry instanceof Expense) {
          totalExpenses += entry.amount;
        }
      });
  
      return totalIncome - totalExpenses;
    }
  
    // Method to return an array of formatted strings for each entry
    getFormattedEntries() {
      const formattedEntries = [];
  
      // Use forEach to iterate over the entries array and format each entry
      this.entries.forEach(entry => {
        // Format each entry according to its type (Income or Expense)
        const formattedEntry = `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
        formattedEntries.push(formattedEntry);
      });
  
      // Return the array of formatted strings
      return formattedEntries;
    }
  }
  
  