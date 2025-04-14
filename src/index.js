class Entry {
    constructor(dateValue, amountValue, descriptionValue){
        this.date = dateValue;
        this.amount = amountValue;
        this.description = descriptionValue;
    }

    getFormattedAmount(){
        let full_amount = `${this.amount} €`;
        return full_amount
    }
}



class Income extends Entry{
    constructor(dateValue, amountValue, descriptionValue){
        super(dateValue, amountValue, descriptionValue)
        this.date = dateValue;
        this.amount = amountValue;
        this.description = descriptionValue;
        this.type = 'income';
    }
}



class Expense extends Entry{
    constructor(dateValue, amountValue, descriptionValue, paid){
        super(dateValue,amountValue,  descriptionValue)
        this.amount = amountValue;
        this.paid = paid;
        this.type = "expense"
    }

    getFormattedAmount(){
        let amount = `-${this.amount} €`;
        return amount;
    }
}




class Budget {
    constructor(){
        this.entries = [];
    }

    addEntry(entry){
        this.entries.push(entry);
    }



   // should return the difference between the total income and the total expense of all entries
    getCurrentBalance(){
        if(this.entries.length === 0){
            return 0;
        }

        
        let totalIncome = 0;
        this.entries.forEach((eachEntry)=>{
            totalIncome += eachEntry.amount;
        });


        let totalExpense = 0;
        this.entries.forEach((eachEntry)=>{
            totalExpense += eachEntry.amount;
        });

        let diferenceAmounts = totalIncome - totalExpense;
        return diferenceAmounts;

    }

}
