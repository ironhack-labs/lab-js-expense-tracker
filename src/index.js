// Entry

class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    };

    getFormattedAmount() {
        return `${amount} €`;
    };
};

// Income

class Income extends Entry {
    constructor(date, amount, description) {
        super (date, amount, description)
    };

    getFormattedAmount() {
        return `${amount} €`;
    };
};

const earn = new Income ();

// Expense

class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super (date, amount, description)
        this.paid = paid;
    };

    getFormattedAmount() {
        return `${amount} €`;
    };
};

// Budget

class Budget {
    addEntry() {

    };

    getCurrentBalance() {
        if (Entry === 0) {
            return 0;
        }
        return Entry - Expense;
    };
}

