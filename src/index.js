// Entry
class Entry {
    constructor(date,amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date,amount, description);
        this.type = "income"
    }
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description,paid){
        super(date,amount, description);
        this.type = "expense"
        this.paid = paid
    }

    getFormattedAmount(){
        return `-${this.amount} €`
    }
}

// Budget
class Budget {

    constructor(){
        this.entries = []
    }

    addEntry(entry){
        this.entries.push(entry)
    }

    getTotalIncome(){

        if(this.entries == 0){
            return 0
        }

        let total = 0;
        let arr = this.entries;

        arr.forEach(entry => {
            if (entry.type === "income") {
                total += entry.amount;
            }
        });
    
        return total;
    }

    getTotalExpense(){
        if(this.entries == 0){
            return 0
        }else{
            let total = 0;
            this.entries.forEach(entry => {
                if (entry.type === "expense") {
                total += entry.amount;
            }
        });
        return total;
        }
    }
    getCurrentBalance(){
        if(this.entries == 0){
            return 0
        }else{
            let totalIncome = 0;
            let totalExp = 0;
            this.entries.forEach(entry => {
                if (entry.type === "income") {
                    totalIncome += entry.amount;
                }else if(entry.type === "expense"){
                    totalExp +=  entry.amount
                }
            })
            return totalIncome - totalExp;
            }
        }
    
}
