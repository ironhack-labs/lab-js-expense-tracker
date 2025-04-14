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
  addEntry(newEntry) {
    this.entries.push(newEntry);
  }

  getCurrentBalance() {
    this.sum = 0;
    if (!this.entries.length) {
      return 0;
    } else {
      this.entries.forEach((number) => {
        if (number.type === "income") {
          this.sum += number.amount;
        } else {
          this.sum -= number.amount;
        }
      });
    }
    return this.sum;
  }

  // Bonus
  getFormattedEntries() {
    const formattedArr = [];
    this.entries.forEach((number) => {
      if (number.type === "income") {
        formattedArr.push(
          `${number.date} | ${number.description} | ${number.amount} €`
        );
      } else {
        formattedArr.push(
          `${number.date} | ${number.description} | -${number.amount} €`
        );
      }
    });
    return formattedArr;
  }
}
