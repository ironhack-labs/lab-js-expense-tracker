// Entry

class Entry {
    constructor (date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount () {
        return `${this.amount} €`
    }
}

// Income

class Income extends Entry {
    constructor (date, amount, description) {
        super (date, amount, description);
        
        this.type = 'income';
    }    
}
    
// Expense

class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super (date, amount, description);
        
        this.type = 'expense';
        this.paid = paid;
    }    
    getFormattedAmount () {
        return `-${this.amount} €`
    }
}

// Budget

class Budget {
    constructor () {
        this.entries = [];
    }
    addEntry (entry) {
        this.entries.push (entry);
    }
    getCurrentBalance () {
        if (this.entries.length === 0) return 0;

        let total = 0;

        this.entries.forEach (function (element) {
            if (element.type === 'income') {
                total += element.amount;
            }
            if (element.type === 'expense') {
                total -= element.amount;
            }
        });
        return total;        
    }
    getFormattedEntries() {

        let formattedEntriesArr = [];

        this.entries.forEach (function (element) {
            if (element.type === 'income') {
                formattedEntriesArr.push (`${element.date} | ${element.description} | ${element.amount} €`);
               
            }
            if (element.type === 'expense') {
                formattedEntriesArr.push (`${element.date} | ${element.description} | -${element.amount} €`);
            }

            
        });  
        return formattedEntriesArr;
    }
}
