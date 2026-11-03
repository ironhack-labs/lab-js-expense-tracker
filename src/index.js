// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    return this.amount + " €";
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
    return "-" + this.amount + " €";
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }
  /**
   *
   * @param {object} newEntry - can be either an `Income` or an `Expense` object
   */
  addEntry(newEntry) {
    this.entries.push(newEntry);
  }
  getCurrentBalance() {
    return this.entries.length === 0
      ? 0
      : this.entries.reduce((total, n) => {
          if (n.type === "expense") {
            return total - n.amount;
          } else if (n.type === "income") {
            return total + n.amount;
          }
        }, 0);
  }

  getFormattedEntries() {
    if (this.entries.type === "income") {
      return this.entries.forEach(
        (element) =>
          element.date.toUpperCase() +
          " | " +
          element.description.toUpperCase() +
          " | " +
          element.amount +
          "€",
      );
    } else if (this.entries.type === "expense") {
      return this.entries.forEach(
        (element) =>
          `${element.date} | ${element.description.toUpperCase} | ${element.amount.getFormattedAmount}`,
      );
    }
  }
}
