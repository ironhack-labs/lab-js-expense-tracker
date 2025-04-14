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
  constructor(date, amount, description, category) {
    super(date, amount, description)
    this.type = 'expense'
    this.paid = category
  }
  getFormattedAmount() {
    return `-${this.amount} €`
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = []
  }
  addEntry(entry) {
    this.entries.push(entry)
  }
  getTotalIncome() {
    let count = 0
    this.entries.forEach(el => el.type === 'income' ? count += el.amount : el)
    return count
  }
  getTotalExpense() {
    let count = 0
    this.entries.forEach(el => el.type !== 'expense' ? count += el.amount : el)
    return count
  }
  getCurrentBalance() {
    if (!this.entries.length) return 0
    return this.getTotalIncome() - this.getTotalExpense()
  }
  getTotal(typeOfEntry) {
    let count = 0
    this.entries.forEach(el => el.type === typeOfEntry ? count += el.amount : el)
    return count
  }
}
