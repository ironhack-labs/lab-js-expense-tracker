// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description || "";
    }
    getFormattedAmount(){
        return (`${this.amount} €`)
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense";
    }
    getFormattedAmount(){
        return (`-${this.amount} €`)
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
    getTotalIncome(){
        let totalIncome = 0;
        
        this.entries.forEach((entry)=>{
            if(entry.type==='income'){
                totalIncome += entry.amount;}
        })
        return totalIncome;
    }
    getTotalExpense(){
        let totalExpense = 0;
        
        this.entries.forEach((entry)=>{
            if(entry.type==='expense'){
                totalExpense += entry.amount;}
        })
        return totalExpense;
       
            
    }
    /* Extra */
    getTotal(type){
        let total = 0;
        if (type==="income"){
            this.entries.forEach((entry)=>{
                if(entry.type==='income'){
                    total += entry.amount;}
            })    
        } else {
            this.entries.forEach((entry)=>{
                if(entry.type==='expense'){
                    total += entry.amount;}
            })
        }
        return total;
    }
    getCurrentBalance(){
        if (this.entries.length===0){
            return 0;
        }
        const balance = this.getTotalIncome() - this.getTotalExpense();
        return balance;

    }
    /* Extra */
    getFormattedEntries(){
        let arrayIncome = [];
        let arrayExpenses = [];
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
}

let total = new Budget();
total.addEntry({ type: 'expense', amount: 50 });
total.addEntry({ type: 'income', amount: 200 });

console.log(total.getTotal("amount"));
