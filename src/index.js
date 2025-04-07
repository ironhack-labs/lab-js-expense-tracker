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
    this.type = 'income';
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = 'expense';
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
  addEntry(newEntry) {
    this.entries.push(newEntry);
    console.log('entriesArr: ', this.entries);
  }
  getCurrentBalance() {
    if (this.entries.length > 0) {
      let totalIncome = 0;
      let totalExpense = 0;

      this.entries.forEach(function (element) {
        console.log('element: ', element);
        if (element.type === 'income') {
          totalIncome += element.amount;
        } else {
          totalExpense += element.amount;
        }
      });

      return totalIncome - totalExpense;
    } else {
      return 0;
    }
  }
  getFormattedEntries() {
    const formattedEntries = [];
    this.entries.forEach(function (element) {
      console.log('element getFormatted: ', element);
      console.log('date getFormatted: ', element.date);
      console.log('description getFormatted: ', element.description);
      console.log('amount getFormatted: ', element.getFormattedAmount());

      formattedEntries.push(
        `${element.date} | ${
          element.description
        } | ${element.getFormattedAmount()}`
      );

      // if (element.type === 'income') {
      //   return `${element.date} | ${
      //     element.description
      //   } | ${element.getFormattedAmount()}`;
      // } else {
      //   return `${element.date} | ${
      //     element.description
      //   } | ${element.getFormattedAmount()}`;
      // }
    });
    return formattedEntries;
  }
}

// this.entries.forEach((entry) => {
//   entry.getFormattedAmount();
// });
