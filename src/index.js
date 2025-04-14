// Entry
class Entry {
    constructor (date, amount, description) {
        this.date = date // fecha de entrada
        this.amount = amount // cantidad del monto
        this.description = description // descripción
    }

getFormattedAmount() {

    let message = `${this.amount} €`; // Me da la cantidad (en string)
    
    return message; // Me regresa el mensaje
    }
}
// Income
class Income  extends Entry {
    constructor (date, amount, description) {
        super (date, amount,description) // Llamo los parametros del padre (Entry)
        this.type = 'income'
    }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super (date, amount, description)
        this.paid = paid // nuevo parametro
        this.type = 'expense'
    }
getFormattedAmount() {

    let message = `-${this.amount} €`; // Me da la cantidad (en string)
    return message;    
    }
}
// Budget
class Budget {
    constructor () { // constructor sin argumentos
        this.entries = []; // Array vacío
    }
addEntry(entry) {
    this.entries.push(entry); // 
    }
getCurrentBalance() {
    let totalIncome = 0;
    let totalExpense = 0;
    for (let i = 0; i < this.entries.length; i++) {
        if (this.entries[i].type === "income") {
            totalIncome += this.entries[i].amount; //
        } else if (this.entries[i].type === "expense") {
            totalExpense += this.entries[i].amount;
        }
        }
        return totalIncome - totalExpense;
    }
    
}

