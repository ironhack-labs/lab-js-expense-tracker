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
    this.type = "income"
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description)
    this.type = "expense"
    this.paid = paid
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

  addEntry(Income) {
    this.entries.push(Income)
  }

  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0
    } else {
      let totalIncome = 0
      let totalExpenses = 0
      this.entries.forEach((eachEntry) => {
        if (eachEntry.type === "income") {
          totalIncome += eachEntry.amount
        } else if (eachEntry.type === "expense") {
          totalExpenses += eachEntry.amount
        }
      })
      return totalIncome - totalExpenses
    }
  }
}
