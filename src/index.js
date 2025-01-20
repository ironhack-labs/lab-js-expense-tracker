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
    this.type = "income"; /* we are hardcoding income as a type,
    por eso no hace falta ponerlo como argumento en el constructor*/
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

  addEntry(income) {
    this.entries.push(income);
  }

  getCurrentBalance() {
    if (!this.entries) {
      return 0;
    }

    let incomeValue = 0;
    let expenseValue = 0;

    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        incomeValue += Math.round(entry.amount);
      } else if (entry.type === "expense") {
        expenseValue += Math.round(entry.amount);
      }
    });
    return incomeValue - expenseValue;
  }
  // BONUS
  getFormattedEntries() {
    let formatEntry = [];

    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        formatEntry.push(
          `${entry.date} | ${entry.description} | ${entry.amount} €`
        );
        console.log(formatEntry)
      } else if (entry.type === "expense") {
        formatEntry.push(
          `${entry.date} | ${entry.description} | -${entry.amount} €`
        );
        console.log(formatEntry);
      }
    });
    return formatEntry;
  }
}
