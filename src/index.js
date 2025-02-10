// Entry
class Entry {
    constructor (date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    // Métodos

    getFormattedAmount() {
        return `${this.amount} €`;
    }

}

// Income
class Income extends Entry {
    constructor (date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }

}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super(date, amount, description)
        this.paid = paid;
        this.type = "expense";
    }

    // Métodos

    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor () {
        this.entries = [];
    }


    // Métodos

    addEntry(nuevaEntrada) {
        this.entries.push(nuevaEntrada);
    }

    getCurrentBalance() {
        if(this.entries.length === 0) {
            return 0;
        }
        
        let totalIncome = 0;
        let totalExpense = 0;
        let balance = 0;

        for (entradas in this.entries) {
            if(this.entries[entradas] === "income") {
                totalIncome += entries[entradas][0];
            }
            else if(this.entries[entradas] === "expense") {
                totalExpense += entries[entradas][0];
            }
        }
        console.log(this.entries);

        console.log(totalIncome + " Total Ingresos");
        balance = totalIncome - totalExpense;
        return balance;
    }

}
