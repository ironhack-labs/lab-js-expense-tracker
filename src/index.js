// Entry

class Entry {
    constructor (date, amount, description) {
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
    constructor (date, classAmount, classDescription) {
        super (date, classAmount , classDescription)
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor (date , expenseAmount , expenseDescription , paid) {
        super (date, expenseAmount , expenseDescription , paid)
        this.paid = paid
        this.type = "expense"
    }
    
    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor () {
        this.entries = []
    }

    addEntry (entry) {
        this.entries.push (entry) 
    }

    getCurrentBalance () {
        if (this.entries.length === 0) {
            return 0
        }

       let totalIncome = 0

       let totalExpense = 0

       for (let i = 0 ; i<this.entries.length ; i++) {
        if (this.entries[i].type === "income") {
            totalIncome += this.entries[i].amount
        }
        if (this.entries[i].type === "expense") {
            totalExpense += this.entries[i].amount
        }
       }
       return totalIncome - totalExpense;
    }

    getFormattedEntries() {

        let formattedArr = []
        
       this.entries.forEach (function (element) {
        if (element.type === "income") {
            const newIncome = `${element.date} | ${element.description} | ${element.amount} €`
            formattedArr.push (newIncome)
        }
        if (element.type === "expense") {
            const newExpense = `${element.date} | ${element.description} | -${element.amount} €`
            formattedArr.push (newExpense)
        }
       })

       return formattedArr   
    }
}

