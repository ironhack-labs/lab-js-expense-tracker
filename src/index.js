// Entry
class Entry {
    constructor (date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount (){
       return this.amount + ' €';
    }
}

// Income
class Income extends Entry {
    constructor (date, amount, description){
        super(date, amount, description);
        this.type= 'income';
    };
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid){
        super (date, amount, description);
        this.paid = paid;
        this.type = 'expense';
    };
   getFormattedAmount (){
      // return '-' + this.amount + '€';
      // return '-' + this.amount + ' €';
      // return '- ' + this.amount + '€';
      // return '- ' + this.amount + ' €';
      // return ` -${this.amount}€`;
      // return `- ${this.amount} €`;
      // console.log(`- ${this.amount}€`)
      // return '-' + this.amount + '€';

      // this.amount=amount;
      // return `- ${amount} €`;
      // console.log(`- ${amount} €`)
      // console.log(`-${amount} €`)
      // console.log(`-${amount}€`)

        // this.amount = '';
        // return '-' + this.amount + '€';
        // return ` -${this.amount}€`

        this.amount= '-' + this.amount + '€';
        return this.amount;
    }
}

// Budget
class Budget {
    constructor (){
        this.entries= [];
    };

    addEntry (entry){
        this.entries.push(entry);
    };

    getTotalIncome (){
        this.income= 0;
        this.entries.forEach((entry) => {
             if (entry.type==='income'){
                this.income += entry.amount;
                
            };
        });
        return this.income;
    }
    getTotalExpense (){
      
     this.expense = 0;
        this.entries.forEach((entry) => {
            if (entry.type==='expense'){
                this.expense+= entry.amount;
                
            };
        });
        return this.expense
    };

    getCurrentBalance(){
      if (this.entries.length===0){
            return 0;
        };

        this.balance= 0;
        this.balance = this.getTotalIncome() - this.getTotalExpense();
        return this.balance;
    };   
    
    }

