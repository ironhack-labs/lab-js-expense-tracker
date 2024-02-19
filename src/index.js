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

  addEntry(income) {
    this.entries.push(income);
  }

  getTotalIncome() {
    let sumOfIncome = 0;
    this.entries.forEach((current) => {
      if (current.type == "income") {
        sumOfIncome += current.amount;
      }
    });
    return sumOfIncome;
  }

  getTotalExpense() {
    let sumOfExpense = 0;
    this.entries.forEach((current) => {
      if (current.type == "expense") {
        sumOfExpense += current.amount;
      }
    });
    return sumOfExpense;
  }

  getCurrentBalance() {
    if (this.entries == 0) {
      return 0;
    } else {
      return this.getTotalIncome() - this.getTotalExpense();
    }
  }
  getTotal(entry) {
    let total = 0;
    this.entries.forEach((Element) => {
      if (entry.type === "income" || entry.type === "expense") {
        total += Element.amount;
      }
    });
    return total;
  }
}
