// Entry
class Entry {
    constructor (date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    // Métodos

    getFormattedAmount() {
        return `${this.amount} €`;
    }

}

// Income
class Income extends Entry {
    constructor (date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }

}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super(date, amount, description)
        this.paid = paid;
        this.type = "expense";
    }

    // Métodos

    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor () {
        this.entries = [];
    }

    // Métodos

    addEntry(nuevaEntrada) {
        this.entries.push(nuevaEntrada);
    }

    getCurrentBalance() {
        if(this.entries.length === 0) {
            return 0;
        }
        
        let totalIncome = 0;
        let totalExpense = 0;
        let balance = 0;

        for (let i=0; i<this.entries.length; i++) {
            if(this.entries[i].type === "income") {
                totalIncome += this.entries[i].amount;
            }
            else if(this.entries[i].type === "expense") {
                totalExpense += this.entries[i].amount;
            }
        }

        //console.log(this.entries);

        //console.log(totalIncome + " Total Ingresos");
        balance = totalIncome - totalExpense;
        return balance;
    }

    getFormattedEntries() {
        let listaEntradas = [];

        for(let i=0;i<this.entries.length;i++) {
            let entradaNuevoFormato = "";


            // Añadimos al nuevo string el nuevo formato y hacemos push para introducirlo en el array de listaEntradas

            if(this.entries[i].type === "income") {
                 entradaNuevoFormato = `${this.entries[i].date} | ${this.entries[i].description} | ${this.entries[i].amount} €`;
                 listaEntradas.push(entradaNuevoFormato);

                
            }

            // Lo mismo con "expense"
            if(this.entries[i].type === "expense") {
                entradaNuevoFormato = `${this.entries[i].date} | ${this.entries[i].description} | -${this.entries[i].amount} €`;
                listaEntradas.push(entradaNuevoFormato);
           }
        }

        // Devolvemos el nuevo array con el nuevo formato
        console.log(listaEntradas);
        return listaEntradas;
    }

}
