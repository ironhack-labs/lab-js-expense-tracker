// Entry
// Entry (Superclasse)
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

// Income (Subclasse)
class Income extends Entry {
  constructor(date, amount, description) {
    // 1. O super() passa os argumentos diretamente para a classe pai (Entry)
    // Isso resolve automaticamente os requisitos 1, 2 e 3
    super(date, amount, description);

    // 4. Cria a propriedade 'type' com o valor de texto "income"
    this.type = "income";
  }
}

// Expense
class Expense extends Income {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";
  }
  getFormattedAmount() {
    let message = `-${this.amount} €`;
    return message;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }
  addEntry(entry) {
    this.entries.push(entry);
  }
  getCurrentBalance() {
    let balance = 0;
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].type === "income") {
        balance += this.entries[i].amount;
      } else if (this.entries[i].type === "expense") {
        balance -= this.entries[i].amount;
      }
    }

    return balance;
  }
}
