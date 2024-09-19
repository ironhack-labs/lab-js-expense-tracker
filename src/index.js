// Entry
class Entry {
    // Constructor que toma tres argumentos: date, amount, description
    constructor(date, amount, description) {
      this.date = date;           // Asigna el primer argumento a la propiedad date
      this.amount = amount;       // Asigna el segundo argumento a la propiedad amount
      this.description = description; // Asigna el tercer argumento a la propiedad description
    }
    getFormattedAmount () {
        return `${this.amount} €`;
    }
  }
  

// Income
class Income extends Entry {
 constructor (date,amount,description){
    super (date,amount,description);
    this.type = "income";
 }
}

// Expense
class Expense extends Income {
    constructor (date,amount,description,paid){
        super (date,amount,description);
        this.paid = paid;
        this.type = "expense";
    }
    getFormattedAmount() {
        return `${-this.amount} €`;
    }
}
   

// Budget
class Budget {
    constructor(){
    this.entries = [];
}

addEntry(entry) {
    if (entry instanceof Entry) { // Verifica que entry sea un elemento de Entry
      this.entries.push(entry); // Agrega la entrada al array entries
    } else {
      throw new Error("Invalid entry. Must be an instance of Entry.");
    }
  }
  getCurrentBalance() {
    let balance = 0;

    // Itera sobre todas las entradas
    for (let entry of this.entries) {
      if (entry.type === "income") {
        balance += entry.amount; // Suma los ingresos
      } else if (entry.type === "expense") {
        balance -= entry.amount; // Resta los gastos
      }
    }

    return balance;
  }
  getFormattedEntries() {
    const formattedEntries = []; // Array para almacenar las entradas formateadas

    // Usa forEach para iterar sobre cada entrada en el array entries
    this.entries.forEach(entry => {
      // Formatea la entrada como una cadena
      const formattedEntry = `${entry.description}: ${entry.getFormattedAmount()}`;
      // Agrega la cadena formateada al array
      formattedEntries.push(formattedEntry);
    });

    // Devuelve el array de entradas formateadas
    return formattedEntries;
  }
}

