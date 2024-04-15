// Entry
class Entry {
    //definimos las propiedades
    constructor(date, amount, description) {
        this.date = date
        this.amount = amount
        this.description = description
    }

    //metodos
    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    //constructor con parámetros anteriores (no añadimos la nueva propiedad porque tiene un valor predeterminado)
    constructor(date, amount, description) {
        //definimos super con los parametros de la clase padre
        super(date, amount, description)

        //añadimos la nueva propiedad con valor definido por defecto
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    //constructor con parametros anteriores y nueva propiedad paid
    constructor(date, amount, description, paid) {
        //definimos super con los parametros de la clase padre
        super(date, amount, description)
        //añadimos nuevas propiedades
        this.type = "expense"
        this.paid = paid
    }

    //metodos: añadimos el simbolo -
    getFormattedAmount() {
        return `-${this.amount} €`
    }
}


// Budget
class Budget {
    //constructor
    constructor(){
        this.entries = []
    }

    //methods
    addEntry(nuevaEntry) {
        this.entries.push(nuevaEntry)
    }

    getCurrentBalance() {
        // console.log(this.entries)
        // clausula de guardia: controlamos si el amount de entrada es 0
        if (this.entries[i].length === 0){
            return 0
        }
        //si no es 0 iteramos por el array
        let sumIncome 
        let sumExpense
        for ( let i = 0; i < this.entries.length; i++ ) {

            if (this.entries[i].type === "income") {
                sumIncome +=  this.entries[i].amount
            }else if (this.entries[i].type === "expense") {
                sumExpense +=  this.entries[i].amount
            }  
        }
        let balance = sumIncome + sumExpense
        return balance

    }
}
