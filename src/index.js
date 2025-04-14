// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return `${this.amount} €` /* to access inner properties use
        the this. as well */
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
class Expense extends Entry{
    constructor(date, amount, description, paid){
        super (date, amount, description);
        this.type = "expense";
        this.paid = paid;
    }

    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }

    addEntry(entry) {
        this.entries.push(entry);
    }

    getCurrentBalance(){
        if (this.entries.length === 0) {
            return 0;
        }
        /* should calculate and return
        the balance, which is the total income minus the 
        total expenses */

        let totalIncome = 0;
        let totalExpense = 0;
        
        this.entries.forEach(function adding(entry){
            if (entry.type === "income"){
                totalIncome += entry.amount;
            } else if (entry.type === "expense"){
                totalExpense += entry.amount;
            }
        })

        return totalIncome - totalExpense;
    }

    /* BONUS */
    getFormattedEntries(){
        let entriesSummary = [];
        this.entries.forEach(function addingEntry(entry){
            if (entry.type === "income"){
                entriesSummary.push(`${entry.date} | ${entry.description} | +${entry.amount} €`);
            } else if (entry.type === "expense"){
                entriesSummary.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
            }
        })
        return entriesSummary;

    }

    /* end of BONUS */ 
    /* I dont understand why Jasmine is returning the last condition red, if someone has time to check */
}

