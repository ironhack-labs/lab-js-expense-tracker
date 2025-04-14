// Entry
class Entry {
    constructor(date, amount, description){
        this.date           = date;
        this.amount         = amount;
        this.description    = description;
    }

    getFormattedAmount (){
        let formattedAmount = `${this.amount} €`;
        return formattedAmount;
    }

}

// Income
class Income extends Entry{
    constructor(date, amount, description){
        super (date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid ){
        super (date, amount, description);
        this.paid = paid;
        this.type = "expense";
    }

    getFormattedAmount (){
        let formattedAmount = `-${this.amount} €`;
        return formattedAmount;
    }
}

// Budget
class Budget {
    constructor(){
        this.entries  = [];
    }

    addEntry(newEntry){
        this.entries.push(newEntry);
    }

    getCurrentBalance(){
        let balance = 0;
        if (this.entries.length === 0){
            return balance;
        }

        this.entries.forEach(entry =>{
            if (entry.type === "income"){
                balance += entry.amount;
            }
            else{
                balance -= entry.amount;
            }
        })

        return balance;
    }

    getFormattedEntries(){
        let formattedAmountArr = [];

        this.entries.forEach(entry =>{
            let formattedStr;
            if (entry.type === "income"){
                formattedStr = `${entry.date} | ${entry.description} | ${entry.amount} €`;
            }
            else{
                formattedStr = `${entry.date} | ${entry.description} | -${entry.amount} €`;
            }
            formattedAmountArr.push(formattedStr);
        })

        return formattedAmountArr;
    }
}
