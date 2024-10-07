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
const entry1 = new Entry("", 199, "hola");
console.log(entry1.getFormattedAmount());
// Income
class Income {}

// Expense
class Expense {}

// Budget
class Budget {}
