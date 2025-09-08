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

// class Budget {
//   constructor() {
//     this.entries = [];
//   }

//   addEntry(Entry) {
//     this.entries.push(Entry);
//   }
//   getCurrentBalance() {
//     if (this.entries.length === 0) {
//       return 0;
//     } else {
//       let incomeTotal = 0;
//       let expensesTotal = 0;

//       for (let entry of this.entries) {
//         if (entry.type === "income") {
//           incomeTotal += entry.amount;
//         } else if (entry.type === "expense") {
//           expensesTotal += entry.amount;
//         }
//       }
//       return incomeTotal - expensesTotal;
//     }
//   }
// }

// Bonus

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
    } else {
      let incomeTotal = 0;
      let expensesTotal = 0;

      for (let entry of this.entries) {
        if (entry.type === "income") {
          incomeTotal += entry.amount;
        } else if (entry.type === "expense") {
          expensesTotal += entry.amount;
        }
      }
      return incomeTotal - expensesTotal;
    }
  }

  getFormattedEntries() {
    let allEntriesCollated = [];

    this.entries.forEach((entry) => {
      let formattedEntry = `${entry.date} | ${
        entry.description
      } | ${entry.getFormattedAmount()}`;
      allEntriesCollated.push(formattedEntry);
    });

    return allEntriesCollated;
  }
}
