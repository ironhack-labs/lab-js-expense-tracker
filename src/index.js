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
    this.type = "expense";
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
    let sumAmount = 0;
    let expensesAmount = 0;

    if (this.entries.length === 0) return 0;

    for (let i = 0; i < this.entries.length; i++) {
      let entry = this.entries[i];
      if (entry.type === "income") {
        sumAmount += entry.amount;
      }
      if (entry.type === "expense") {
        expensesAmount += entry.amount;
      }
    }
    return sumAmount - expensesAmount;
  }
  getFormattedEntries() {
    const formatedEntriesArray = [];
    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        formatedEntriesArray.push(
          `${entry.date} | ${
            entry.description
          } | +${entry.getFormattedAmount()}`
        );
      }
      if (entry.type === "expense") {
        formatedEntriesArray.push(
          `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
        );
      }
    });
    return formatedEntriesArray;
  }
}

// Second solution.
// getFormattedEntries() {
//     const formatedEntriesArray = [];

//     for (let i = 0; i < this.entries.length; i++) {
//       let entry = this.entries[i];
//       if (entry.type === "income") {
//         formatedEntriesArray.push(
//           `${entry.date} | ${entry.description} | +${entry.amount} €`
//         );
//       }
//       if (entry.type === "expense") {
//         formatedEntriesArray.push(
//           `${entry.date} | ${entry.description} | -${entry.amount} €`
//         );
//       }
//     }

//     return formatedEntriesArray;
//   }
