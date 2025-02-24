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
  }
  type = "income";
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
  addEntry(object) {
    this.entries.push(object);
  }

  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    } else {
      let total = 0;
      this.entries.forEach((element) => {
        if (element.type === "income") {
          total += element.amount;
        } else {
          total -= element.amount;
        }
      });
      return total;
    }
  }
  getFormattedEntries() {
    let formattedEntries = [];
    this.entries.forEach((element) => {
      formattedEntries.push(
        `${element.date} | ${
          element.description
        } | ${element.getFormattedAmount()}`
      );
      console.log(
        `${element.date} | ${
          element.description
        } | ${element.getFormattedAmount()}`
      );
    });
    return formattedEntries;
  }
}
