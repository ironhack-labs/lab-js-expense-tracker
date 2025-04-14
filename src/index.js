// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return `${this.amount} €`;        
    }

}

// Income
class Income extends Entry {
    type;
    constructor(date, amount, description){
        super(date, amount, description);
        this.type = 'income';
    }
}

// Expense
class Expense extends Entry{
    paid;
    type;
    constructor(date, amount, description, category){
        super(date, amount, description);
        this.paid = category;
        this.type = 'expense';
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
    addEntry(Entry){
        this.entries.push(Entry);
    }
    getCurrentBalance(){
        let balance = 0;
        if(this.entries.length === 0){
            return balance;
        } else{
            this.entries.forEach(function (entry){
                if(entry.type == 'expense'){
                    balance -= entry.amount;
                } else if( entry.type == 'income'){
                    balance += entry.amount;
                }

            });
            return balance;
        }
    }
    getFormattedEntries(){
        let result = [];
        this.entries.forEach(function (entry){
            if(entry.type == 'expense' || entry.type == 'income'){
                result.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`);
            }
        });
        return result;
    }
}
