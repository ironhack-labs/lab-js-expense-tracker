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
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";
  }
  getFormattedAmount() {
    return `-${this.amount} €`;  // Override to include the minus sign
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
        let total = 0;
        for(let i = 0; i<this.entries.length; i++){
            const currentEntry= this.entries[i];
            if(currentEntry.type === 'income'){
                total += currentEntry.amount;
            }
            else if (currentEntry.type === 'expense'){
                total -= currentEntry.amount;
            }
        }
        return total;
    }
}
