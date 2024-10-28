// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description 
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry{
    constructor(date, amount, description){
        super(date, amount, description);
        this.type = "income"
    }
    // getFormattedAmount(){
    //     return `${this.amount} €`
    // }
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description,paid){
        super(date, amount, description);
        this.type = "expense";
        this.paid = paid ; 
    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }
    addEntry(newEntry){
        this.entries.push(newEntry)

    }
    getCurrentBalance(){
        if (!this.entries.length){
            return 0;
        }
        let balance = 0;
        this.entries.forEach((entry)=>{
            if (entry.type === "income") {
                    balance += entry.amount
            }
            else {
                balance -= entry.amount
            }

        })
        return balance;
    }

    getFormattedEntries(){
        const arrOfStr = [];

        this.entries.forEach((entry)=>{
            if (entry.type === "income") {
                arrOfStr.push(`${entry.date} | ${entry.description} | ${entry.amount} €`)
            }
            else {
                arrOfStr.push(`${entry.date} | ${entry.description} | -${entry.amount} €`)
            }

        })

        return arrOfStr;
    }


}
