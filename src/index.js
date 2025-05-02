// Entry
class Entry {
    constructor(date, amount, description){ //arguments
     this.date = date;  //this.date is a property and date the value of the property
     this.amount = amount;
     this.description = description;
    }
getFormattedAmount(){ //it's a method to return a string that displays the amount followed by €
    return `${this.amount} €`; //return the amount stored  later in the variable
    }
}
const testEntry = new Entry("2025-05-01", 100, "Test description");// creates a new objct from the entry class and assign it to the variable testEntry
//new Entry - calls the constructor of the Entry class and creates a new Entry object with the provided values
console.log(testEntry.getFormattedAmount());//Calls the method getFormattedAmount() on the testEntry object
//  (which is an instance of the Entry class). and print the value to the conssole

// Income
class Income extends Entry { 
    constructor(date, amount, description) {
      super(date, amount, description); // Call the parent class constructor
      this.type = "income"; // Add the type property
    }
  }
  
  const salary = new Income("2025-05-01", 3000, "Monthly salary");
  console.log(salary);
 
    
// Expense
class Expense extends Entry { // indicates that expenses comes from entry 
    constructor(date, amount, description, paid) {
      super(date, amount, description); // indicate the parent arguments 
      this.paid = paid; // adding a new property for Expense
      this.type = "expense";            
    }
  
    getFormattedAmount() {
      return `-${this.amount} €`;       
    }
  }

const rent = new Expense("2025-05-01", 1200, "Monthly rent", true); // it creates a neww object from the expenses and assings it to a variable 
console.log(rent.getFormattedAmount()); 
console.log(rent); // 
// Budget
class Budget {}
