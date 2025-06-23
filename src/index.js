// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;

    }

    getFormattedAmount() {
        return (`${this.amount} €`)
    }


}

const exampleAmount = new Entry("", 100, "");
exampleAmount.getFormattedAmount();


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
        this.type = "expense";
        this.paid = paid;
    }
    getFormattedAmount() {
        return `-${this.amount} €`;
    }

}

const exampleExpense = new Expense("", 99, "");
exampleExpense.getFormattedAmount();




// Budget
class Budget {
    constructor() {

        this.entries = [];

    }
    addEntry(entry) {
        this.entries.push(entry);
        return this.entries;
    }

    getCurrentBalance() {

        let balance = 0;

        if (this.entries.length === 0) {
            return 0;
        }
        
        for (let i=0; i<this.entries.length;i++){
            let entry = this.entries[i];
            if (entry.type === "income"){
                balance += entry.amount;
            }else if (entry.type==="expense"){
                balance -=entry.amount;
            }
        } return balance
    }      
}
