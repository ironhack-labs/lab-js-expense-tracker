console.clear()

// Entry
class Entry {
    constructor(date, amount, description){
        this.date= date,
        this.amount= amount,
        this.description = description
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry{
    constructor(date, amount, description){
        super(date, amount, description),
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description),
        this.type = "expense",
        this.paid = paid
    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }
    addEntry(Entry){
        this.entries.push(Entry);
        return
    }
    getCurrentBalance(){
        let totalIncome = 0;
        let totalExpense = 0;

        for (let entry of this.entries) {
            if (entry instanceof Income) {
                totalIncome += entry.amount; // Accumulate income amounts
            } else if (entry instanceof Expense) {
                totalExpense += entry.amount; // Accumulate expense amounts
            }
        }

    return totalIncome - totalExpense;
        
    }

}