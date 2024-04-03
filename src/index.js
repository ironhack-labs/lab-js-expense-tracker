// Entry
class Entry {
    constructor(date, amount, description){
        this.date= date;
        this.amount= amount;
        this.description= description;
    }

    getFormattedAmount(){
        return (`${this.amount} €`);
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description);
        this.type= "income";
    }    
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description,paid){
        super(date, amount, description);
        this.paid=paid;
        this.type= "expense";
    }

    getFormattedAmount(){
        return (`-${this.amount} €`);
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
       let auxSumExpense =0;

        if (this.entries.length===0){
            return 0;
        }
        
        this.entries.forEach(function(entry){
            if (entry.type === "expense"){
                auxSumExpense -=entry.amount;
                console.log(entry.amount)
            } else if (entry.type=== "income"){
                auxSumExpense +=entry.amount;
            }})
            console.log("dont")

        // for(let i =0; i<this.entries.length;i++){
        //     if(this.entries[i].type ==="expense"){
        //         auxSumExpense -= this.entries[i].amount
        //         console.log(auxSumExpense,"test")
        //     }
        //     else{
        //         auxSumExpense += this.entries[i].amount
        //     }
        // }
        // console.log(auxSumExpense)
        return auxSumExpense;
    }
}


// const income1 = new Income("2024-06-17", 200, "food");
// console.log(income1)
// const income2 = new Income("2024-06-17", 200, "food");
// const expense1 = new Expense("2024-06-17", 100, "food", true);

// let test = new Budget()
// test.addEntry(income1)
// test.addEntry(income2)
// test.addEntry(expense1)

// test.getCurrentBalance()