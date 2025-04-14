// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
       

    }

    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date,amount, description);
        this.type = "income";

    }
   
}

// Expense
class Expense extends Entry {
    constructor(date,amount,description,category){
        super(date, amount,description);
        this.type = "expense";
        this.paid = category;
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

    addEntry(entry){
     this.entries.push(entry);

    }

   /* getTotalIncome(){
      const incomes =  this.entries.filter(entry =>{
            console.log(entry);
            return entry.type === "income";
        });
       return incomes.reduce((total,current)=>{
            return total + current.amount;
        },0);
    }

    getTotalExpense(){
        const expenses =  this.entries.filter(entry =>{
            console.log(entry);
            return entry.type === "expense";
        });
       return expenses.reduce((total,current)=>{
            return total + current.amount;
        },0);

    }*/

    getTotal(type){
        const expenses =  this.entries.filter(entry =>{
            return entry.type === type;
        });
       return expenses.reduce((total,current)=>{
            return total + current.amount;
        },0);

    }

    getCurrentBalance(){
        if(!this.entries.length){
            return 0;
        }else{
            return this.getTotalIncome() - this.getTotalExpense();

        }
    }

    getFormattedEntries(){
       
        return this.entries.map(entry =>{
            if(entry.type === "income"){
                console.log(entry);
                return `${entry.date} | ${entry.description} | +${entry.amount} €`
            }else if(entry.type === "expense"){
                return `${entry.date} | ${entry.description} | -${entry.amount} €`

            }  
        })
    }
}

const budget = new Budget();
budget.addEntry(new Income("Today",200,"salary"));
budget.addEntry(new Income("Today",400,"salary"));
budget.addEntry(new Expense("today", 150,"shoes"));

console.log(budget.getTotal("income"));
console.log(budget.getTotal("expense"));
console.log(budget.getFormattedEntries());

