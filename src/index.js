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

    this.paid = paid;
    this.type = type;
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
    if (this.entries.length === 0) {
      return 0;
    }
    let totalIncome = 0;
    let totalExpense = 0;
    for (let i = 0; i < this.entries.length; i++) {
      const entry = this.entries[i];
      if (entry.type === "income") {
        totalIncome += entry.amount;
      } else if (entry.type === "expense") {
        totalExpense += entry.amount;
      }
    }
    return totalIncome - totalExpense;
  }
  getFormattedEntries() {
    let formattedArray = [];
    this.entries.forEach((currentEntry, indexOfCurrentEntry) => {
      if (currentEntry.type === "income") {
        formattedArray.push(
          `${currentEntry.date} | ${currentEntry.description} | ${currentEntry.amount} €`
        );
        console.log(`income`,indexOfCurrentEntry);
      } else if (currentEntry.type === "expense") {
        formattedArray.push(
          `${currentEntry.date} | ${currentEntry.description} | -${currentEntry.amount} €`
        );
        console.log(`expense`, indexOfCurrentEntry);
      }
    });
    console.log(formattedArray);
    return formattedArray;
  }
}
