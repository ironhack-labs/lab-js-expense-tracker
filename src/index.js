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
		this.type = "income";
	}
}

// Expense
class Expense extends Entry {
	constructor(date, amount, description, paid) {
		super(date, amount, description);
		this.paid = paid;
		this.type = "expense";
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
	addEntry(transaction) {
		this.entries.push(transaction);
	}
	getCurrentBalance() {
		let result = 0;
		for (let i = 0; i < this.entries.length; i++) {
			if (this.entries[i].type === "income") {
				result += this.entries[i].amount;
			} else if (this.entries[i].type === "expense") {
				result -= this.entries[i].amount;
			}
		}
		return result;
	}
}

const budget1 = new Budget();
const budget2 = new Budget();
const income1 = new Income("2024-06-17", 200, "food");
const income2 = new Income("2024-06-17", 200, "food");
const expense1 = new Expense("2024-06-17", 100, "food", true);
const expense2 = new Expense("2024-06-17", 500, "food", false);

//console.log(income1);

budget1.addEntry(income1);
budget1.addEntry(income2);
budget1.addEntry(expense1);
budget1.addEntry(expense2);
console.log(budget1.getCurrentBalance());

budget2.addEntry(income1);
budget2.addEntry(income2);
budget2.addEntry(expense1);
console.log(budget2.getCurrentBalance());
