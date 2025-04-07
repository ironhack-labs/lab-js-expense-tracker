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
	constructor(date, amount, description, paid) {
		super(date, amount, description)
		this.type = 'expense'
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
	addEntry(entry) {
		this.entries.push(entry)
	}
	getCurrentBalance() {
		if (!this.entries.length) return 0
		let total = 0
		this.entries.forEach((entry) => {
			if (entry.type === 'income') {
				total += entry.amount
			} else {
				total -= entry.amount
			}
		})
		return total
	}
	getFormattedEntries() {
		let newArr = []
		this.entries.forEach((entry) => {
			if (entry.type === 'income') {
				newArr.push(
					`${entry.date} | ${entry.description} | ${entry.amount} €`
				)
			} else {
				newArr.push(
					`${entry.date} | ${entry.description} | -${entry.amount} €`
				)
			}
		})
		return newArr
	}
}
