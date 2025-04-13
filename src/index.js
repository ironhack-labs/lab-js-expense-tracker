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
    this.paid = paid
    this.type = "expense"
  }

  getFormattedAmount() {
    return `${-this.amount} €`
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

  getCurrentBalance() {
    let totalIncome = 0
    let totalExpense = 0

    for (let entry of this.entries) {
      if (entry.type === "income") {
        totalIncome += entry.amount
      } else if (entry.type === "expense") {
        totalExpense += entry.amount
      }
    }

    return totalIncome - totalExpense

  }

  getFormattedEntries() {
    let formattedEntries = []

    this.entries.forEach( function(entry) {
      let formattedEntry
      if (entry.type === "income") {
        formattedEntry = `${entry.date} | ${entry.description} | +${entry.amount} €`
      } else if (entry.type === "expense") {
        formattedEntry = `${entry.date} | ${entry.description} | -${entry.amount} €`
      }

      formattedEntries.push(formattedEntry)
    })

    return formattedEntries
  }
}


//TESTS
let primerIngreso = new Income("2024-06-17", 3456, "salary")
console.log(primerIngreso.getFormattedAmount())

let primerGasto = new Expense("2024-06-20", 2500, "clothes")
console.log(primerGasto.getFormattedAmount())

let balance = new Budget()
balance.addEntry(primerIngreso)
balance.addEntry(primerGasto)
console.log(balance)

balance.getCurrentBalance()
console.log(balance.getCurrentBalance())

balance.getFormattedEntries()
console.log(balance.getFormattedEntries())
