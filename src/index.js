// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    const amountEuro = `${this.amount} €`;
    return amountEuro;
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description); // do I have to always repeat the keywords of the main class constructor? or could I have also wrote just type here in this case?
    this.type = "income";
  }
}

class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";
  }

  getFormattedAmount() {
    const amountEuroMinus = `-${this.amount} €`;
    return amountEuroMinus;
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
    if (this.entries.length === 0) return 0;
    let balanceTotal = 0;
    this.entries.forEach((element) => {
      if (element.type === "expense") balanceTotal -= element.amount;
      if (element.type === "income") balanceTotal += element.amount;
    });
    return balanceTotal;
  }
}
