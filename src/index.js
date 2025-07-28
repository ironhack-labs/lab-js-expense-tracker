// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
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
        this.type = "expense"
        this.paid = paid
    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = []
    }

    addEntry(entry){
        this.entries.push(entry)
    }
    getCurrentBalance(){
        if(this.entries.length === 0){
            return 0
        }
        let sum = 0;
        this.entries.forEach(element => {
            if(element.type === "income"){
                sum += element.amount
            }else{
                sum -= element.amount
            }
        });
        return sum
    }

    getFormattedEntries(){
        let arrFormatted = [] 
        this.entries.forEach(element => {
            if(element.type === "income"){
                arrFormatted.push(`${element.date} | ${element.description} | ${element.amount} €`)
            }else if (element.type === "expense"){
                arrFormatted.push(`${element.date} | ${element.description} | -${element.amount} €`)
            }
        });
        return arrFormatted
    }
}

let entry1 = new Expense("23 jun",23, "groceries")
let entry2 = new Income("23 jun", 30, "salary")
console.log(entry1.getFormattedAmount())



let budget = new Budget()
budget.addEntry(entry1)
budget.addEntry(entry2)
console.log(budget.getFormattedEntries())