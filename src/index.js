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
    if (this.entries.length === 0) {
      return 0;
    } else {
      let totalIncome = 0;
      let totalExpense = 0;
      let allEntries = this.entries;
      for (let i = 0; i < allEntries.length; i++) {
        if (allEntries[i].type === "income") {
          totalIncome += allEntries[i].amount;
        } else {
          totalExpense += allEntries[i].amount;
        }
      }
      let balance = totalIncome - totalExpense;
      return balance;
    }
  }

  getFormattedEntries() {
    let allEntries = this.entries;
    let formattedEntryArr = [];
    allEntries.forEach((element) => {
      if (element.type === "income") {
        let formattedIncome = `${element.date} | ${element.description} | ${element.amount} €`;
        formattedEntryArr.push(formattedIncome);
      } else {
        let formattedExpense = `${element.date} | ${element.description} | -${element.amount} €`;
        formattedEntryArr.push(formattedExpense);
      }
    });
    return formattedEntryArr;
  }
}
