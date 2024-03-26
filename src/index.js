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
  constructor(date, amount, description){
    super(date, amount, description);
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description,)
    this.paid = paid;
    this.type = "expense"
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

  addEntry(aNewEntry) {
    this.entries.push(aNewEntry);
  }

  getCurrentBalance() {
    let total = 0;
    this.entries.forEach(oneEntry => {
      if (oneEntry.type === "income") {
        total += oneEntry.amount;
      } else {
        total -= oneEntry.amount;
      }
    });
    return total;
  }
}
