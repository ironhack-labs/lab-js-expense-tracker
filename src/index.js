class Entry {
    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount(){
        return this.amount + " €";
    }
}

// const total = new Entry(2024, 20.99, "Hello");
// console.log(total.getFormattedAmount());

// Income
class Income extends Entry{
    constructor(date, amount, description){
        super(date,amount,description,);
        this.date = date;
        this.amount = amount;
        this.description = description;
        this.type = "income";
    }
}

const income1 = new Income(2024, 1000, "Salary");
console.log(income1);

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid){
        super(date,amount,description);
        this.paid = paid;
        this.type = "expense";
    }

    getFormattedAmount(){
        return "-" + this.amount + " €";
    }
}

// Budget
class Budget {
    
    constructor(){
        this.entries = [];
    }

    addEntry(newEntry){
        this.entries.push(newEntry);
    }

   


    getCurrentBalance(){
        if(!this.entries.length){
            return 0;
        }
    }

        
    getFormattedEntries(){
        this.entries.forEach((element) => {
            if(element > 0){
                return 
            }
            else{
                return     
            }
        })
    }
}


