// Entry
class Entry {
    constructor(date,amount,description){
        this.date = date
        this.amount = amount
        this.description = description
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date,amount,description) {
        super(date,amount,description)
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor(date,amount,description,paid) {
        super(date,amount,description)
        this.type = "expense"
        this.paid = paid
    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = []

    }
    addEntry(newEntry) {
        this.entries.push(newEntry)
    }
    getCurrentBalance() {
        if(this.entries.length === 0 || this.entries.length === undefined) {
            return 0
        } else {
            let income = 0
            let expense = 0
            for(const element of this.entries) {
                if(element.type === "income"){
                    income += element.amount
                } else {
                    expense += element.amount
                }
            }
            return income - expense
        }
    }
}

const test1 = new Expense('13/01/2025',200,'bus','paid')
const test2 = new Income('14/05/2025',300,'Freelancing')
console.log(test1)
console.log(test2)


const test3 = new Budget()
test3.addEntry(test1)
test3.addEntry(test2)
console.log(test3)
console.log(test3.getCurrentBalance())
