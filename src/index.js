// Entry
class Entry {
  constructor(dateValue, amountValue, descripionValue) {
    ;(this.date = dateValue),
      (this.amount = amountValue),
      (this.description = descripionValue)
  }
  getFormattedAmount() {
    return `${this.amount} €`
  }
}
let entry1 = new Entry('2014', 100, 'deportivos')
console.log(entry1.getFormattedAmount())

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description), (this.type = 'income')
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description),
      (this.type = 'expense'),
      (this.paid = paid)
  }
  getFormattedAmount() {
    return `-${this.amount} €`
  }
}
let expense1 = new Expense('2025', 99, 'deuda', 'pagado')

// Budget
class Budget {
  constructor() {
    this.entries = []
  }
  addEntry(entry) {
    this.entries.push(entry)
  }
  getCurrentBalance() {
    let totalIncome = 0
    let totalExpense = 0
    for (let i = 0; i < this.entries.length; i++) {
      let entry = this.entries[i]
      if (entry.type === 'income') {
        totalIncome += entry.amount
      } else if (entry.type === 'expense') {
        totalExpense += entry.amount
      }
    }
    return totalIncome - totalExpense
  }
  getFormattedEntries() {
    let formatEntries = []
    this.entries.forEach((entry) => {
      if (entry.type === 'income') {
        formatEntries.push(
          `${entry.data} | ${entry.description} | ${entry.amount}€`
        )
      } else if (entry.type === 'expense') {
        formatEntries.push(
          `${entry.data} | ${entry.description} | ${entry.amount}€`
        )
      }
    })
    return formatEntries
  }
}
