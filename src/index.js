// Iteration 0 & 1:

// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  getFormattedAmount() {
    const formattedAmount = this.amount + " €";
    console.log(formattedAmount);

    return formattedAmount;
  }
}

// Iteration 2:

class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}

// Iteration 3:

class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";
  }
  getFormattedAmount() {
    // override in the loop or error + only for this section
    return `-${this.amount} €`;
  }
}

// Iteration 4:
class Budget {
  constructor() {
    this.entries = [];
  }
  addEntry(entry) {
    this.entries.push(entry); // I choose the push method to add entries to the array
  }

  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }

    let totalIncome = 0;
    let totalExpense = 0;

    for (const entry of this.entries) {
      if (entry instanceof Income) {
        totalIncome += entry.amount;
      } else if (entry instanceof Expense) {
        totalExpense += entry.amount;
      }
    }
    let balance = totalIncome - totalExpense;
    return balance;
  }
  getFormattedEntries() {
    // Iteration 5 - not solved at 100%
    return `${entry.date} | ${entry.description} | ${formattedAmount}`;
  }
}
