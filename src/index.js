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
    let sum = 0;
    for (let i = 0; i < this.entries.length; i++) {
      let currentEntry = this.entries[i];
      if (currentEntry.type === "income") sum += currentEntry.amount;
      else sum -= currentEntry.amount;
    }
    return sum;
  }
    getFormattedEntries() {
        const arr = []
        let string;
        this.entries.forEach(e => {
            string = `${e.date} | ${e.description} | ${e.getFormattedAmount()}`
            arr.push(string)
        });
        console.log(arr)
        return arr;
    }
}

const budget = new Budget();
const income1 = new Income("240919", 49.99, "Dinner");

budget.addEntry(income1);

console.log(budget);
console.log(income1);
