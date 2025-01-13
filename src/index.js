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
class Expense extends Income {
  constructor(date, amount, description, paid) {
    super(date, amount, description, paid);
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
    this.entries.push(entry);
  }
  getCurrentBalance() {
    if (!this.entries.length) return 0;
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
    this.entries.forEach((element) => {
        formattedEntries.push(`${element.date} | ${element.description} | ${element.getFormattedAmount()}`)
    });
    return formattedEntries;
  }
}

const income1 = new Income("2024-06-17", 10, "other");
const income2 = new Income("2024-06-17", 3456, "salary");
const expense1 = new Expense("2024-06-17", 100, "food", true);
const expense2 = new Expense("2024-06-17", 99, "food", true);
const budget = new Budget()

budget.addEntry(income1);
budget.addEntry(income2);
budget.addEntry(expense2);
budget.addEntry(expense1);
const formattedEntries = budget.getFormattedEntries();

console.log(formattedEntries);

