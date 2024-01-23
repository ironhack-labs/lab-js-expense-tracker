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
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description);
        this.type = 'income';
    }
}


//Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description);
        this.type = 'expense';
        this.paid = paid;
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

    addEntry(newEntry){
        this.entries.push(newEntry);
    }


    // Bonus 5
    getTotal(typeOfEntry){
        let sum = 0;
        this.entries.forEach((entry) => {
            typeOfEntry 
            if(entry.type === typeOfEntry){
                sum+=entry.amount;
            }
        });
        return sum;
    }

    // Bonus 6 - Receives an array with objects (entries), and organizes them
    getFormattedEntries() {
        let formattedEntries = [];
    
        this.entries.forEach(entry => {
          if (entry.type === 'income') {
            formattedEntries.push(`${entry.date} | ${entry.description} | +${entry.amount} €`);
          } else if (entry.type === 'expense') {
            formattedEntries.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
          }
        });
    
        return formattedEntries;
      }

    getTotalIncome(){
        let sum = 0;
        this.entries.forEach((entry) => {
            if(entry.type === 'income'){
                sum+=entry.amount;
            }
        });
        return sum;
    }

    getTotalExpense(){
        let sum = 0;
        this.entries.forEach((entry) => {
            if(entry.type === 'expense'){
                sum+=entry.amount;
            }
        });
        return sum;
    }

    getCurrentBalance(){
        if(this.entries.length === 0){
            return 0
        }
        let balance = this.getTotalIncome() - this.getTotalExpense()
        return balance
    }
}