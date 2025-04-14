// Entry
class Entry {
  constructor (date, amount, description) {
    this.date = date
    this.amount = amount
    this.description = description
  }
  getFormattedAmount () {
    return `${this.amount} €`
  }
}

// Income
class Income extends Entry {
  constructor (date, amount, description) {
    super(date, amount, description)
    this.type = 'income'
  }
}

// Expense
class Expense extends Entry {
  constructor (date, amount, description, paid) {
    super(date, amount, description)
    this.type = 'expense'
    this.paid = paid
  }
  getFormattedAmount () {
    return `-${this.amount} €`
  }
}

// Budget
// extends Entry
class Budget {
  constructor () {
    this.entries = []
  }
  addEntry (newEntry) {
    this.entries.push(newEntry)
  }
  getCurrentBalance () {
    if (this.entries.length === 0) {
      return 0
    }
    let totalIncome = 0
    let totalExpense = 0
    this.entries.forEach(item => {
      if (item.type === 'income') {
        totalIncome += item.amount
      } else if (item.type === 'expense') {
        totalExpense += item.amount
      }
    })
    return totalIncome - totalExpense
  }
  getFormattedEntries () {
    const formattedEntries = []

    this.entries.forEach(entry => {
      const formattedEntry = `${entry.date} | ${
        entry.description
      } | ${entry.getFormattedAmount()}`
      formattedEntries.push(formattedEntry)
    })

    return formattedEntries
  }
}
