const EntryType = Object.freeze({
    Income : 'income',
    Expense : 'expense',
});


// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  getFormattedAmount() {
    return `${this.amount} €`;
  }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description);
        this.type = EntryType.Income;
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description);
        this.paid =  paid;
        this.type = EntryType.Expense;
    }

    getFormattedAmount(){
        return '-' + super.getFormattedAmount();
        // I was just showing how to call a parent method inside an extended class,
        // you should definitly just use String interpolation to avoid another function call.
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
        return this.entries.reduce((acc, curr) => curr.type === EntryType.Expense ? acc - curr.amount : acc + curr.amount, 0);
    }

    getFormattedEntries(){
        const result = [];
        this.entries.forEach((entry) => result.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`));
        console.log(result);
        return result;
    }

}
