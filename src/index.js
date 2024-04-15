// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        let result = this.amount + " €";
        console.log(result);
        return result;
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
        super(date);
        this.amount = amount;
        this.description = description;
        this.paid = paid;
        this.type = "expense";        
    }

    getFormattedAmount() {
        let result = `-${this.amount} €`;
        console.log(result);
        return result;
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
        if(this.entries.length == 0) {
            return 0;
        }
        let amount = 0;
        this.entries.forEach(element => {
            if(element.type == "income") {
                amount += element.amount;
            } else {
                amount -= element.amount;
            }
           
        });
        return amount;
    }
}
