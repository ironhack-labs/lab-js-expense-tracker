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

class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}

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

class Budget {
  constructor() {
    this.entries = [];
  }

  addEntry(entry) {
    this.entries.push(entry);
  }

  getCurrentBalance() {
    let totalIncome = 0;
    let totalExpense = 0;

    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        totalIncome += entry.amount;
      } else if (entry.type === "expense") {
        totalExpense += entry.amount;
      }
    });

    return totalIncome - totalExpense;
  }
}
