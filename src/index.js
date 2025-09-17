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
class Expense extends Income {
	constructor(date, amount, description, paid) {
		super(date, amount, description)
		this.paid = paid
		this.type = 'expense'
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
		let balance = 0
		if (this.entries.length === 0) return 0
		for (let e of this.entries) {
			if (e.type === 'income') {
				balance += e.amount
			} else if (e.type === 'expense') {
				balance -= e.amount
			}
		}
		return balance
	}
	getFormattedEntries() {
		let entries = []
		this.entries.forEach((e) => {
			if (e.type === 'income') {
				entries.push(`${e.date} | ${e.description} | ${e.amount} €`)
			} else if (e.type === 'expense') {
				entries.push(`${e.date} | ${e.description} | -${e.amount} €`)
			}
		})
		console.log(entries)
		return entries
	}
}
