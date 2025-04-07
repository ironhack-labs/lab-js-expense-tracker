// Entry
class Entry {
    constructor (date, amount, description) {
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
    constructor (date, amount, description) { 
        super (date, amount, description);
        
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        
        super (date, amount, description, paid)
        this.paid = paid;

        this.type ="expense";
    }

    getFormattedAmount() {
            return `-${this.amount} €`;
        }
    }


// Budget
class Budget {
    constructor  (){
        this.entries = [];
    }

    addEntry(entry) {
        this.entries.push(entry);
    }

    getCurrentBalance() {
        if (this.entries == 0) {
            return 0;
        }

       let balance = 0;

       for (let i = 0; i < this.entries.length; i++) {
        const entry = this.entries[i];
        balance += entry.type === "income" ? entry.amount : -entry.amount;
        }

        return balance;

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
