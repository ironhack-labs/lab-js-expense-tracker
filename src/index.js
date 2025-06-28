// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount() {
     return (`${this.amount} €`);
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
    constructor(date, amount, description, paid, category) {
        super(date, amount,description);
        this.type = "expense";
        this.paid = paid;
        this.category = category;
             
    }
   
    getFormattedAmount() {
        return (`-${this.amount} €`);
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }

    addEntry(entry){
      this.entries.push(entry);3

    };
    getCurrentBalance(){
    if (this.entries.length === 0) {
        return 0;
    }
    let income = 0;
    let expense = 0;
    for (let i = 0; i < this.entries.length; i++){
        if (this.entries[i].type === "income") {
            income += this.entries[i].amount;
        } else if (this.entries[i].type === "expense") {
            expense += this.entries[i].amount;
        }
     }
     const balance = income - expense;
     return balance;
    }


getFormattedEntries() {
        if (this.entries.length === 0) {
            return [];
        }
        let formatted = [];
        this.entries.forEach ((entry) => {
            if (entry.type === "income") {
                formatted.push(`${entry.date} | ${entry.description} | ${entry.amount} €`);
            } else if (entry.type === "expense") {
                formatted.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
            }
        });
        return formatted;
    } 
}