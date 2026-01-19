// Entry
class Entry {
    constructor(date, amount, description){
        this.date=date;
        this.amount=amount;
        this.description=description;
    }
    getFormattedAmount(){
        return `${this.amount} €`;
    }
}

// Income
class Income extends Entry{
    constructor(date, amount, description){
        super(date, amount,description)
        this.type="income"
    }
}

// Expense
class Expense extends Entry {
     constructor(date, amount, description, paid){
        super(date, amount,description)
        this.paid=paid;
        this.type="expense"
    }
    getFormattedAmount(){
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor(){
      this.entries=[];
    }
    addEntry(IncomeOrExpense){
      this.entries.push(IncomeOrExpense)
    }
    getCurrentBalance(){
       if(this.entries.length===0){
          return 0
       }
    
        let totIncome=0;
        let totExpense=0;
        for(let i=0;i<this.entries.length;i++){
            let obj=this.entries[i]
            
            if(obj.type==="income"){
                totIncome+=obj.amount;
            }else if(obj.type==="expense" && !obj.paid){
                totExpense+=obj.amount
            }
        }
        let result=totIncome-totExpense
        return result

    }
}
const theIncomeSells = new Income("23-05-2025", 200, "amount got from selling clothes this day")
const theExpenseFood = new Expense("23-05-2025",180,"amount spent for living this day", false)
const theExpenseTravel = new Expense("23-05-2025",80,"amount spent for living this day", true)
const budget= new Budget();

budget.addEntry(theIncomeSells)
budget.addEntry(theExpenseFood)
budget.addEntry(theExpenseTravel)
budget.getCurrentBalance()
console.log(budget.getCurrentBalance())