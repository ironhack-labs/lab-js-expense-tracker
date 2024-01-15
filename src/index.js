// Entry
class Entry {
	constructor(date, amount, description) {
		this.date = date;
		this.amount = amount;
		this.description = description;
	}
	getFormattedAmount() {
		return `${this.amount} €`;
	}
}

// Income
class Income extends Entry {
	constructor(date, amount, description) {
		super(date, amount, description);
		this.type = 'income';
	}
}

// Expense
class Expense extends Entry {
	constructor(date, amount, description, paid) {
		super(date, amount, description);
		this.type = 'expense';
		this.paid = paid;
	}
	getFormattedAmount() {
		return `-${this.amount} €`;
	}
}

// Budget
class Budget {
	constructor() {
		this.entries = [];
	}
	addEntry(entry) {
		this.entries.push(entry);
	}
	getTotalIncome() {
		let sum = 0;
		this.entries.forEach((value) => {
			if ('income' === value.type) {
				sum += value.amount;
			}
		});
		return sum;
	}
	getTotalExpense() {
		let sum = 0;
		this.entries.forEach((value) => {
			if ('expense' === value.type) {
				sum += value.amount;
			}
		});
		return sum;
	}
	getCurrentBalance() {
		return this.getTotalIncome() - this.getTotalExpense();
	}
}
