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
  type = "income";
  constructor(date, amount, description) {
    super(date, amount, description);
  }
}

// Expense
class Expense extends Entry {
  type = "expense";
  constructor(date, amount, description, paid) {
    super(date, amount, description);
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

    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "income") {
        totalIncome += this.entries[i].amount;
      }
      if (this.entries[i].type === "expense") {
        totalExpense += this.entries[i].amount;
      }
    }

    return totalIncome - totalExpense;
  }

  getFormattedEntries() {
    const resultArray = [];
    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        resultArray.push(
          `${entry.date} | ${
            entry.description
          } | ${entry.getFormattedAmount()}`
        );
      } else if (entry.type === "expense") {
        resultArray.push(
          `${entry.date} | ${
            entry.description
          } | ${entry.getFormattedAmount()}`
        );
      } else {
        return "Unknown entry type";
      }
    });
    // console.log(resultArray)
    return resultArray;
}
}
