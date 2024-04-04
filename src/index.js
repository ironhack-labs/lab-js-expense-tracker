// Entry
// The first test case says that the Entry "should take 3 arguments: date, amount, and description". This means that the Entry class should have a constructor method that takes 3 arguments:

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

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income"; // why should it be a string?
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";
  }

  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }

  /**addEntry() method
Adds 1 entry (income or expense) to the entries array. Here are the requirements for this method:

should be defined
should receive 1 argument (new entry that can be either an Income or an Expense object)
should add the received entry to the entries array
shouldn't return anything */

  addEntry(entry) {
    this.entries.push(entry);
  }

  /**getCurrentBalance() method
Returns the balance of the budget (total income - total expenses).

should be defined
should receive 0 arguments
should return 0 if there are no entries.
should calculate and return the balance, which is the total income minus the total expenses
 */

  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }

    let totalIncome = 0;
    let totalExpenses = 0;
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "expense") {
        totalExpenses += this.entries[i].amount;
        console.log(totalExpenses, "expense");
      } else {
        totalIncome += this.entries[i].amount;
        console.log(totalIncome, "income");
      }
    }
    return totalIncome - totalExpenses;
  }

  /**
   * Bonus: Iteration 5 | Get Formatted Entries
Implement the getFormattedEntries() method, on the Budget class, that returns an array of strings with the formatted entries. The format of the string should be as follows:

For incomes: "DATE | DESCRIPTION | +AMOUNT €"

For expenses: "DATE | DESCRIPTION | -AMOUNT €"


getFormattedEntries() method
Returns an array of strings with the formatted entries.

should be a defined
should take 0 arguments
should return an array of strings with the formatted entries
should use the forEach() method to iterate over the entries array

   */

  getFormattedEntries() {
    const formattedEntries = [];
    this.entries.forEach((e) => {
      if (e.type === "expense") {
        formattedEntries.push(`${e.date} | ${e.description} | -${e.amount} €`);
      } else {
        formattedEntries.push(`${e.date} | ${e.description} | ${e.amount} €`);
      }
    });
    return formattedEntries;
  }
}

/**
 * LAB | JS Expense Tracker
giphy

Learning Goals
Introduction
We have learned Object-oriented programming and how class and inheritance work in JavaScript. Now, let's put what we have learned into practice.

We all know that keeping track of our incomes and expenses is crucial to staying on top of our budget, but doing it manually can be a tedious task. Well, in this lab, we're going to create a personal expense tracking program to help us with that! Our expense tracking program will help us automate the tedious task of categorizing our transactions into income and expenses, allowing us to take full control of our budget. But there's more! We won't just stop at recording our incomes and expenses. We will also add features that will make it even more useful, such as calculating the total income and expenses and the current balance. 💸

Let's get started!


Requirements
Fork this repo.
Clone this repo.

Submission
Upon completion, run the following commands:
git add .
git commit -m "Solved lab"
git push origin master
Create a Pull Request and submit your assignment

Test Your Code
This LAB is equipped with unit tests to provide automated feedback on your lab progress. In case you want to check the tests, they are in the tests/index.spec.js file.

To run the tests and your JavaScript code, open the SpecRunner.html file using the Live Server VSCode extension.

To see the outputs of the console.log in your JavaScript code, open the Console in the Developer Tools.


Instructions
You will work on the src/index.js file.

Your task is to write the code in the src/index.js file following the below guidelines to make the tests pass. In this file, you will find the following starter code:

Let's have a look at the first test case together to get you started.

The first test case says that the Entry "should take 3 arguments: date, amount, and description". This means that the Entry class should have a constructor method that takes 3 arguments:

// Entry
class Entry {
  constructor(date, amount, description) {}
}   

// Entry
class Entry {}

// Income
class Income {}

// Expense
class Expense {}

// Budget
class Budget {}
Iteration 0: First test
Let's have a look at the first test case together to get you started.

The first test case says that the Entry "should take 3 arguments: date, amount, and description". This means that the Entry class should have a constructor method that takes 3 arguments:

// Entry
class Entry {
  constructor(date, amount, description) {}
}

// Income
class Income {}

// Expense
class Expense {}

// Budget
class Budget {}

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

Iteration 2 | Income
An Income object is an Entry with an additional property type by default set to "income".

Implement the Income class following the below guidelines. The Income class should inherit the properties and methods from Entry, which means that you have to use the extends keyword and the super() inside the constructor.

class
Income should extend Entry.

constructor
should take 3 arguments (date, amount, description).
should take date as 1st argument and assign it to a property date.
should take amount as 2nd argument and assign it to a property amount.
should take description as 3rd argument and assign it to a property description.

should call the super() method and correctly pass the arguments to it.
should create a type property and give it a default value of "income".

Iteration 3 | Expense
This class is almost the same as the Income class, except that it has an additional property paid, and the type property has a default value of "expense".

An Expense is an Entry with an additional property type by default set to "expense". The Expense class instances should have an additional property paid used to keep track of whether the expense has been paid or not.

class
Expense should extend Entry

constructor
should take 4 arguments (date, amount, description, category)
should take date as 1st argument and assign it to a property date.
should take amount as 2nd argument and assign it to a property amount.
should take description as 3rd argument and assign it to a property description.
should take paid as 4th argument and assign it to a property paid.

should call the super() method and correctly pass the arguments to it.
should create a property type and give it a default value of "expense".

getFormattedAmount() method
This method needs to be re-implemented for Expense, because the Expense version is supposed to have a different return. It should return the amount string with a minus (-) sign. The requireme

should be defined
should receive 0 arguments
should return the amount string with a minus sign, the amount, and the € symbol ("-AMOUNT €")

Iteration 4 | Budget
We are almost there! We are going to create a Budget class that will help us store our incomes and expenses and that way keep track of our budget. The Budget class should have the following properties and methods:

Add the following methods to the Budget class:

addEntry()
getCurrentBalance()

constructor
When we first create a Budget, there should be no income or expenses. Therefore, the constructor should receive no arguments. Here is how the constructor should look like:

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

Bonus: Iteration 5 | Get Formatted Entries
Implement the getFormattedEntries() method, on the Budget class, that returns an array of strings with the formatted entries. The format of the string should be as follows:

For incomes: "DATE | DESCRIPTION | +AMOUNT €"

For expenses: "DATE | DESCRIPTION | -AMOUNT €"


getFormattedEntries() method
Returns an array of strings with the formatted entries.

should be a defined
should take 0 arguments
should return an array of strings with the formatted entries
should use the forEach() method to iterate over the entries array

Happy Coding! 💙
 */
