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
    getTotalIncome() {
        let totalIncome = 0 //para hacer un sumatorio 
        this.entries.forEach((eachEntries) => { //itera entre los valores de this.entries
            if (eachEntries.type === "income") { //con esto llamamos a los datos que están en income que son las ganancias
                totalIncome += eachEntries.amount //con esto sumamos toda las entradas que haya de income  
            }

        });
        return totalIncome
    }
    getTotalExpense() {
        let totalExpense = 0 //para hacer un sumatorio 
        this.entries.forEach((eachEntries) => { //itera entre los valores de this.entries
            if (eachEntries.type === "expense") { //con esto llamamos a los datos que están en income que son los gastos
                totalExpense += eachEntries.amount //con esto sumamos toda las entradas que haya de expense 
            }

        });
        return totalExpense
    }

    getCurrentBalance() {
        this.totalIncome = this.getTotalIncome()
        this.totalExpense = this.getTotalExpense()
        return this.totalIncome - this.totalExpense
    }
}
