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
    if (this.entries.length) {
      let totalIncome = 0;
      let totalExpense = 0;
      this.entries.forEach((item) => {
        if (item.type === "income") totalIncome += item.amount;
        else totalExpense += item.amount;
      });
      return totalIncome - totalExpense;
    }
    return 0;
  }
  getFormattedEntries() {
    const formattedArr = [];
    this.entries.forEach((item) => {
      if (item.type === "income") {
        const formattedStr = `${item.date} | ${item.description} | ${item.amount} €`;
        formattedArr.push(formattedStr);
      } else {
        formattedArr.push(
          `${item.date} | ${item.description} | -${item.amount} €`
        );
      }
    });
    return formattedArr;
  }
}
