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
    constructor (date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry{
    constructor (date, amount, description, paid) {
        super(date, amount, description, paid);
        this.type = "expense";
        this.paid = paid;
        this.amount = amount;
    }

    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    } 

    addEntry(entry){
        this.entries.push(entry);
    }

    getCurrentBalance(){
        let incSum = 0;
        let expSum = 0;
        if (this.entries.length === 0){
            return 0;
        } else {
            for (let i = 0; i < this.entries.length; i++) {
                if (this.entries[i].type === "income") {
                    incSum += this.entries[i].amount;
                } else if (this.entries[i].type === "expense") {
                    expSum += this.entries[i].amount;
                }
            }
        }
        return incSum-expSum;
    }

    getFormattedEntries() {
        const strArr = [];
        const self = this;
    
        this.entries.forEach(function(entry) {
            if (entry.type === "income") {
                let formattedEn = `${entry.date} | ${entry.description} | ${entry.amount} €`;
                strArr.push(formattedEn);
            } else if (entry.type === "expense") {
                let formattedEn = `${entry.date} | ${entry.description} | -${entry.amount} €`;
                strArr.push(formattedEn);
            }
        });
    
        return strArr;
    }
    
}

