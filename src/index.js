// Entry
class Entry {
    constructor (date, amount, description) {
        this.date = date; 
        this.amount = amount; 
        this.description = description; 
    }

    getFormattedAmount(){
        return (`${this.amount} €`);
    }

}   

// Income
class Income extends Entry {
    constructor (date, amount, description) {
        super(date); 
        this.amount = amount; 
        this.description = description;
        this.type = 'income'; 
    }  
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super(date); 
        this.amount = amount; 
        this.description = description;
        this.paid = paid;  
        this.type = 'expense';

    }
    getFormattedAmount(){
        return (`-${this.amount} €`);
    }
}


// Budget
class Budget {
    constructor (){
        this.entries=[];
    }

    addEntry(entry){
        this.entries.push(entry); 
    }

    getCurrentBalance() {
        return this.entries.reduce((acc, entry) => {
            if (entry instanceof Income) {
                return acc + entry.amount;
            } else if (entry instanceof Expense) {
                return acc - entry.amount;
            }
            return acc;
             }, 0);
        }
    }
    
    
    getFormattedEntries(){
        const formatEntries=[];
        this.entries.forEach((entry ) => {
            formatEntries.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount(entry)} €`)
        }); 
        return formatEntries; 
    }
}
