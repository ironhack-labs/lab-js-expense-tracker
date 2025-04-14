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
  constructor(date, amount, description, type = "income") {
    super(date, amount, description);
    this.type = type;
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid, type = "expense") {
    super(date, amount, description);
    this.type = type;
    this.paid = paid;
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
  addEntry(entry) {
    this.entries.push(entry);
  }
  getCurrentBalance() {
    if (this.entries.length === 0) return 0;
    let totalIncome = 0;
    let totalExpense = 0;
    // for (let i = 0; i < this.entries.length; i++) {
    //   if (this.entries[i].type == "income") {
    //     totalIncome += this.entries[i].amount;
    //   } else if (this.entries[i].type == "expense") {
    //     totalExpense += this.entries[i].amount;
    //   }
    // }

    this.entries.forEach((element) => {
      if (element["type"] === "income") {
        totalIncome += element["amount"];
      } else if (element["type"] === "expense") {
        totalExpense += element["amount"];
      }
    });

    return totalIncome - totalExpense;
  }

  //Iteration 6
  getFormattedEntries() {
    let entriesArray = [];
    this.entries.forEach((entry) => {
      entriesArray.push(
        `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
      );
    });
    console.log(entriesArray);
    return entriesArray;
  }
}
