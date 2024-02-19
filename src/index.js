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
class Budget {
  constructor() {
    this.entries = [];
  }

  addEntry = (entryObject) => {
    this.entries.push(entryObject);
  };

  getTotalIncome = () => {
    let sum = 0;
    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        sum += entry.amount;
      }
    });
    return sum;
  };

  getTotalExpense = () => {
    let sum = 0;
    this.entries.forEach((entry) => {
      if (entry.type === "expense") {
        sum += entry.amount;
      }
    });
    return sum;
  };

  getCurrentBalance = () => {
    if (this.entries.length === 0) {
      return 0;
    } else {
      return this.getTotalIncome() - this.getTotalExpense();
    }
  };

  getTotal = (type) => {
    let total = 0;
    this.entries.forEach((entry) => {
      if (entry.type === type) {
        total += entry.amount;
      } else {
        total += entry.amount;
      }
    });
    return total;
  };

  getFormattedEntries = () => {
    const formattedString = [];
    this.entries.forEach((entry) => {
      formattedString.push(
        `${entry.date} ${entry.description} ${entry.amount}`
      );
    });
    return formattedString;
  };
}
