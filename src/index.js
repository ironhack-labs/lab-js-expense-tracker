// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    return "${this.amount}€";
  }
}

// Income
class Income extends Entry {
  constructor(myDate, myAmount, myDescription) {
    super(myDate, myAmount, myDescription);
    this.type = "income";
  }
  getFormattedAmount() {
    return "-${this.amount}  €";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";
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
    let balance = 0;
    let totalIncome = 0;
    let totalExpenses = 0;
    if (this.entries.length === 0) return 0;
    this.entries.forEach((Entry) => {
      if (Entry.type === "income") totalIncome += Entry.amount;
      if (Entry.type === "expense") totalExpenses += Entry.amount;
    });
    return totalIncome - totalExpenses;
  }
  getFormattedEntries() {
    let arrayString = [];
    let elementString = "";
    this.entries.forEach((Entry) => {
      if (Entry.type === "income")
        elementString = `${Entry.date} | ${Entry.description} | +${Entry.amount} €`;
      if (Entry.type === "expense")
        elementString = `${Entry.date} | ${Entry.description} | -${Entry.amount} €`;
      arrayString.push(elementString);
    });
    // console.log(arrayString)
    return arrayString;
  }
}
