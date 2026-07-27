// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description
    }

    getFormattedAmount(){
        return `${this.amount} €`
    }
}

//Test
let entry1 = new Entry("nnn", "100", "nnn")
console.log(entry1.getFormattedAmount())


//--------------

// Income
class Income extends Entry {
    constructor(date, amount, description){ // here is necesary to add the class properties to inherit
        
        super(date, amount, description)
        this.type = "income" // possible to create new static properties for the class like this 
    }
}

//---------------

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super (date, amount, description)
        this.type = "expense" // this one is static 
        this.paid = paid // this one is dynamic 
    }

    getFormattedAmount(){
        return `-${this.amount} €`
    }

}
// Test:
let Expense1 = new Expense("nnn", "100", "nnn") 
console.log(Expense1.getFormattedAmount())

// Budget
class Budget {
    constructor(){
        this.entries = []
    }
    
    addEntry(newEntry){
        this.entries.push(newEntry) // Just push the passed entry object into the entries array
    }

    getCurrentBalance(){

        if (this.entries.length === 0){
            return 0 // this is the way to have empty array (0 elements)
        }

        let sumIncome = 0
        let sumExpense = 0 

        this.entries.forEach((entry) => {
            if (entry.type === "income"){
                sumIncome += entry.amount;
            } else if (entry.type === "expense"){
                sumExpense += entry.amount;
            }
        })
        
        return sumIncome - sumExpense

    }

    getFormattedEntries(){

        let formattedArray = []

        this.entries.forEach((entry) => {
           
            formattedArray.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`) // we use the function form above to avoid doing a conditional again 
                
        })
        
        return formattedArray

    }
}
