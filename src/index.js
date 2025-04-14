// Entry
class Entry {
    constructor(date,amount,description){
        this.date=date;
        this.amount=amount;
        this.description=description;
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry{
    constructor(date,amount,description){
        super(date,amount,description);
        this.type='income';
    }
}

// Expense
class Expense extends Entry{
    constructor(date,amount,description,paid){
        super(date,amount,description,paid);
        this.type='expense';
        this.paid=paid;
    }
    getFormattedAmount(){
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor(){
        this.entries=[];
    }
    addEntry(entry){
        this.entries.push(entry);
    }
    getCurrentBalance(){
        if(this.entries.lenght===0){
            return 0;
        }
        let totalIncome=0;
        let totalExpense=0;
        for(const entry of this.entries){
            if(entry.type==='income'){
                totalIncome+=entry.amount;
            }
            else if(entry.type==='expense'){
                totalExpense+=entry.amount;
            }
        }
       return totalIncome-totalExpense;
    }
    getFormattedEntries(){
        const formattedEntries=[];
        this.entries.forEach(entry=>{
            constformattedAmount=entry.getFormattedAmount();
            const formattedEntry=`${entry.date}|${entry.description}|${formattedAmount}`;
            formattedEntries.push(formattedEntry);
        });
        return formattedEntries;
    } 
}
