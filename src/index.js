// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  };

  getFormattedAmount() {
    return `${this.amount} €`;
  };
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
  };
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  };
  addEntry(newEntryObject) {
    this.entries.push(newEntryObject);
  };
  getCurrentBalance() {
    if (!this.entries.length) return 0;
    let currentBalance = 0;
    this.entries.forEach((currentEntry) => {
      if (currentEntry.type === "income")
        currentBalance += currentEntry.amount;
      else
        currentBalance -= currentEntry.amount;
    });
    return currentBalance;
  };
  getFormattedEntries() {
    let formattedEntries = [];
    this.entries.forEach(currentEntry => {
      formattedEntries.push(`${currentEntry.date} | ${currentEntry.description} | ${currentEntry.getFormattedAmount()}`);
    });
    return formattedEntries;
  }
}
