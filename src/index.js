// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return `${this.amount} €`;
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
class Expense extends Entry{
    constructor(date, amount, description, paid){
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense";
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
    addEntry(entryObj){
        this.entries.push(entryObj);
    }
    getCurrentBalance(){
        let sum = 0;
        for(const entry of this.entries){
            entry.type === "income" ? sum += entry.amount : sum -= entry.amount;
        }
        return sum;
    }
    getFormattedEntries(){
        let formattedEntries = [];
        this.entries.forEach(function(entry){
            formattedEntries.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`)
        })
        return formattedEntries;
    }
}
