// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount () {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry{
    constructor(date, amount, description) {
        super(date, amount, description)

        this.type = "income";
    }
    
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description)
        this.paid = paid;
        this.type = "expense"
    }
    getFormattedAmount () {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }
   
    addEntry(entry) {
        this.entries.push(entry)

    }
    getTotalIncome() {
        let totalIncome = 0;
        this.entries.forEach((element) => {
          if (element.type === "income"){
            totalIncome += element.amount;
          }
        })
        return totalIncome
    }
    getTotalExpense() {
        let totalExpenses = 0;
        this.entries.forEach((element) => {
            if(element.type === "expense") {
                totalExpenses += element.amount
            }
        })
     return totalExpenses
    }
    getCurrentBalance() {
         let currentBalanceAmount = 0;
         let totalExpensesAmount = this.getTotalExpense();
         let totalIncomeAmount = this.getTotalIncome();
         currentBalanceAmount = totalIncomeAmount - totalExpensesAmount;
         
         return currentBalanceAmount;
    }
    
}
