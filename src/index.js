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

Expense;
class Expense extends Entry {
  constructor(date, amount, description, income) {
    super(date, amount, description, income);
    this.type = paid;
  }

  getFormattedAmount() {
    const amountEuroMinus = `-${this.amount} €`;
    return amountEuroMinus;
  }
}

// Budget
class Budget {}
