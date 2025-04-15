// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date
    this.amount = amount
    this.description = description
  }
  getFormattedAmount() {
    return `${this.amount} €`
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description)
    this.type = 'income'
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid, category) {
    super(date, amount, description)
    this.type = 'expense'
    this.date = date
    this.amount = amount
    this.description = description
    this.paid = paid
    this.category = category
  }
  getFormattedAmount() {
    return `${this.amount} -€`
  }
}

// Budget
class Budget {}
