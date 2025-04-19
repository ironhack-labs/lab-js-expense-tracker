// Entry
class Entry { //parent
    constructor(date, amount, description) {
        this.date = date  //not separated by commas- this constructor is a function(not an object but is working to construct an object) whos operation is to assign a date, amt and descrip value. commas would separate this single function we are invoking- assigning values to the keys.
        this.amount = amount
        this.description = description
    }

    getFormattedAmount() { //outside of the constructor, every object will have this method. 
        return `${this.amount} €`
    }
}

// Income //subclass of entry
class Income extends Entry {
    constructor(date, amount, description) { //added income as a subclass //every class needs an instructor
        super(date, amount, description)
        this.type = 'income'
    }
}

//Expense //subclass of entry
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description)
        this.type = 'expense'
        this.paid = paid //should take 'paid' (boolean) as 4th argument and set it to the 'paid' property. why not in quotes? because paid is not the type, paid is paid(the key)
    }

    getFormattedAmount() {
        return `-${super.getFormattedAmount()}` // or you can use this again: return `${this.amount} €`
    }
}

// Budget //subclass of entry
class Budget {
    constructor() {
        this.entries = []
    }

    addEntry(entry) {
        this.entries.push(entry)
    }

    getCurrentBalance() {

        let balance = 0 //define it at zero so that balance has a data type

        this.entries.forEach((entry) => {
            if (entry.type === 'income') {
                balance += entry.amount
            } else {
                balance -= entry.amount
            }
        })

        return balance

    }

    getFormattedEntries() {
        
        let theseEntries = []

        this.entries.forEach((entry) => {

            let returnString = `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
            theseEntries.push(returnString)
        
        })

        return theseEntries

    }
}


let income1 = new Income("12/24/2024", 99, "gift")
let expense1 = new Expense("5/12/2025", 130, "internet", false)
console.log("This is income1 ====>", income1)
console.log("This is expense1 =====>", expense1, expense1.getFormattedAmount())

budget1.addEntry(new Income('5/12/2024', 30, 'dog-walking')) //invoked the addEntry method and pushed into it using the entry constructor
console.log("after addEntry===>", budget1)