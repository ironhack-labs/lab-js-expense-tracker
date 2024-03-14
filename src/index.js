// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return `${this.amount} €`;
    
    }
}
const moneyEntry = new Entry("14-03-2024", 50, "Gift");
const amountEntry = moneyEntry.getFormattedAmount();
console.log (moneyEntry);
console.log (amountEntry);

// Income
class Income extends Entry {
    constructor(date, amount, description, type = "income"){
        super(date, amount, description);
        this.type = type;
    }
}

const moneyIncome = new Income("16-04-2024", 2000, "Salary" );
const amountIncome = moneyIncome.getFormattedAmount();
console.log(moneyIncome);
console.log (amountIncome);

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid, type = "expense"){
        super(date, amount, description);
        this.paid = paid;
        this.type = type;
    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }
}
const moneyExpense = new Expense("01-05-2024", 700, "Rent", "Paid" );
const amountExpense = moneyExpense.getFormattedAmount();
console.log(moneyExpense);
console.log (amountExpense);


// Budget
class Budget {
    constructor(){
        this.entries = [];
    }
    addEntry(entry){
        this.entries.push(entry);
    }

    getTotalIncome(){
        let incomeTotal = 0;
        for (let i = 0; i < this.entries.length; i++){
            if (this.entries[i].type === "income"){
                incomeTotal += this.entries[i].amount;
            }
        }
        return incomeTotal;
    }

    getTotalExpenses(){
        let expenseTotal = 0;
        for (let i = 0; i < this.entries.length; i++){
            if (this.entries[i].type === "expense"){
                expenseTotal += this.entries[i].amount;
            }
        }
        return expenseTotal;
    }
    getCurrentBalance(){
        if(this.entries.length === 0){
            return 0;
        } else {
            return this.getTotalIncome() - this.getTotalExpenses(); 

        }
    }
}



