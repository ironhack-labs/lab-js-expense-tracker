// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return `${this.amount} €`;
    }
}

const Gastos = new Entry("2025-11-17", 55.50, "Cena en restaurante");
console.log(`Fecha: ${Gastos.date}`, `| Cantidad: ${Gastos.getFormattedAmount()}`, `| Descripcion: ${Gastos.description}`);
console.log(`\n--- Objeto Entry ---`);
console.log(`Fecha: ${Gastos.date}`);
console.log(`Cantidad: ${Gastos.getFormattedAmount()}`);
console.log(`Descripcion: ${Gastos.description}`);
// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}
const miIngreso = new Income("2025-11-15", 1500, "Salario");
console.log(`\n--- Objeto Income ---`);
console.log(`Descripción: ${miIngreso.description}`); // Heredado
console.log(`Monto: ${miIngreso.getFormattedAmount()}`); // Heredado
console.log(`Tipo: ${miIngreso.type}`); // Propio de Income

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.paid = paid;
        this.type = "expense";
    }
    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

const miGasto = new Expense("2025-11-18", 99.99, "Renta", true);
console.log(`\n--- Objeto Expense ---`);
console.log(`Monto Formateado: ${miGasto.getFormattedAmount()}`);

// Budget
class Budget {
    constructor() {
        this.entries = []; 
    }

    addEntry(entry) {
        this.entries.push(entry); 
    }

    getTotalIncome() {
        return this.entries.reduce((totalIncome, entry) => {
            if (entry.type === "income") {
                return totalIncome + entry.amount;
            } else {
                return totalIncome;
            }
        }, 0);
    }

    getTotalExpense() {
        return this.entries.reduce((totalExpense, entry) => {
            if (entry.type === "expense") {
                return totalExpense + entry.amount;
            } else {
                return totalExpense;
            }
        }, 0);
    }
}
const budget = new Budget();

// Añadir Ingresos
const salario = new Income("2025-11-15", 2000, "Salario");
const regalo = new Income("2025-11-16", 100, "Regalo");
budget.addEntry(salario);
budget.addEntry(regalo);


// Añadir Gastos
const renta = new Expense("2025-11-01", 800, "Renta", true);
const comida = new Expense("2025-11-17", 50, "Comida", true);
budget.addEntry(renta);
budget.addEntry(comida);


console.log(`\n--- Reporte de Presupuesto ---`);
console.log(`Total Ingresos: ${budget.getTotalIncome()} €`);
console.log(`Total Gastos: ${budget.getTotalExpense()} €`);
