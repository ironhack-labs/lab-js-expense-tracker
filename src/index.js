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
    return `${this.amount}€`;
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
  getCurrenceBalance() {
    return this.getTotalIncome() - this.getTotalExpense();
  }

  //Bonus 5

  getFormattedEntries() {
    const formattedEntries = [];

    this.entries.forEach((entry) => {
      formattedEntries.push(
        `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
      );
    });
    return formattedEntries;

    // OR using map()
    // return this.entries.map((entry) => {
    //   return `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
    // });
  }
}
