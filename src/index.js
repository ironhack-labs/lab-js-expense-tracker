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
    if (!this.entries.length) {
      return 0;
    }
    let total = 0;
    for (let entry of this.entries) {
      if (entry instanceof Income) {
        total += entry.amount;
      } else if (entry instanceof Expense) {
        total -= entry.amount;
      }
    }
    return total;
  }
  //Bonus: Iteration 5 |
  // Get Formatted Entries

  getFormattedEntries() {
    const formattedEntries = [];
    this.entries.forEach((entry) => {
      const formattedAmount = entry.getFormattedAmount();
      const formattedEntry = `${entry.date} | ${entry.description} | ${formattedAmount}`;
      formattedEntries.push(formattedEntry);
    });
    return formattedEntries;
  }
}
