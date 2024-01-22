// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return (`${this.amount} €`)

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
    constructor(date, amount, description, paid){
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense"
    }
    getFormattedAmount(){
        return (`-${this.amount} €`)

    }

}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }
    addEntry(entry){
        this.entries.push(entry);
    }
    getTotalIncome(){

        let totalIncome = 0

        this.entries.forEach(function(income) {
            if (income instanceof Income) {
                totalIncome += income.amount;
            }
            
        });
        return totalIncome
    }
    getTotalExpense(){

        let totalExpense = 0


        this.entries.forEach(function(expenses) {
            if (expenses instanceof Expense) {
                totalExpense += expenses.amount
            }
        });
        return totalExpense
    }
    getCurrentBalance() {

        const totalIncome = this.getTotalIncome();
        const totalExpense = this.getTotalExpense();

        const totalBalance = totalIncome - totalExpense;

       

        return totalBalance;
    }
    ////// Bonus 5
    getTotal(type) {
        let total = 0;

        this.entries.forEach(function(entry) {
            if (entry.type === type) {
                total += entry.amount

            }
            
        });
        return total
    }
    
    /// Bonus 6
    getFormattedEntries() {

        let formattedEntries = []
  
        this.entries.forEach(function(type) {
            if (this.entry.type === "income") {
                formattedEntries.push(`${this.date} | ${this.description} | + ${this.amount} $`)
            }
            else if (this.entry.type === "expenses") {
                formattedEntries.push(`${this.date} | ${this.description} | - ${this.amount} $`)
            }
        });

        return formattedEntries;
    }


}
