// Entry


class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return this.amount = `${this.amount} €`;
    }
}

class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description)
        this.date = date;
        this.amount = amount;
        this.description = description;
        this.type = "income";
    }
}

class Expense extends Entry {
    constructor(date, amount, description, category) {
        super(date, amount, description, category)
        this.date = date;
        this.amount = amount;
        this.description = description;
        this.paid = this.paid;
        this.type = "expense";

    }

    getFormattedAmount() {
        return this.amount = `-${this.amount} €`;
    }
}



// Budget
class Budget { 
constructor(){
   this.entries = [];
}
addEntry(Income) {
    this.entries++;
}

getCurrentBalance() {

    //if (this.Entry > 0)
   return this.Income - this.Expense
    //} else {
       // }return 0;

}
}

