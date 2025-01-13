// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    return `${this.amount} €`; // Ensure two decimal places
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
  getFormattedAmount() {
    return `${this.amount} €`; // Add "+" sign for income
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
    return `-${this.amount} €`; // Add "-" sign for expense
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }

  addEntry(entry) {
    this.entries.push(entry); // Add entry to entries array
  }

  getCurrentBalance() {
    let totalIncome = 0;
    let totalExpenses = 0;

    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        totalIncome += entry.amount; // Sum up incomes
      } else if (entry.type === "expense") {
        totalExpenses += entry.amount; // Sum up expenses
      }
    });

    return totalIncome - totalExpenses; // Calculate the balance
  }

  getFormattedEntries() {
    const formattedEntries = []; // Initialize the array
    this.entries.forEach((entry) => {
      const { date, description, type } = entry; // Destructure properties
      const formattedDate = date
      const formattedAmount = entry.getFormattedAmount(); // Get formatted amount

      // Combine the formatted components into the required string format
      const formattedString = `${formattedDate} | ${description} | ${formattedAmount}`;
      formattedEntries.push(formattedString); // Add formatted string to the array
    });

    return formattedEntries; // Return the array
  }
}
const budget = new Budget();
// Create few income and expense entries for the budget
      const income1 = new Income("2024-06-17", 10, "other");
      const income2 = new Income("2024-06-17", 3456, "salary");
      const expense1 = new Expense("2024-06-17", 100, "food", true);
      const expense2 = new Expense("2024-06-17", 99, "food", true);

      // Add the entries to the budget
      budget.addEntry(income1);
      budget.addEntry(income2);
      budget.addEntry(expense1);
      budget.addEntry(expense2);

      // Call the getFormattedEntries method
      const formattedEntries = budget.getFormattedEntries();
// For incomes: "DATE | DESCRIPTION | +AMOUNT €"
//For expenses: "DATE | DESCRIPTION | -AMOUNT €"
