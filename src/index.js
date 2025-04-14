// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    return `${this.amount} €`;
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description, paid);
    this.type = "expense"
   ;
  }
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {}




getCurrentBalance() {
    console.log(this.entries);
    // clausula de guardia: controlamos si el amount de entrada es 0
    if (this.entries.length === 0){
        return 0;
    }
    //si no es 0 iteramos por el array
    let sumIncome = 0;
    let sumExpense = 0;

    for (let i = 0; i < this.entries.length; i++) {
        if (this.entries[i].type === "income") {
            sumIncome +=  this.entries[i].amount;
        } else if (this.entries[i].type === "expense") {
            sumExpense +=  this.entries[i].amount;
        }  
    }

    let balance = sumIncome - sumExpense;
    console.log(balance);
    return balance;
}
