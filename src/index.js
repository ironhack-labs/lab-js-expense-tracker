// Entry
class Entry {
    constructor (date , amount , description){
        this.date = date ;
        this.amount = amount ;
        this.description = description ;
    }

    getFormattedAmount(){
        return `${this.amount} €` 
    }
}

// Income
class Income extends Entry {
    constructor (date , amount , description){
        super(date , amount , description);
        this.date = date ;
        this.amount = amount ;
        this.description = description ;
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor (date , amount , description , paid){
        super(date , amount , description , paid);
        this.date = date ;
        this.amount = amount ;
        this.description = description ;
        this.paid = paid ;
        this.type = "expense"
    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor (){
        this.entries = []
    }

    addEntry(newEntry){
        this.entries.push(newEntry)
    }

    getTotalIncome(){
        
        let sum = 0 ;

        this.entries.forEach((entry) => {
            if(entry.type === "income"){
                sum += entry.amount ;
            }
        })
        return sum 
        
    }

    getTotalExpense(){

        let sum2 = 0 ;

        this.entries.forEach((entry) => {
            if(entry.type === "expense"){
                sum2 += entry.amount ;
            }
        })
        return sum2 ;

    };    

    getCurrentBalance(){
        const totalIncome = this.getTotalIncome();
        const totalExpense = this.getTotalExpense();
        
        return totalIncome - totalExpense;

    }
}