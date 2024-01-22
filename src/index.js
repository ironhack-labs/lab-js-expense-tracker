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
    return this.entries.push(entry);
  }

  getTotalIncome() {
    let totalIncomes = 0;

    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        totalIncomes += entry.amount;
      }
    });
    if (this.entries.length === 0) {
      return 0;
    } else {
      return totalIncomes;
    }

    /* fruits.forEach((element, index) => {
  console.log(`${index}: ${element}`);
}); */
  }

  getTotalExpense() {
    let totalExpenses = 0;
    this.entries.forEach((entry) => {
      if (entry.type === "expense") {
        totalExpenses += entry.amount;
      }
    });
    if (this.entries.length === 0) {
      return 0;
    } else {
      return totalExpenses;
    }
  }

  getCurrentBalance() {
    let totalBalance = 0;
    return this.getTotalIncome(Entry) - this.getTotalExpense(Entry);
  }
}

getFormattedAmount();
