// Entry
class Entry {
    constructor(date, amount, description) {
        // Assign constructor arguments to instance properties
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    // Method to get the formatted amount
    getFormattedAmount() {
        return `${this.amount} €`;
  }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
      // Call the parent class constructor with super
      super(date, amount, description);
      // Set the type property to "income"
      this.type = "income";
    }
  }

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
      // Call the parent class constructor with super to set date, amount, and description
      super(date, amount, description);
      // Set the type property to "expense"
      this.type = "expense";
      // Set the paid property
      this.paid = paid;
    }
  
    // Override the getFormattedAmount method to include a minus sign
    getFormattedAmount() {
      return `-${this.amount} €`;
    }
  }

// Budget
class Budget {
    constructor() {
        // Initialize entries as an empty array
        this.entries = [];
    }

    // addEntry method
    addEntry(entry) {
        // Add the entry (Income or Expense) to the entries array
        this.entries.push(entry);
    }

    // getCurrentBalance method
    getCurrentBalance() {
        // If there are no entries, return 0
        if (this.entries.length === 0) {
            return 0;
    }

    // Calculate the balance by summing income and subtracting expenses
    let totalIncome = 0;
    let totalExpenses = 0;

    this.entries.forEach(entry => {
        if (entry.type === "income") {
            totalIncome += entry.amount;
        } else if (entry.type === "expense") {
            totalExpenses += entry.amount;
        }
    });

    // Return the balance: total income - total expenses
    return totalIncome - totalExpenses;
  }

  // Bonus: Iteration 5 | Get Formatted Entries
  // Get all entries formatted as strings
  getFormattedEntries() {
    const formattedEntries = [];

    this.entries.forEach(entry => {
        let formattedEntry;

        // Format income
        if (entry.type === "income") {
            formattedEntry = `${entry.date} | ${entry.description} | +${entry.amount} €`;
        } 
        // Format expense
        else if (entry.type === "expense") {
            formattedEntry = `${entry.date} | ${entry.description} | -${entry.amount} €`;
        }

        // Push the formatted entry to the result array
        formattedEntries.push(formattedEntry);
    });

    return formattedEntries;
  }
}



