// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }   
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description);
        this.type = `income`;
    }
}


// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description)
        this.type = `expense`
        this.paid = paid
    }
    getFormattedAmount(){
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = []
    }

    addEntry(Entry){
        return this.entries.push(Entry);
    }

    getCurrentBalance(){
        if (this.entries.length === 0) return 0
        
        let total = 0
        this.entries.forEach((Entry) => {
            if (Entry.type === 'income'){
                total += Entry.amount
            } else {
                total -= Entry.amount
            }
        })
        return total
    }
   
    getFormattedEntries(){
       let newArray =[]
       this.entries.forEach((Entry)=>{
            if (Entry.type === `income`){
                newArray.push(
                    `${Entry.date} | ${Entry.description} | ${Entry.amount} €`
                )
            } else {
                newArray.push(
                    `${Entry.date} | ${Entry.description} | -${Entry.amount} €`
                )
            }

       }
    )
    return newArray
    }
}






