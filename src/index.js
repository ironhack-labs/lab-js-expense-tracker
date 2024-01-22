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


    // Bonus 6
    getTotal(typeOfEntry){
        let sum = 0;
        this.entries.forEach((entry) => {
            if(typeOfEntry === 'income'){
                sum+=entry.amount;
            }
            else if(typeOfEntry === 'expense'){
                sum+=entry.amount;
            }
        });
        return sum;
    }

    // Bonus 6
    getFormattedAmount(){
        arrayIncome = [];
        arrayExpenses = [];

        this.entries.forEach(entry => {
            if(entry.type === 'income'){
                arrayIncome.push(`${entry.date} | ${entry.description} | ${entry.amount} €`)
            }
            else if(entry.type === 'expense'){
                arrayExpenses.push(`${entry.date} | ${entry.description} | ${entry.amount} €`)
            }
        });

        return arrayIncome, arrayExpenses
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
