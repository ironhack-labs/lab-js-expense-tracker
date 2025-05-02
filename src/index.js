// Entry Class Parent
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  // Add a method to the class
  getFormattedAmount() {
    return `${this.amount} €`; //syring template to add €
  }
}

// Income class daughter
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description); // Method to pass to class Parent
    this.type = "income"; // Adding new property to class Income.
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.type = "expense";
    this.paid = paid; //Data type should be boolean
  }
  getFormattedAmount() {
    return `-${this.amount} €`; //syring template to add - sign and €
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }

  addEntry(entry) {
    this.entries.push(entry); // add entry argument to entries []
  }

  getCurrentBalance() {
    if (this.entries.length === 0) return 0;

    // Diferrence = Income - expenses

  }

  getFormattedEntries(){

    const formated =[];

    this.entries.forEach(entry =>{
      const str = `${entry.date} | ${entry.description} | ${entry.amount}`
    });

    return formated;



  }
};
