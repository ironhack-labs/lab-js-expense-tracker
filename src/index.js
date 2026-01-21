/*

Iteration 1 | Entry
Implement the Entry class so that it has the following properties and methods:

constructor
should take 3 arguments (date, amount, description).
should take the date property as 1st argument and assign it to a property date.
should take the amount property as 2nd argument and assign it to a property amount.
should take the description property as 3rd argument and assign it to a property description.

getFormattedAmount() method
should be defined
should receive 0 arguments
should return the amount string with the amount and the € symbol (format: "AMOUNT €")

*/


class Entry {
  
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
   
  getFormattedAmount(){
    return `${this.amount} €`  //If the constructor saved it, the method must read it with this.
    
  }
}

const testObject = new Entry("1.10.2025", 150, 'expense 1')
console.log(testObject)

console.log(testObject.getFormattedAmount)


/*

Iteration 2 | Income
An Income object is an Entry with an additional property type by default set to "income".
Implement the Income class following the below guidelines. The Income class should inherit the properties and methods from Entry, which means that you have to use the extends keyword and the super() inside the constructor.

class
Income should extend Entry.

Income
class
should extend Entry class
constructor
should take 3 arguments (date, amount, description)
should take 'date' as 1st argument and pass it to the parent class
should take 'amount' as 2nd argument and set it to the 'amount' property
should take 'description' as 3rd argument and set it to the 'description' property
should create a 'type' property with the initial value "income"

*/


// Income
class Income extends Entry {

  constructor(date, amount, description){  //This line 'links' to the parent 
    super(date, amount, description);
    this.type = "income";   //Once linked and inside the parent then add new custom property
  }

}

/*
Iteration 3 | Expense
This class is almost the same as the Income class, except that it has an additional property paid, and the type property has a default value of "expense".

An Expense is an Entry with an additional property type by default set to "expense". The Expense class instances should have an additional property paid used to keep track of whether the expense has been paid or not.

class
Expense should extend Entry

should extend Entry class
constructor
should take 4 arguments (date, amount, description, paid)
should take 'date' as 1st argument and pass it to the parent class
should take 'amount' as 2nd argument and set it to the 'amount' property
should take 'description' as 3rd argument and set it to the 'description' property
should take 'paid' (boolean) as 4th argument and set it to the 'paid' property
should create a 'type' property with the initial value "expense"

*/

class Expense extends Entry {

  constructor(date, amount, description, paid){  //This line 'links' to the parent + customer child arguments
    super(date, amount, description); // These are the parents arguments
    this.type = "expense";   //Once linked and inside the parent then add new custom property
    this.paid = paid; // Custom child property
  }
  getFormattedAmount(){
    return `-${this.amount} €`  //If the constructor saved it, the method must read it with this.
  };
}
/*

Iteration 4 | Budget
We are going to create a Budget class that will help us store our incomes and expenses and that way keep track of our budget. 
The Budget class should have the following properties and methods:

addEntry()
getCurrentBalance()

constructor
When we first create a Budget, there should be no income or expenses. Therefore, the constructor should receive no arguments. 
Here is how the constructor should look like:

should receive 0 arguments
should create an entries property and assign it an empty array as the initial value

addEntry() method
Adds 1 entry (income or expense) to the entries array. Here are the requirements for this method:

should be defined
should receive 1 argument (new entry that can be either an Income or an Expense object)
should add the received entry to the entries array
shouldn't return anything

getCurrentBalance() method
Returns the balance of the budget (total income - total expenses).

should be defined
should receive 0 arguments
should return 0 if there are no entries.
should calculate and return the balance, which is the total income minus the total expenses

addEntry
should be defined
should take 1 argument (entry)
should add the entry argument to the 'entries' array

getCurrentBalance() method
Returns the balance of the budget (total income - total expenses).

should be defined
should receive 0 arguments
should return 0 if there are no entries.
should calculate and return the balance, which is the total income minus the total expenses

*/



class Budget {
  constructor (){
    this.entries = [];
  }

  addEntry(entry){ 
    this.entries.push(entry); 
  }

  getCurrentBalance(){
    if (this.entries.length === 0){
      return 0;
    } else {
      let balance = 0;
      for (let i = 0; i<this.entries.length;i++){
        if (this.entries[i].type === "income"){
          balance += this.entries[i].amount; 
        } else {
          balance -= this.entries[i].amount; 
        }
      }
      return balance;
    }
  }

  getFormattedEntries (){

    let result = []; // the forEach method does not need 'return'

    this.entries.forEach(entry => {
      
      if (entry.type === "income") {
        result.push(`${entry.date} | ${entry.description} | ${entry.amount} €`);
      } else {
        result.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
      }
    });

    return result;
  }


}

/*

Same as the above for loop but cleaner

getCurrentBalance() {
  let balance = 0;

  this.entries.forEach(entry => {
    if (entry.type === "income") {
      balance += entry.amount;
    } else {
      balance -= entry.amount;
    }
  });

  return balance;
}


=== Second option ===

getCurrentBalance() {
  return this.entries.reduce((balance, entry) => {
    if (entry.type === "income") {
      return balance + entry.amount;
    } else {
      return balance - entry.amount;
    }
  }, 0);
}


=== Advanced option ===

getCurrentBalance() {
  return this.entries.reduce(
    (b, e) => e.type === "income" ? b + e.amount : b - e.amount,
    0
  );
}

*/