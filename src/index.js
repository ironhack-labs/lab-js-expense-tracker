// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    return `${this.amount} €`
  };
}

// Income
class Income extends Entry{
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
    return `-${this.amount} €`
  };
}

// Budget
class Budget {
  constructor () {
      this.entries = [],
      this.balance = 0
  }
  addEntry (entry) {
      this.entries.push(entry);
      if (entry instanceof Income) {
          this.balance += entry.amount;
      } else if (entry instanceof Expense) {
          this.balance -= entry.amount;
      }
  }
  getCurrentBalance(){
      if (this.entries.length === 0) {
          return 0;
      }
      return this.balance
  }

  getFormattedEntries() {
    return this.entries.map(entry => {
      return `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
    });
  }
}
