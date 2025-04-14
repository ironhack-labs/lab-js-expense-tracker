class Budget {
  constructor() {
    this.entries = [];
  }

  addEntry(newEntry) {
    this.entries.push(newEntry);
  }

  getTotalIncome() {
    let totalIncome = 0;
    this.entries.forEach(entry => {
      if (entry instanceof Income) {
        totalIncome += entry.amount;
      }
    });
    return totalIncome;
  }

  getTotalExpense() {
    let totalExpense = 0;
    this.entries.forEach(entry => {
      if (entry instanceof Expense) {
        totalExpense += entry.amount;
      }
    });
    return totalExpense;
  }

  getCurrentBalance() {
    const totalIncome = this.getTotalIncome();
    const totalExpense = this.getTotalExpense();
    return totalIncome - totalExpense;
  }
}
