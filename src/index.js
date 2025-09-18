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
        super(date, amount, description);
        this.type="income";
    }
}




// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid){
        super(date, amount, description);
        this.type="expense";
        this.paid=paid;
    }
    getFormattedAmount(){
        const negativeAmount=(-1)*this.amount;
        return `${negativeAmount} €`
    }
}

// const newNEw = new Expense ("01-01-2025", 99, "Talho", true);
// console.log(newNEw);


// Budget
class Budget {
    constructor(){
        this.entries=[];
    }
    
    addEntry(input){
        this.entries.push(input);
    }

    getCurrentBalance(){
        let totalBalance = 0;
        if(this.entries.length===0){
            return 0;
        } else {
            for (let each_input of this.entries){
                const getAmount = each_input.amount;
                if (each_input.type==="income"){
                    totalBalance += getAmount;
                } else if (each_input.type==="expense") {
                    totalBalance -= getAmount;                   
                }
            }
        }
        return totalBalance;
    }

    getFormattedEntries(){
        const newArray=[];
        this.entries.forEach((element) => {
            const amountAccording=0;
            if (element.type==="income"){
                amountAccording=element.amount;
            } else if (element.type==="expense") {
                amountAccording=(-1)*element.amount;
            }            
            const string = `${element.date} | ${element.description} | ${amountAccording} €`;
            newArray.push(string);
        })
        return newArray;
    }
}
