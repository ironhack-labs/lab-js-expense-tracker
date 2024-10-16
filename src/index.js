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
        this.amountSign = amount; 
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
        this.amountSign = - amount; 

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

    getCurrentBalance(){
        if (this.entries.length === 0){
            return 0;
        }
     const balance = this.entries.reduce((acc, entry) => {
        return acc + entry.amountSign;
     },0); 
     return balance;
    }
    
    
    getFormattedEntries(){
        const formatEntries=[];
        this.entries.forEach((entry ) => {
            formatEntries.push(`${entry.date} | ${entry.description} | ${entry.amountSign} €`)
        }); 
        return formatEntries; 
    }
}
