// JS Expense Tracker - Implementation Guide

// -------------------------------------------------------
// Step 1: Create the Entry base class
// -------------------------------------------------------
// The Entry class needs:
// - A constructor taking date, amount, and description parameters
// - Store these parameters as properties
// - A getFormattedAmount() method that returns the amount with the € symbol

class Entry {
    constructor(date, amount, description) {
      this.date = date;
      this.amount = amount;
      this.description = description;
    }
  
    getFormattedAmount() {
      // TODO: Return amount with € symbol (format: "AMOUNT €")
      return `${this.amount} €`
    }
  }
  
  // -------------------------------------------------------
  // Step 2: Create the Income class (extends Entry)
  // -------------------------------------------------------
  // Income needs to:
  // - Extend the Entry class
  // - Take the same 3 parameters as Entry
  // - Call the parent constructor using super()
  // - Add a type property with value "income"
  
  class Income extends Entry {
    constructor(date, amount, description) {
      // TODO: Call parent constructor
      super(date, amount, description)
      // TODO: Add type property
      // extends "Entry with type income"
      this.type = "income";
    }
    
    // Note: Income uses the same getFormattedAmount() as Entry
    // No need to override it
  }
  
  // -------------------------------------------------------
  // Step 3: Create the Expense class (extends Entry)
  // -------------------------------------------------------
  // Expense needs to:
  // - Extend the Entry class
  // - Take 4 parameters: date, amount, description, paid
  // - Call the parent constructor
  // - Store the paid parameter as a property
  // - Add a type property with value "expense"
  // - Override getFormattedAmount() to add a minus sign
  
  class Expense extends Entry {
    constructor(date, amount, description) {
      // TODO: Call parent constructor
      super(date, amount, description)
      // TODO: Assign paid parameter to property
      this.paid = this.paid;
      // TODO: Add type property
    }
    
    // Override the getFormattedAmount method
    getFormattedAmount() {
      // TODO: Return amount with minus sign and € symbol (format: "-AMOUNT €")
      return `-${this.amount} €`
    }
  }
  
  // -------------------------------------------------------
  // Step 4: Create the Budget class to manage entries
  // -------------------------------------------------------
  // The Budget class needs:
  // - A constructor that initializes an empty entries array
  // - An addEntry method to add entries to the array
  // - A getCurrentBalance method that calculates total income minus total expenses
  
  class Budget {
    constructor() {
        // Initialize an empty array to store all entries
        this.entries = [];
      }
    addEntry() {
      // TODO: Add the entry to the entries array
      entries.push(this.entry)
    }
    
    getCurrentBalance() {
      // TODO: Calculate and return balance (total income - total expenses)
      // Return 0 if there are no entries
        let revenue;
        if (entries.length == 0) {
            return 0;
        } 
        else {
            for(i = 0; i < this.entries.length; i++){
                if(this.entries[i].type == 'income')
                    revenue += this.entries.amount;
                }
                if(this.entries[i].type == 'expense'){
                    revenue -= this.entries.amount;
                }
        }
        return revenue;

    }
    
    // -------------------------------------------------------
    // Step 5 (Bonus): Format entries for display
    // -------------------------------------------------------
    // Create a getFormattedEntries method that:
    // - Returns an array of formatted strings for each entry
    // - Uses forEach to iterate through entries
    // - Format: "DATE | DESCRIPTION | AMOUNT €" (with - for expenses)
    
    getFormattedEntries() {
        const formattedEntries = [];
        
        this.entries.forEach(entry => {
          // Format string: "DATE | DESCRIPTION | AMOUNT €" 
          // (getFormattedAmount already includes the € symbol and minus sign if needed)
          const formattedString = `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
          formattedEntries.push(formattedString);
        });
        
        return formattedEntries;
      }
    }