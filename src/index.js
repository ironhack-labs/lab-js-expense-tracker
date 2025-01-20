// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    };
    getFormattedAmount(){
        return `${this.amount} €`;
    };
}

// Income
class Income extends Entry{
    constructor(date, amount, description){
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry{
    constructor(date,amount,description,paid){
        super(date,amount,description);
        this.paid = paid;
        this.type = "expense"
    };
    getFormattedAmount(){
        return `-${this.amount} €`;
    };
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    };

    addEntry(entry){
        this.entries.push(entry);
    };

    getCurrentBalance(){
        if(!this.entries.length){
            return 0;
        }else{
            let total = 0;
            this.entries.forEach((entry)=>{
                if(entry.type ==="income"){
                    total+=entry.amount;
                }else if(entry.type === "expense"){
                    total-=entry.amount;
                }
                
            });
            return total;
        }
    };

    getFormattedEntries(){
        if(!this.entries.length){
            return 0;
        }else{
            let statement = [];
            this.entries.forEach((entry)=>{
                if(entry.type ==="income"){
                    statement.push(`${entry.date} | ${entry.description} | +${entry.amount} €`);
                }else if(entry.type === "expense"){
                    statement.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
                }
            });
            return statement;
        }
    };
}

// test case keep showing error for the last section of the bonus itr, checking here.
const income1 = new Income("2024-06-17", 10, "other");
const income2 = new Income("2024-06-17", 3456, "salary");
const expense1 = new Expense("2024-06-17", 100, "food", true);
const expense2 = new Expense("2024-06-17", 99, "food", true);
const budget = new Budget();
budget.addEntry(income1);
budget.addEntry(income2);
budget.addEntry(expense1);
budget.addEntry(expense2);
console.log(budget.getFormattedEntries());


exp=[
    "2024-06-17 | other | 10 €",
    "2024-06-17 | salary | 3456 €",
    "2024-06-17 | food | -100 €",
    "2024-06-17 | food | -99 €",
]
budget.getFormattedEntries().forEach((b)=>{
    exp.forEach((e)=>{
        console.log(b===e)
    });
});