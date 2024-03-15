// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
    this.type = "expense";
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
    super(date, amount, description, paid);
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
  addEntry(newEntry) {
    this.entries.push(newEntry);
  }
  getTotalIncome() {
    let totalIncome = 0;

    this.entries.forEach((entry) => {
      if (entry instanceof Income) {
        totalIncome += entry.amount;
      }
    });
    return totalIncome;
  }
  getTotalExpense() {
    let totalExpense = 0;

    this.entries.forEach((entry) => {
      if (entry instanceof Expense) {
        totalExpense += entry.amount;
      }
    });
    return totalExpense;
  }

  getCurrentBalance() {
    let totalIncome = this.getTotalIncome();
    let totalExpense = this.getTotalExpense();

    let currentBalance = totalIncome - totalExpense;

    return currentBalance;
  }
  getFormattedEntries() {
    formattedEntries = 0;
    this.entries.forEach((entry) => {
      this.date.toUpperCase;
      this.description.toUpperCase;
    });
    return `${date} | ${description} | +${totalIncome} €`;
    return `${date} | ${description} | -${totalExpense} €`;
  }
}
//   getCurrentBalance() {
//     let currentBalance = 0;

//     this.entries.forEach((entry) => {
//       if (entry == 0) {
//         currentBalance = 0;
//       } else if ((entry instanceof Expense){
//         currentBalance = totalIncome - totalExpense
//       });
//     });
//   }
//   return currentBalance;
// }
