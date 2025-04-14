/*Iteración 1 | Entry

Implementa la clase Entry para que tenga las siguientes propiedades y métodos:

* Constructor
**  El constructor debe aceptar 3 argumentos: date, amount, y description.
**  El primer argumento (date) debe asignarse a una propiedad date.
**  El segundo argumento (amount) debe asignarse a una propiedad amount.
**  El tercer argumento (description) debe asignarse a una propiedad description.
* Método getFormattedAmount()
**  Este método debe estar definido en la clase Entry.
**  El método no debe recibir argumentos.
**  Debe devolver una cadena de texto con el formato AMOUNT €, donde AMOUNT es el valor de la propiedad amount, seguido del símbolo "€".
**  Este es el primer paso para poner en marcha el programa. Una vez que completes esta iteración, pasarás a la siguiente donde se implementarán las clases derivadas.*/

// Entry
class Entry {
    constructor(date, amount, description) {
      // Aquí asignamos los parámetros a las propiedades de la clase
      this.date = date;
      this.amount = amount;
      this.description = description;
    }
    getFormattedAmount(){
        // Devolvemos la cantidad formateada con el símbolo €
        return `${this.amount} €`;
    }
}

const entry = new Entry("2024-06-17", 100, "food");
console.log(entry.getFormattedAmount()); // Debería mostrar: "100 €"

// Income
class Income extends Entry {
    constructor(date, amount, description) {
      super(date, amount, description);  // Llamamos al constructor de Entry
      this.type = "income";  // Agregamos la propiedad "type"
    }
  }
/* Prueba */
const income = new Income("2024-06-17", 500, "salary");
console.log(income.date);  // "2024-06-17"
console.log(income.amount);  // 500
console.log(income.description);  // "salary"
console.log(income.type);  // "income"

  

// Expense - objetivo: Crear una clase Expense que extienda la clase Entry y añada las propiedades type y paid.
class Expense extends Entry {
    constructor(date, amount, description, paid) {
      super(date, amount, description);  // Llamamos al constructor de Entry
      this.paid = paid;  // Asignamos el valor de "paid"
      this.type = "expense";  // Establecemos "expense" como el tipo
    }
  
    getFormattedAmount() {
      return `-${this.amount} €`;  // Devolver con el signo negativo
    }
  }
  
/*prueba*/
const expense = new Expense("2024-06-17", 100, "food", true);
console.log(expense.date);  // "2024-06-17"
console.log(expense.amount);  // 100
console.log(expense.description);  // "food"
console.log(expense.paid);  // true
console.log(expense.type);  // "expense"
console.log(expense.getFormattedAmount());  // "-100 €"

/*Crear una clase Budget que gestione una lista de entradas (entries), permitiendo añadir entradas de ingresos y gastos, y calcular el balance total (ingresos - gastos).*/
class Budget {
    constructor() {
      this.entries = [];
    }
  
    addEntry(entry) {
      this.entries.push(entry);
    }
  
    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        }
        return this.entries.reduce((balance, entry) => {
            if (entry.type === "income") {
                return balance + entry.amount;
            } else if (entry.type === "expense") {
                return balance - entry.amount;
            }
        }, 0);
    }
    getFormattedEntries() {
        return this.entries.map(entry => `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`);
    
      }
     
  }