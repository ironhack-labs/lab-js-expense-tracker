// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return (`${this.amount} €`);
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
        return (`-${this.amount} €`);
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }
    addEntry(newEntry){
        this.entries.push(newEntry);
    }
    getCurrentBalance(){
        if (this.entries.length === 0){
            return (0);
        }
        else{
            let income = 0;
            for (let elem of this.entries){
                // console.log(elem.type, elem.amount)
                if (elem.type === "income"){
                    income += elem.amount;
                }
                else if(elem.type === 'expense'){
                    income -= elem.amount;
                }
            }
            return (income)
        }
    }
    getFormattedEntries(){
        const res = []
        for (let elem of this.entries){
            console.log(elem.date, elem.description, elem.getFormattedAmount())
            res.push(`${elem.date} | ${elem.description} | ${elem.getFormattedAmount()}`);
        }
        return (res);
    }
}
