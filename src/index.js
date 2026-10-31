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

const entry1 = new Entry("12th October", "300", "Mexican Seoul Restaurant");

console.log(entry1.getFormattedAmount());
console.log(entry1);

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
    this.description = description;
    this.type = "expense";
    this.paid = paid;
  }
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

const expense1 = new Expense("1st Jan", "99", "French fries", "False");

console.log(expense1.getFormattedAmount());

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }

  addEntry(entry) {
    this.entries.push(entry);
  }

  getCurrentBalance() {
    return this.entries.reduce((total, entry) => {
      if (entry.type === "income") {
        return total + Number(entry.amount);
      }

      if (entry.type === "expense") {
        return total - Number(entry.amount);
      }
      return total;
    }, 0);
  }

  getFormattedEntries() {
    return this.entries.reduce(this.getFormattedEntries, entry) => {forma}
  }
}
