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
    this.type = "income";
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

  addEntry(newEntry) {
    this.entries.push(newEntry);
  }

  getCurrentBalance() {
    let balance = 0;
    if (this.entries.length === 0) {
      return balance;
    }

    let totalIncome = 0;
    let totalExpenses = 0;

    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "income") {
        totalIncome += this.entries[i].amount;
      } else if (this.entries[i].type === "expense") {
        totalExpenses += this.entries[i].amount;
      }
    }

    let finalBalance = totalIncome - totalExpenses;
    return finalBalance;
  }

  // Bonus iteration with normal For loop

  //   getFormattedEntries() {
  //     let formattedEntries = [];
  //     let date;
  //     let description;
  //     let amount;

  //     for (let i = 0; i < this.entries.length; i++) {
  //       date = this.entries[i].date;
  //       description = this.entries[i].description;
  //       amount = this.entries[i].amount;

  //       if (this.entries[i].type === "income") {
  //         formattedEntries.push(`${date} | ${description} | ${amount} €`);
  //       } else if (this.entries[i].type === "expense") {
  //         formattedEntries.push(`${date} | ${description} | -${amount} €`);
  //       }
  //     }

  //     return formattedEntries;
  //   }

//With ForEach loop

  getFormattedEntries() {
    let formattedEntries = [];
    let date;
    let description;
    let amount;

    this.entries.forEach(function (entry) {
      date = entry.date;
      description = entry.description;
      amount = entry.amount;
      if (entry.type === "income") {
        formattedEntries.push(`${date} | ${description} | ${amount} €`);
      } else if (entry.type === "expense") {
        formattedEntries.push(`${date} | ${description} | -${amount} €`);
      }
    });
    return formattedEntries;
  }
}
