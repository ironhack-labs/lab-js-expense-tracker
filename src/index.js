// Entry
class Entry {

    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry{

    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry{

    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.type = "expense";
        this.paid = paid;
    }

    getFormattedAmount(){
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {

    constructor(){
        this.entries = [];
    }

    addEntry(entry){
        if(entry instanceof Income || entry instanceof Expense){
            this.entries.push(entry);
        }
    }

    getCurrentBalance(){
        let totalIncome = 0;
        let totalExpense = 0;
        
        if(this.entries.length === 0) {
            return 0;
        }

        for (let i= 0; i < this.entries.length; i++){
            const entry = this.entries[i];
            
            if(entry instanceof Income) {
                totalIncome += entry.amount;
            } else {
                totalExpense += entry.amount;
            }
        }
        const balance = totalIncome - totalExpense;
        return balance;
    }

    getFormattedEntries(){
        const result = [];
        this.entries.forEach(entry => {
            
            if (entry instanceof Income) {
                result.push(`${entry.date} | ${entry.description} | ${entry.amount} €`);
            } else {
                result.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
            }
        })
        return result;
    }
}



