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
        this.type = 'income';
    }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.type = 'expense';
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
    let totalIncome = 0;
    let totalExpenses = 0;

    for (const entry of this.entries) {
        if (entry.type === 'income') {
            totalIncome += entry.amount;
        } else if (entry.type === 'expense') {
            totalExpenses += entry.amount;
        }
    }

    return totalIncome - totalExpenses;
}

getFormattedEntries() {
    const formattedEntries = [];
    this.entries.forEach(function (entry) {
        const formattedString = `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
        formattedEntries.push(formattedString);
    });
    return formattedEntries;
  }
}
