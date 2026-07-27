// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount(){
        return this.amount+" €";
    }
}

// Income
class Income extends Entry{
    constructor(date, amount, description){
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description);
        this.type = "expense";
        this.paid = paid;
    }

    getFormattedAmount(){
        const amount = super.getFormattedAmount();
        return `-${amount}`;
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
        if(this.entries.length === 0){
            return 0;
        }
        let totalEntry = 0;
        this.entries.forEach((entry) => {
            if(entry.type === "income"){
                totalEntry += entry.amount;
            }else{
                totalEntry -= entry.amount;
            }
        });
        return totalEntry;
    }

    getFormattedEntries(){
        let eachEntry = [];
        this.entries.forEach((entry) => {
            eachEntry.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`);
        });
        return eachEntry;
    }
}
