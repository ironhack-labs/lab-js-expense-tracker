// Entry
class Entry {

    constructor(date, amount, description){

        this.date = date
        this.amount = amount
        this.description = description

    }
    getFormattedAmount (){

        return this.amount + " €"
    }
}

// Ingresos
class Income extends Entry{

    constructor (date, amount, description){

        super(date, amount, description)

        this.type = "income"


    }
}

// Gastos
class Expense extends Entry {

    constructor (date, amount, description, paid){

        super(date, amount, description)

        this.type = "expense"
        this.paid = paid
    }

    getFormattedAmount(){

        return "-" + this.amount
    }

}

// Budget
class Budget {

    constructor(){
        this.entries = []
    }



    addEntry(entry) {

        this.entries.push(entry)



    }
getCurrentBalance() {

    let balance = 0
    let gastos = 0
    let ingresos = 0
    if(this.entries.length===0){

        return 0
    }
    for(let i =0; i<this.entries.length; i++){
        const entry = this.entries[i]
        if(entry.type==="expense"){

            ingresos -= entry.amount
        }else if(entry.type==="income"){
    
            gastos += entry.amount
        }

    }
    
    return balance = ingresos - gastos + " €"
}
}
