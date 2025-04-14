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
 // test whil building classes 
const testEntry = new Entry("31.10.2024", 120, "insurance")
 console.log(testEntry.date);
 console.log(testEntry.amount);
 console.log(testEntry.description);
 console.log("Entry ==>",testEntry.getFormattedAmount())

 
// Income
//class ChildClass extends ParentClass
class Income extends Entry {
    constructor(date, amount, description) {
      super(date, amount, description); 
      this.type = "income"; 
    }
  }
  //test
const salaryIncome = new Income("31.10.2024", 2000, "Salary");
console.log(salaryIncome.date);           
console.log(salaryIncome.amount);         
console.log(salaryIncome.description);   
console.log(salaryIncome.type); 
console.log("totalIncome ==>", salaryIncome.getFormattedAmount());

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.type = "expense";
    this.paid = paid; 
  }
  getFormattedAmount() {
    return `-${this.amount} €`; 
  }
}
const totalExpenses = new Expense("31.10.2024", 45, "Transport")
console.log(totalExpenses.date);
console.log(totalExpenses.amount);
console.log(totalExpenses.description);
console.log("totalExpenses ==>", totalExpenses.getFormattedAmount());

// Budget
class Budget {
    constructor() {
      this.entries = []; 
    }
  //parameter entry is the value being passed in when the method is called.
    addEntry(entry) {
      this.entries.push(entry);
    }
  getCurrentBalance (){
    if (this.entries.length === 0)return 0; //return 0 if no entries
    //return  total income - total expense of all entries
    let totalIncome = 0; 
    let totalExpense = 0
      // Calculate the total income and total expenses

      this.entries.forEach((entry) => {
        if (entry.type === "income"){
          totalIncome += entry.amount;
        }
      else if (entry.type === "expense"){
        totalExpense += entry.amount
      }
  });
  
      return totalIncome - totalExpense; 
    }
  

    getFormattedEntries() {
      const formattedEntries = [];
      //iterate over each entry and add it to the array formatted.. 
      //Interpolation (${}) is used here to add a +
      //In a ternary operator, the colon separates the two possible values: the result if the condition is true (before the colon) and the result if false
      this.entries.forEach((entry) => {
        let formattedAmount = entry.type === "income" ? `+${entry.getFormattedAmount()}` : entry.getFormattedAmount();
        formattedEntries.push(`${entry.date} | ${entry.description} | ${formattedAmount}`);
      });
  
      return formattedEntries; 
    }
  }

  /*let formattedAmount;
if (entry.type === "income") {
  formattedAmount = `+${entry.getFormattedAmount()}`;
} else {
  formattedAmount = entry.getFormattedAmount();
}*/