// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  // Devuelve el amount como string seguido de " €"
  getFormattedAmount() {
    return `${this.amount} €`;
  }
}

// Ejemplo Entry
const entry1 = new Entry("2025-11-17", 100, "Salario");
console.log(entry1.getFormattedAmount()); // "100 €"

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description); // Llama al constructor de Entry
    this.type = "income";             // Propiedad adicional
  }
}

// Ejemplo Income
const income1 = new Income("2025-11-17", 500, "Salario");
console.log(income1.getFormattedAmount()); // "500 €"
console.log(income1.type);                 // "income"

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description); // Llama al constructor de Entry
    this.type = "expense";            // Propiedad adicional
    this.paid = paid;                 // Indica si el gasto ya se pagó
  }

  // Sobrescribimos getFormattedAmount para mostrar el signo negativo
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Ejemplo Expense
const expense1 = new Expense("2025-11-17", 99, "Comida", false);
console.log(expense1.getFormattedAmount()); // "-99 €"
console.log(expense1.type);                 // "expense"
console.log(expense1.paid);                 // false


class Budget {
  constructor() {
    // Constructor sin argumentos
    // Inicializa la propiedad entries como un array vacío
    this.entries = [];
  }

  // addEntry: añade un objeto Income o Expense al array
  addEntry(entry) {
    this.entries.push(entry);
  }

  // getCurrentBalance: devuelve ingresos - gastos
  getCurrentBalance() {
    let balance = 0;
    this.entries.forEach(entry => {
      if (entry.type === "income") {
        balance += entry.amount;
      } else if (entry.type === "expense") {
        balance -= entry.amount;
      }
    });
    return balance;
  }

  // Bonus Iteration 5: devuelve un array de strings formateados
  getFormattedEntries() {
    const formatted = [];
    this.entries.forEach(entry => {
      formatted.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`);
    });
    return formatted;
  }
}

// Ejemplo de uso:

const myBudget = new Budget();
console.log(myBudget.entries); // []

// Añadimos ingresos y gastos
myBudget.addEntry(new Income("2025-11-17", 500, "Salario"));
myBudget.addEntry(new Expense("2025-11-18", 100, "Comida", true));

console.log(myBudget.getCurrentBalance()); // 400
console.log(myBudget.getFormattedEntries());
/* Resultado:
[
  "2025-11-17 | Salario | 500 €",
  "2025-11-18 | Comida | -100 €"
]
*/