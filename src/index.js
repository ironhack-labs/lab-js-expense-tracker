// Entry
class Entry {
    constructor(date, amount, description){
        this.date=date;
        this.amount= amount;
        this.description= description;
    }
    getFormattedAmount(){
        return `${this.amount } €`;
    }
        
    }

//Income // 

class Income extends Entry {
    constructor(date, amount, description, ){
        super(date,amount, description,);
        this.type= 'income';
    }

}

// Expense
class Expense extends Entry {
    constructor(date, amount, description,paid){
        super( date,amount,description,paid);
        this.type='expense';
        this.paid= paid;

    }
    getFormattedAmount(){ 
        return `-${this.amount } €`;
        
    }
}

// Budget

class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry(entry) {
        this.entries.push(entry);
    }
    getCurrentBalance(){
        let totalIncome= 0;
        let totalExpense= 0;
        
        for(const entry of this.entries){
            if(entry.type === 'income'){
                totalIncome += entry.amount;
            }else if(entry.type ==='expense'){
                totalIncome+= entry.amount;
            }
            
        }
        
        
        return totalIncome-totalExpense;
    };
}



    








    // Calculate and return the difference between total income and total expenses
    




// Example of using the Budget cl


/*class Budget {

 constructor() {
        this.incomes = [];
        this.expenses = [];

       

}
addIncome(amount, description) {
    this.incomes.push({ amount, description });
}

addExpense(amount, description){
    this.expenses.push({amount,description});
}

addEntry(type, amount, description) {
    if (type === 'income') {
        this.addIncome(amount, description);
    } else if (type === 'expense') {
        this.addExpense(amount, description);
    } else {
        console.error('Invalid entry type. Use "income" or "expense".');
    }
}
}*/