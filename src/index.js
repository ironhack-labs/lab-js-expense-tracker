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

    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    // method for new entry

    addEntry(entry) {
        this.entries.push(entry);
    }

    // method for get current balance 

    getCurrentBalance() {
        let balance = 0;
        this.entries.forEach(entry => {
            if (entry.type === "income") {
                balance += entry.amount
            } else if (entry.type === "expense") {
                balance -= entry.amount
            }
        })

        return balance
    }


    getFormattedEntries(){
        let formattedEntriesArr = []
        this.entries.forEach(item => {
            formattedEntriesArr.push(item.getFormattedAmount())
        }
        )
        return formattedEntriesArr
    }
}


const salary = new Income("07/07/2007",15000,"salary with bonus")
const bills = new Expense("06/11/2020",40,"electricity bill",true)
const wallet = new Budget()

wallet.addEntry(salary)
wallet.addEntry(bills)

console.log(wallet.getCurrentBalance())
console.log(wallet.getFormattedEntries())