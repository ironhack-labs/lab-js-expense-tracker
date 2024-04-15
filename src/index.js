// Entry
class Entry {
    constructor(date, amount, description) {
        this.date=date
        this.amount=amount
        this.description=description
    }
    getFormattedAmount(){
        if(this.type==="expense"){
            return `-${this.amount} €`
        }
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description)
        this.type="income";        
    }
}

// Expense
class Expense extends Entry{
    constructor(date, amount, description, paid) {
        super(date, amount, description,paid)
        this.paid=paid
        this.type="expense";        
    }
}

// Budget
class Budget {
    constructor(){
        this.entries=[]
    }
    addEntry(newEntry){
        this.entries.push(newEntry)
    }
    getCurrentBalance(){
        let cuenta=0
        this.entries.forEach((element)=>{
            //console.log(element)
            if(element.type==="income"){
                cuenta+=element.amount
            }else{
                cuenta-=element.amount
            }
        });
        return cuenta
    }
        
    
    getFormattedEntries(){
        let newArrEntries=[]
        this.entries.forEach((element)=>{
            newArrEntries.push(`${element.date} | ${element.description} | ${element.getFormattedAmount(element.amount)}`)
        });
        console.log(newArrEntries)
        return newArrEntries
    }

}