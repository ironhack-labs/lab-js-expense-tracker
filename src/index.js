// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
        }

        getFormattedAmount(){
            return `${this.amount} €`;
        }
    
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description);
        this.type = "expense",
        this.paid = paid;
    }

    getFormattedAmount(){
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }

    addEntry(entry){
        return this.entries.push(entry);
    }

    getCurrentBalance(){
        if(this.entries.length === 0){
            return 0;
        }
        let amount = this.entries.reduce((acc, entry, index) => {
            if(entry.type==="income"){
                acc += entry.amount;
            }else if(entry.type==="expense"){
                acc -= entry.amount;
            }
            console.log(acc, index);
            return acc;
        }, 0);
        return amount;
    }

    getFormattedEntries(){
        let fe = [];
        this.entries.forEach(entry=>{
            if(entry.type==="income"){
                fe.push(entry.date + " | " + entry.description + " | " + entry.amount + " €");
            }else if(entry.type==="expense"){
                fe.push(entry.date + " | " + entry.description + " | -" + entry.amount + " €");
            }
        });
        return fe;
    }
}

let income1 = new Income("01/01/2024", 160, "Wages");

console.log(income1);
console.log(income1.getFormattedAmount(income1.amount));

let expense1 = new Expense("01/01/2024", 10, "Lunch");
console.log(expense1);
console.log(expense1.getFormattedAmount(expense1.amount));

let budget = new Budget();
budget.addEntry(income1);
budget.addEntry(expense1);

console.log(JSON.stringify(budget));

let amount = budget.getCurrentBalance()
console.log('budget', amount);

let formattedEntries = budget.getFormattedEntries();
console.log(formattedEntries);