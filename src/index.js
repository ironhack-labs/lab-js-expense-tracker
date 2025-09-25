// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
        //return "100 €";
        return `${ this.amount} €`;

    }
}

// Income


class Income extends Entry{
    constructor(date, amount, description) {
    super(date); //call parent constructor
       this.amount = amount;
       this.description = description;
       this.type = "income";
       
       
    }
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid) {
        super(date);
        this.description = description;
        this.amount = amount;
        this.paid = paid;
        this.type = "expense";
    }
    getFormattedAmount() {
        return `-${this.amount} €`;
    }
    }


// Budget
class Budget {
    constructor()
    {this.entries = [];}

addEntry(entry){
    this.entries.push(entry);
}
getCurrentBalance() {
    if(this.entries.length === 0 ){
        return 0;
    }
    let incomeTotal = 0;
    let expenseTotal = 0;

    this.entries.forEach(entry => {
        if (entry.type === "income"){
            incomeTotal += entry.amount;
        }else if(entry.type === "expense"){
            expenseTotal += entry.amount;
        }
       
    });
     return incomeTotal - expenseTotal;
}
getFormattedEntries() {
    const formattedEntries = [];

    this.entries.forEach(entry => {
        formattedEntries.push(
            `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
        );
    }

    );
    return formattedEntries;
}
}