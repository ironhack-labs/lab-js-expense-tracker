// Entry
class Entry {constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount(){
    return `${this.amount} €`}
  }



// Income
class Income extends Entry {constructor(date, amount, description) {
    super(date, amount, description); 
   }
   type = "income";
}

// Expense
class Expense extends Entry{
constructor(date, amount, description,paid)
{
 super(date, amount, description);
 this.paid = paid;
}

type = "expense"
getFormattedAmount() {
    return `-${this.amount} €` 
}
}

// Budget
class Budget{
    constructor(){}
entries= [];

addEntry(entry)
{this.entries.push(entry)};
getCurrentBalance()
{console.log(this.entries)
    let incomeSum=0;
    let expenseSum=0;
if(!this.entries.length) {return 0}
else 
for(let i=0; i<this.entries.length; i++)
{
if(this.entries[i].type == "income")
    {incomeSum+=this.entries[i].amount}
if (this.entries[i].type == "expense")
    {expenseSum+=this.entries[i].amount}
}
return incomeSum-expenseSum
 //else incomeSum+=this.entries.Income - expenseSum+=this.entries.Expense   

}   
  
}
