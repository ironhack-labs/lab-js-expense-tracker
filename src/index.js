// Entry
class Entry {
    constructor(fecha,cantidad,descripcion){
        this.date = fecha;
        this.amount = cantidad;
        this.descripcion = descripcion;
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor (fecha,cantidad,descripcion){
        super(fecha,cantidad,descripcion);

        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(fecha,cantidad,descripcion,paid){
        super(fecha,cantidad,descripcion);
        this.paid = paid;
        this.type = "expense"
    }
    getFormattedAmount(){
        return `$- {Expense.cantidad} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];

    }

    addEntry(object){
        this.entries.push(object)
    }

    getCurrentBalance(){
        if(this.entries.length === 0){
            return 0
        }
        let totalIncome = this.entries
            .filter(entry => entry instanceof Income) 
            .reduce((acc, income) => acc + income.amount, 0); 

        
        let totalExpenses = this.entries
            .filter(entry => entry instanceof Expense) 
            .reduce((acc, expense) => acc + expense.amount, 0); 

        return totalIncome - totalExpenses;
    }
}
