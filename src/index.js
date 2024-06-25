// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  getFormattedAmount() {
    const formattedAmount = `${this.amount} €`;
    return formattedAmount;
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    // `super` refers to the constructor of the parent (Animal)
    // with super Income gets all the attributes and methods of the Entry class
    super(date, amount, description);
    this.type = "income"; // <== a new attribute, just for Income
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    // `super` refers to the constructor of the parent (Animal)
    // with super Income gets all the attributes and methods of the Entry class
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense"; // <== a new attribute, just for Income
  }
  getFormattedAmount() {
    const formattedAmount = `-${this.amount} €`;
    return formattedAmount;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }

  addEntry(newEntry) {
    this.entries.push(newEntry);
  }

  getCurrentBalance() {
    this.totalBalance = 0;
    this.totalExpense = 0;
    this.totalIncome = 0;

    if (!this.entries.length) {
      return 0;
    }

    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "expense") {
        this.totalExpense += this.entries[i].amount;
      } else {
        this.totalIncome += this.entries[i].amount;
      }
    }
    /*        for (amount in Expense) {
            totalExpense += this.amount
        }

        for (amount in Income) {
            totalIncome += this.amount
        }
*/
    this.totalBalance = this.totalIncome - this.totalExpense;
    return this.totalBalance;
  }

  getFormattedAmount() {
    const formattedArr = [];

    for (let i = 0; i < this.entries.length; i++) {g
      if (this.entries[i].type === "income") {
        formattedArr.push(
          `${this.entries[i].date} | ${this.entries[i].description} | ${this.entries[i].amount} €`
        );
      } else {
        formattedArr.push(
          `${this.entries[i].date} | ${this.entries[i].description} | -${this.entries[i].amount} €`
        );
      }
    }

    return formattedArr;
  }

  // Bonus
  getFormattedEntries() {
    const formattedArr = [];
    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        formattedArr.push(
          `${entry.date} | ${entry.description} | ${entry.amount} €`
        );
      } else {
        formattedArr.push(
          `${entry.date} | ${entry.description} | -${entry.amount} €`
        );
      }
    });
    return formattedArr;
  }
}

// BONUS
