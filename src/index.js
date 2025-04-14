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
const expense = new Entry("10.07.2024", 100, "whatever");
console.log(expense.getFormattedAmount());

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}
const income1 = new Income("10.07.2024", 100, "whatever");
console.log(income1);
// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description, paid);
    this.paid = paid;
    this.type = "expense";
  }
}
const expense1 = new Expense("10.07.2024", 100, "whatever", true);
console.log(expense1);

// Budget
class Budget {}
