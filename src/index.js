// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  };

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
    if (this.entries.length == 0) {
      return 0;
    } else {
      let incomes = 0;
      let expenses = 0;

      for (let entry of this.entries) {
        if (entry instanceof Income) {
          incomes += entry.amount;
        } else if (entry instanceof Expense) {
          expenses += entry.amount;
        }
      }

      return incomes - expenses;
    }
  }

  getFormattedEntries() {
    let formattedEntries = [];

    for (let entry of this.entries) {
      if (entry instanceof Income) {
        formattedEntries.push(`${entry.date} | ${entry.description} | +${entry.amount} €`);
      } else if (entry instanceof Expense) {
        formattedEntries.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
      }
    }

    return formattedEntries;
  }
}
