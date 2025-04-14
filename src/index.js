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
    return `${-this.amount} €`;
    // another approach: return `-${super.getFormattedAmount()};
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

  getTotalIncome() {
    let totalIncome = 0;
    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        totalIncome += entry.amount;
      }
    });
    return totalIncome;
  }

  getTotalExpense() {
    let totalExpense = 0;
    this.entries.forEach((entry) => {
      if (entry.type === "expense") {
        totalExpense += entry.amount;
      }
    });
    return totalExpense;
    // alternative to returning totalExpense -> return this.entries.length > 0 ? totalIncome : 0
  }
  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    } else {
      return this.getTotalIncome() - this.getTotalExpense();
    }
  }
}
