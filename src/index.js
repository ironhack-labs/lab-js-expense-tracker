// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
        return `${this.amount} €`
    }
}
const entry = new Entry("20-01-2025", 150, "Deuda")

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description)
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description)
        this.paid = paid;
        this.type = "expense"
    }
    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }
    addEntry(entry) {
        this.entries.push(entry)
    }
    getCurrentBalance() {
        if (!this.entries) {
            return 0;
        }
        let amountIn = 0
        let amountEx = 0
        this.entries.forEach(element => {
            if (element.type === "income") {
                amountIn += element.amount
            } else {
                amountEx += element.amount
            }
        });

        return amountIn - amountEx;

    }
    getFormattedEntries(){
        let formEntr = [];
        this.entries.forEach(element =>{
            if(element.type==="income"){
                formEntr.push(`${element.date} | ${element.description} | ${element.amount} €`)
            } else if(element.type==="expense"){
                formEntr.push(`${element.date} | ${element.description} | -${element.amount} €`)
            }
            
        })
        return formEntr;
    }
}
