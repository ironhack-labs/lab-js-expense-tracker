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

	format() {
		return `${this.date} | ${this.description} | ${this.getFormattedAmount()}`;
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
		return `-${super.getFormattedAmount()}`;
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

	getCurrentBalance() {
		let balance = 0;
		for (const entry of this.entries) {
			switch (entry.type) {
				case "income":
					balance += entry.amount;
					break;
				case "expense":
					balance -= entry.amount;
					break;
			}
		}
		return balance;

		/* Old way of doing it
		if (this.entries.length == 0) {
			return 0;
		} else {
			let balance = 0;
				this.entries.forEach(element => {
					console.log(element);
					if (element.type === "income") {
						balance += element.amount;						
					}

					if (element.type === "expense") {
						balance -= element.amount;
					}
				});
				return balance;
		}
				*/
	}

	getFormattedEntries() {
		const arrayOfEntries = [];
		for (const entry of this.entries) {
			const date = entry.date;
			const description = entry.description;
			const amount = entry.getFormattedAmount();
			//arrayOfEntries.push(`${date} | ${description} | ${amount}`);
			arrayOfEntries.push(entry.format());
		}
		return arrayOfEntries;
	}

}
