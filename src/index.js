// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date,
        this.amount = amount,
        this.description = description
        
    }
    getFormattedAmount() {
        console.log(`${this.amount} €`);
        return(`${this.amount} €`);
    }

    //"100 €"
}
const firstEntry = new Entry("07/08/2024", 1500, "initial amount")
//console.log(firstEntry);
firstEntry.getFormattedAmount();
// Income
class Income extends Entry{
    constructor(date, amount, description) {
    super (date,amount, description)
    this.type = "income"; 
    }
}
// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid) {
    super (date,amount, description)
    this.type = "expense"; 
    this.paid = paid;
    }
    getFormattedAmount() {
        console.log(`-${this.amount} €`);
        return(`-${this.amount} €`);
    }
}
const expense1 = new Expense("02/07/2024",7,"Kebab",true);
// Budget
expense1.getFormattedAmount();
class Budget {
    entries = [];

    addEntry(entry){
        this.entries.push(entry);
    }
    
    getCurrentBalance(){
    let currentBalance = 0;
        if(this.entries.length === 0){
         currentBalance = 0   
        } else{
            for(let i=0; i<this.entries.length ; i++){
                if(this.entries[i].type === "income"){
                currentBalance += this.entries[i].amount;}
                else if (this.entries[i].type === "expense"){
                    currentBalance -= this.entries[i].amount;
                }
            }
        }
        console.log(currentBalance);

        return currentBalance;
    }
}
const firstIncome = new Income("07/08/2024", 1500, "initial income")
const myBudget = new Budget();
myBudget.addEntry(expense1);
myBudget.addEntry(firstIncome);
myBudget.getCurrentBalance();

