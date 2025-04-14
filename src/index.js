// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = 'income';
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.type = 'expense';
        this.paid = paid;
    }
    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

// Budget
class Budget { 
    entries = []

    constructor(){
    }

    addEntry(newEntry){
        this.entries.push(newEntry);
    } 

    getCurrentBalance(){
        let totalIncome = 0;
        let totalExpenses = 0;

        this.entries.forEach(entry => {
            if (entry.type === 'income') {
                totalIncome += entry.amount;
            } else if (entry.type === 'expense') {
                totalExpenses += entry.amount;
            }
        });

        return totalIncome - totalExpenses;
    }

    getFormattedEntries() {
        const entrieList=[]
         this.entries.forEach(entry => {
            if (entry.type === 'expense') {
                entrieList.push( `${entry.date} | ${entry.description} | -${entry.amount} €`);
            } else if (entry.type === 'income'){
                entrieList.push( `${entry.date} | ${entry.description} | ${entry.amount} €`);
            }
        });
        // console.log(entrieList);
        return entrieList
    }

}
