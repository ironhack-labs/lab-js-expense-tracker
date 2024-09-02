// Entry
class Entry {

  constructor(date, amount, description) {

    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  getFormattedAmount() {

    return `${this.amount} €`
  }
}

// Income
// --> Income is a subclass of Entry
class Income extends Entry {

  constructor(date, amount, description) {

    super(date, amount, description)

    this.type = "income";
  }
}

// Expense
class Expense extends Entry {

  // Jasmine test missing 4 arguments (date, amount, description paid)
  // Jasmine test missing 'paid' boolean as 4th argument...

  constructor(date, amount, description) {

    super(date, amount, description)

    this.paid = true;

    this.type = "expense";
    
  }

  getFormattedAmount() {

    return `-${this.amount} €`

  }
}

// Budget
class Budget {}
