/*
### Iteration 0: First test

Let's have a look at the first test case together to get you started.

The first test case says that the `Entry` **"should take 3 arguments: `date`, `amount`**, and **`description`"**. This means that the `Entry` class should have a `constructor` method that takes 3 arguments:
*/

/*
### Iteration 1 | Entry

Implement the `Entry` class so that it has the following properties and methods:



#### constructor

- should take **3 arguments** (date, amount, description).
- should take the **`date` property** as **1st argument** and assign it to a property `date`.
- should take the **`amount` property** as **2nd argument** and assign it to a property `amount`.
- should take the **`description` property** as **3rd argument** and assign it to a property `description`.

<br>



#### `getFormattedAmount()` method

- should be defined
- should receive **0 arguments**
- should return the amount string with the **amount** and the **€** symbol (format: `"AMOUNT €"`)

<br>
*/



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



/*
### Iteration 2 | Income

An `Income` object is an `Entry` with an additional property **`type`** by default set to **`"income"`**.

Implement the `Income` class following the below guidelines. The `Income` class should inherit the properties and methods from `Entry`,
 which means that you have to use the **`extends`** keyword and the **`super()`** inside the constructor. 
*/

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.date = date;
        this.amount = amount;
        this.description = description;
        this.type = "income";
    }

    getFormattedAmount() {
        return `${this.amount} €`;
    }
}



/*
### Iteration 3 | Expense

This class is almost the same as the `Income` class, except that it has an additional property `paid`, 
and the **`type`** property has a default value of **`"expense"`**.

An `Expense` is an `Entry` with an additional property `type` by default set to `"expense"`. 
The `Expense` class instances **should have an additional property `paid`** used to keep track of whether the expense has been paid or not.

#### class

- `Expense` should **extend** `Entry`

<br>

#### constructor

- should take **4 arguments** (date, amount, description, category)
- should take **`date`** as **1st argument** and assign it to a **property `date`**.
- should take **`amount`** as **2nd argument** and assign it to a **property `amount`**.
- should take **`description`** as **3rd argument** and assign it to a **property `description`**.
- should take **`paid`** as **4th argument** and assign it to a **property `paid`**.
<br>

- should call the **`super()`** method and correctly pass the arguments to it.
- should create a **property `type`** and give it a default value of `"expense"`.

<br>

#### `getFormattedAmount()` method

This method needs to be **re-implemented** for `Expense`, because the `Expense` version is supposed to have a different return. 
It should **return the amount string with a *minus* (`-`) sign**. The requireme

- should be defined
- should receive **0 arguments**
- should return the amount string with a **minus sign**, the **amount**, and the **€** symbol (`"-AMOUNT €"`)

<br>

*/
// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.date = date;
        this.amount = amount;
        this.description = description;
        this.type = "income";
        this.type = "expense";
        this.paid = paid;
    }

    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}



/*
### Iteration 4 | Budget

We are almost there! We are going to create a `Budget` class that will help us store our incomes and expenses and that way keep track of our budget. 
The `Budget` class should have the following properties and methods:

Add the following methods to the `Budget` class:

- `addEntry()`
- `getCurrentBalance()`

<br>

#### constructor

When we first create a `Budget`, there should be no income or expenses.
Therefore, the `constructor` should **receive no arguments**. Here is how the `constructor` should look like:

- should receive **0 arguments**
- should create an **`entries` property** and assign it an **empty array** as the initial value

<br>

#### `addEntry()` method

Adds 1 entry (income or expense) to the `entries` array. Here are the requirements for this method:

- should be defined
- should receive **1 argument** (**new entry** that can be either an `Income` or an `Expense` object)
- should add the received entry to the `entries` array
- **shouldn't return** anything

<br>

#### `getCurrentBalance()` method

Returns the balance of the budget (total income - total expenses).

- should be defined
- should receive **0 arguments**
- should return 0 if there are no entries.
- should calculate and return the balance, which is the **total income** minus the **total expenses**

<br>
*/



// Budget

class Budget {
    constructor() {
        this.entries = [];
    }

addEntry(Entry) {
    this.entries.push(Entry);
}
    
getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }
    let totalIncome = 0;
    let totalExpenses = 0;
    for (const entry of this.entries) {
      if (entry.type === "income") {
        totalIncome += entry.amount;
      } else if (entry.type === "expense") {
        totalExpenses += entry.amount;
      }
    }
    const balance = totalIncome - totalExpenses;
    return balance;
    }
}