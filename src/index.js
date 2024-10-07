// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description ;
    }

    getFormattedAmount(){
        return `${this.amount} €`;
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description); // pass the arguments to the super() method so the parent knows the 3 arguments !
        this.type = "income";
    }
    
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense";
    
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

    addEntry(newEntry){
        if(newEntry.type === "income" || newEntry.type === "expense") {
            //this.newEntry = newEntry;
            this.entries.push(newEntry);
        } 
    }

    getCurrentBalance(){
        if(this.entries.length === 0){
            return 0
        } else {
            let balance = 0
            for (let i=0; i<this.entries.length ; i++){
                balance = (this.entries[i].type === "expense" ? 
                    balance - this.entries[i].amount :
                    balance + this.entries[i].amount
                )

            }
                return balance ;
        }s

    }

    getFormattedEntries(){

        console.log(this.entries); // return an array with the objects of class Entry
        
        let formattedEntries = [] // an array empty
        this.entries.forEach( function(element){
            let formattedString = `${element.date} | ${element.description} | ${element.getFormattedAmount()}`;
            // element is an Object of Class Entry, we access first the property amount and then modify it by calling the right method !
            formattedEntries.push(formattedString)

        })
       
        console.log(formattedEntries);
        return formattedEntries ;
    }
}
