//LAB from 03.04 Week 02, day 03
//https://my.ironhack.com/cohorts/64f9d69f3689ad002ac79d79/lms/courses/course-v1:IRONHACK+WDFT+202403_BER/modules/ironhack-course-chapter_3/units/ironhack-course-chapter_3-sequential-vertical_6

//forked repository: https://github.com/camialbuq/lab-js-expense-tracker

// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  //getFormattedAmount method should be defined
  getFormattedAmount() {
    return `${this.amount} €`;
  }
}

// Income
class Income extends Entry {
  //extends from parent Entry
  constructor(date, amount, description) {
    super(date, amount, description); //inherits the 3 properties
  }
  //should create a 'type' property with the initial value "income"
  type = "income";
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description); //inherits the 3 properties
    //should take 'paid' (boolean) as 4th argument and set it to the 'paid' property
    this.paid = paid;
  }
  type = "expense";
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = []; //initializing empty array "entries"
  }
  addEntry(entry) {
    //this addEntry method should add the new entry to the entries array
    this.entries.push(entry);
  }

  getCurrentBalance() {
    if (this.entries.length === 0) return 0; //one liner if else statement work without curly brackets
    let totalExpenses = 0;
    let totalIncome = 0;
    this.entries.forEach((entry) => {
      //for each entry in the entries array that we already pushed when we addEntry() method
      if (entry.type === "expense") {
        totalExpenses += entry.amount;
      }
      if (entry.type === "income") {
        totalIncome += entry.amount;
      }
    });
    return totalIncome - totalExpenses;
  }
  //bonus iteration
  getFormattedEntries() {
    //should return an array of strings with the formatted entries
    this.entries.forEach((entry) => {
      return `${entry.date} | ${
        entry.description
      } | ${entry.getFormattedAmount()}`;
    });
  }
}

/*


//THIS IS HOW ADRIAN DID IT CREATING NEW METHODS
/* 
  //create a method to get total income
  //loop through entries and see if they are type === income
  getTotalIncome() {
    let incomeTotal = 0;
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "income") {
        incomeTotal += this.entries[i].amount;
      }
    }
    return incomeTotal;
  }



  //create a method to get total expenses
  //loop through entries and see if they are type === expense
  
  getTotalExpenses() {
    let expenseTotal = 0;
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "expense") {
        expenseTotal += this.entries[i].amount;
      }
    }
    return expenseTotal;
  }

  //now finally calculte the balance of total income - total expenses
  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    } else {
      return this.getTotalIncome() - this.getTotalExpenses();
    }
  }
  */

/*

//*** tests  */
/*
// Create an instance of Budget
const budget = new Budget();

// Create few income and expense entries for the budget
const income1 = new Income("2024-06-17", 10, "other");
const income2 = new Income("2024-06-17", 3456, "salary");
const expense1 = new Expense("2024-06-17", 100, "food", true);
const expense2 = new Expense("2024-06-17", 99, "food", true);

// Add the entries to the budget
budget.addEntry(income1);
budget.addEntry(income2);
budget.addEntry(expense1);
budget.addEntry(expense2);

// Call the getFormattedEntries method
//const formattedEntries = budget.getFormattedEntries();
*/
