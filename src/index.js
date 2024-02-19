// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  getFormattedAmount = () => {
    return `${this.amount} €`;
  };
}

// Income
class Income extends Entry {
  constructor(data, amount, description) {
    super(data, amount, description);
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(data, amount, description, paid) {
    super(data, amount, description);
    this.type = "expense";
    this.paid = paid;
  }
  getFormattedAmount = () => {
    return `-${this.amount} €`;
  };
}

// Budget
class Budget {}
