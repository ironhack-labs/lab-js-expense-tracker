// Entry
class Entry {
    constructor (date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    
    getFormattedAmount() {
        //if(!this.getFormattedAmount === undefined) {
            return `${this.amount} €`
        //} 
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense";
    }
    getFormattedAmount(){
        let invertedAmount = -1 * this.amount;
        return `${invertedAmount} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
        }

        addEntry(NewEntry) {
            this.entries.push(NewEntry); 
        }  

        getCurrentBalance() {
            let balance = 0
            this.entries.forEach((element) => {
                if (element.type === "expense") {
                    balance -= element.amount;
                }
                
                else if (element.type === "income") {
                    balance += element.amount;
                }

                console.log(element.amount);
            })

            return balance;
        }
        
        getFormattedEntries() {
            let FormattedArray = []
                this.entries.forEach((element) => {
                
                if (element.type === "expense") {
                let FormattedEntry = `${element.date.toUpperCase()} | ${element.description} | -${element.amount} €`  
                FormattedArray.push(FormattedEntry)
                }

                if (element.type === "income") {
                    let FormattedEntry = `${element.date.toUpperCase()} | ${element.description} | ${element.amount} €`  
                    FormattedArray.push(FormattedEntry)
                }

                })

            console.log(FormattedArray)
            return FormattedArray
        }
    }



//Iteration 5